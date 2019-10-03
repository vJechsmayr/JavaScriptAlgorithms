fibo = function (x) {
    if (x === 0) {
        return 0;
    }
    if (x <= 2) {
        return 1;
    }
    return this.fibo(x - 1) + this.fibo(x - 2);
};
fibonacci = function (x) {
    for (var i = 0; i < x; i++) {
        {
            console.info(fibo(i + 1));
        }
        ;
    }
};


