import { question } from 'readline-sync'

function main(): void 
{
    const firstStr: string = question('Enter first number:\n')
    const operator: string = question('Enter operator:\n')
    const secondStr: string = question('Enter second number:\n')

    const firstNum = isNumber(firstStr)

    const op = isOperator(operator)

    console.log(op)
}

function isOperator(operator: string): boolean
{
    switch(operator){
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default:
            return false
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str)
    const isNum: boolean = !isNaN(maybeNum)
    return isNum
}

main()