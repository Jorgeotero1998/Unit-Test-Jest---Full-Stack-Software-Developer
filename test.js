const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test("Un euro deberia ser 1.07 dolares", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("Un dolar deberia ser 146.26 yenes", function() {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26, 2);
});

test("1000 yenes deberian ser 5.56 libras", function() {
    expect(fromYenToPound(1000)).toBeCloseTo(5.56, 2);
});
