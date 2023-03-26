abstract class Person {
    protected name: string = '';

    public abstract Operation(): void;
}

class Student extends Person{
    constructor(name: string) {
        super();
        this.name = name;
    }

    Operation() {
        console.log(this.name + "职责：学习")
    }
}

abstract class Decorator extends Person{
    protected person!: Person;
}

class DecoratorA extends Decorator{
    constructor(person: Person) {
        super();
        this.person = person
    }
    Operation() {
        this.person.Operation()
        console.log('写作业')
    }
}

class DecoratorB extends Decorator{
    constructor(person: Person) {
        super();
        this.person = person
    }
    Operation() {
        this.person.Operation()
        console.log('考试')
    }
}

let zhangsan: Person = new Student('张三')

zhangsan = new DecoratorA(zhangsan)
zhangsan = new DecoratorB(zhangsan)
zhangsan.Operation()

const lisi = new DecoratorB(new DecoratorA(new Student('李四')))
lisi.Operation()