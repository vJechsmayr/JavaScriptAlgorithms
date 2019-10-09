var myAtoi = function (str) {
    var INT_MAX = Math.pow(2, 31) - 1;
    var INT_MIN = Math.pow(-2, 31);

    if (isNaN(parseInt(str))) {
        return 0;
    } else if (parseInt(str) >= INT_MAX) {
        return INT_MAX;
    } else if (parseInt(str) <= INT_MIN) {
        return INT_MIN;
    } else {
        return parseInt(str);
    }

};
