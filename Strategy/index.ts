class StrategyContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy
    }

    Operation(a: number, b: number) {
        this.strategy.TwoNumberOperation(a, b)
    }
}

interface Strategy {
    TwoNumberOperation(a: number, b: number): void
}

class AddStrategy implements Strategy {
    TwoNumberOperation(a: number, b: number) {
        console.log(a + b)
    }
}

class SubtractionStrategy implements Strategy {
    TwoNumberOperation(a: number, b: number) {
        console.log(a - b)
    }
}

const addStrategy = new AddStrategy()
const subtractionStrategy = new SubtractionStrategy()
const strategyContext = new StrategyContext(addStrategy)
strategyContext.Operation(2023, 527)