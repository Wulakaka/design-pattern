class Context {
    private regions = ['A区','B区','C区']
    private persons = ['开发人员','测试人员',"调试人员"]
    private nontermianl = new NonterminalExpression()
    private region: TerminalExpression = new TerminalExpression(this.regions)
    private person: TerminalExpression = new TerminalExpression(this.persons)

    constructor() {
    }

    check(info: string) {
        return this.nontermianl.Interpret(info)
    }
}


interface Expression {
    Interpret(info: string): boolean
}

class NonterminalExpression implements Expression{
    Interpret(info: string): boolean {
        const str = info.split('的')

    }
}


class TerminalExpression implements Expression {
    set = new Set<string>()

    constructor(data: string[]) {
        for (let i of data) {

            this.set.add(i)
        }
    }
    Interpret(info: string): boolean {
        return this.set.has(info)
    }
}