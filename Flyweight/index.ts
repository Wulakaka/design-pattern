class PieceFactory {
    private pieces = [new WhitePiece(), new BlackPiece]

    public getPiece(key: 0 | 1) {
        return this.pieces[key]
    }
}

abstract class Piece {
    protected color: string;

    protected constructor(color: string) {
        this.color = color
    }

    abstract draw(x: number, y: number): void;
}

class WhitePiece extends Piece {
    constructor() {
        super('white');
    }

    draw(x: number, y: number) {
        console.log(`x: ${x}, y: ${y}`)
    }
}

class BlackPiece extends Piece {
    constructor() {
        super('black');
    }

    draw(x: number, y: number) {
        console.log(`x: ${x}, y: ${y}`)
    }
}


class ShapeFactory {
    private map: { [key: string]: Shape } = {}

    getShape(key: string): Shape {
        if (!(key in this.map)) {
            const shape = new Circle(key)
            console.log(`create color: ${key} circle`)
            this.map[key] = shape
        }
        return this.map[key]
    }
}

abstract class Shape {
    protected color: string

    protected constructor(color: string) {
        this.color = color
    }

    public abstract draw(x: number, y: number): void;
}

class Circle extends Shape {

    constructor(color: string) {
        super(color);
    }

    draw(x: number, y: number) {
        console.log(`draw a color: ${this.color} circle x: ${x} y: ${y}`)
    }
}

const factory = new ShapeFactory()
const colors = ['red', 'blue', 'green', 'white', 'black']
for (let i = 1; i <= 10; i++) {
    const x = Math.floor(Math.random() * colors.length)
    const shape = factory.getShape(colors[x])
    console.log(`第${i}个圆`)
    shape.draw(Math.round(Math.random() * 2023), Math.round(Math.random() * 527))
}