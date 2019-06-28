var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display1 = function () { return console.log(_this.empCode + " " + _this.empName); };
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(1, 'ck');
emp.display1();
