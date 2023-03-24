interface Waiter {
    construct()
    setPizzaBuilder()
    getPizza
}

interface PizzaBuilder {
    createNewPizza()
    buildParts()
    getPizza
}

interface HawaiianPizzaBuilder extends PizzaBuilder {
    buildParts()
}

interface SpicyPizzaBuilder extends PizzaBuilder {
    buildParts()
}