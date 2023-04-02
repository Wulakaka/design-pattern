class StateContext {
    private count: number;
    private state: State;

    constructor(count: number) {
        this.count = count
        this.state = new StateA()
    }

    getState() {
        return this.state
    }

    setState(state: State) {
        this.state = state
    }

    getCount() {
        return this.count
    }

    setCount(count: number){
        this.count = count
    }

    public Request() {
        this.state.handle(this);
    }
}

interface State {
    handle(context: StateContext): void
}

class StateA implements State {
    handle(context: StateContext) {
        const count = context.getCount()
        if (count >=1) {
            console.log('购买成功')
            context.setCount(count - 1)
            if (context.getCount() === 0) {
                context.setState(new StateB())
            }
        } else {
            console.log('购买失败')
        }
    }
}

class StateB implements State {
    handle(context: StateContext) {
        const count = context.getCount()
        if (count === 0) {
            console.log("购买失败，等待补货")
            context.setCount(5)
            context.setState(new StateA())
        }
    }
}

const context = new StateContext(3)
context.Request()
context.Request()
console.log(context.getState())
context.Request()
context.Request()
context.Request()
context.Request()
console.log(context.getState())