reverse = function (x) {
        var NG = 1;
        var n = x;
        var s = "";
        if (x < 0) {
            NG = -1;
            n *= -1;
        }
        while ((((n / 10 | 0) !== 0) || (n % 10 !== 0))) {
            {
                var u = n % 10;
                n = (n / 10 | 0);
                s = s + u;
            }
        }
        ;
        return NG * parseInt(s);
    };