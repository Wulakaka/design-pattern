abstract class Product {
    private name: string;
    protected color: Color;

    public setName(name: string) {
        this.name = name
    }

    public getName(): string {
        return this.name
    }

    public setColor(color: Color) {
        this.color = color
    }

    public abstract Operation():void;
}

class ProductA extends Product {
    Operation() {
        this.color.OperationImp(this.getName())
    }
}

interface Color {
    OperationImp(name: string)
}

class Red implements Color{
    OperationImp(name: string) {
        console.log(name + 'red')
    }
}
class Blue implements Color{
    OperationImp(name: string) {
        console.log(name + 'blue')
    }
}

const productA: Product = new ProductA()
productA.setName('productA')
const red: Color = new Red()
productA.setColor(red)
productA.Operation()