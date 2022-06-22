var Students = /** @class */ (function () {
    function Students(name, email, age) {
        this.name = "";
        this.email = "";
        this.age = 0;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Students.prototype.displayVal = function () {
        console.log("constr", this.name, this.email, this.age);
    };
    return Students;
}());
var S1 = new Students('rohit', 'rohit@gmail.com', 24);
S1.displayVal();
