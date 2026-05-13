class Calculator {
    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        if (b === 0) return "Error: Division by zero";
        return a / b;
    }
}

export default Calculator;