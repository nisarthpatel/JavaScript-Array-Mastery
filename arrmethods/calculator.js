function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (expression) {
        let parts = expression.split(' ');
        if (parts.length !== 3) {
            return NaN;
        }
        let a = parseFloat(parts[0]);
        let operator = parts[1];
        let b = parseFloat(parts[2]);
        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[operator](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

module.exports = Calculator;
