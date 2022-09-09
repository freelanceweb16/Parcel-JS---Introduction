const calculator = (a: number, b: number, operator: string) => {
    let result: number;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
        default:
            result = 0;
            break;
    }
    
    return `<h2>The result of ${a} ${operator} ${b} is ${result.toFixed(2)}</h2>`;
}

export default calculator;