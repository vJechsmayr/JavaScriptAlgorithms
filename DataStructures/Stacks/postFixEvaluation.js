function postFixEvaluation(expression) {
    if (typeof expression !== 'string' || expression.length === 0) {
        throw 'Invalid post fix expression.';
    }

    var stack = [];
    for (var i = 0; i < expression.length; i++) {
        var curr = expression[i];
        if (curr.match(/^\d$/)) {
            stack.push(curr - '0');
        } else if (curr.match(/^[+-/*]$/)) {
            if (stack.length < 2) {
                throw 'Invalid post fix expression.';
            }

            var op = {
                '+' : function(a, b) { return a + b },
                '-': function(a, b) { return b - a },
                '/': function(a, b) { return b / a },
                '*': function(a, b) { return a * b }
            };
            var first = stack.pop();
            var second = stack.pop();

            stack.push(op[curr](first, second));
        } else {
            throw 'Invalid post fix expression.';
        }
    }

    return stack.pop();
}

console.log(postFixEvaluation("235*+8-")); // === 9
console.log(postFixEvaluation("23/")); // === 0.66
