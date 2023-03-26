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
    protected person: Person;
    constructor(person: Person) {
        super();
        this.person = person
    }
    Operation() {
        this.person.Operation()
    }
}

const zhangsan = new Student('张三')
zhangsan.Operation()