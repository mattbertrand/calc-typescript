import { question } from 'readline-sync'

function main(): void 
{
    const firstStr: string = question('Enter first number:\n')
    const operator: string = question('Enter operator:\n')
    const secondStr: string = question('Enter second number:\n')

    const firstNum = isNumber(firstStr)

    console.log(firstNum)
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str)
    const isNum: boolean = !isNaN(maybeNum)
    return isNum
}

main()