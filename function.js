var display = function () {
    console.log("Hello from display");
};
display();
/************** */
var sum = function (x, y) {
    return x + y;
};
var res = sum(20, 5);
console.log(res);
//*************** */
var sum2 = function (x, y) {
    if (y === void 0) { y = 200; }
    if (y == undefined) {
        y = 0;
    }
    return x + y;
};
/********* */
var res2 = sum2(10);
console.log(res2);
/************ */
var sum3 = function (x, y) {
    if (y == undefined) {
        y = 0;
    }
    return x + y;
};
var res3 = sum3(20, 1);
console.log(res3);
/************ */
var b = 5;
var c = undefined;
console.log(b + c);
