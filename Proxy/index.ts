interface Subject {
    buy(): void
}

class AProxy implements Subject {
    realSubject: RealSubject

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject
    }

    buy() {
        this.realSubject.buy()
    }
}

class RealSubject implements Subject {
    buy() {
        console.log()
    }
}

const realSubject = new RealSubject()
const proxy = new AProxy(realSubject)
proxy.buy()