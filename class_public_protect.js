var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    UserClass.prototype.setUserName = function (name) {
        // 'this' is a blue print of class
        this.name = name;
    };
    UserClass.prototype.displayUserName = function () {
        console.log("user name is", this.name);
        // for private method
        this.getNameLength();
    };
    UserClass.prototype.getNameLength = function () {
        console.log("name length", this.name.length);
    };
    return UserClass;
}());
var Users2 = new UserClass;
Users2.setUserName('Rohit');
// in public we assign name outside the class
// Users2.name='';
Users2.displayUserName();
// for public method
// Users2.getNameLength()
