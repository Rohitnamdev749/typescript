class UserClass{
   private name:'';
    

    setUserName(name){
        // 'this' is a blue print of class
        this.name = name
    }
    displayUserName(){
        console.log("user name is", this.name)
        // for private method
        this.getNameLength()
    }
    private getNameLength(){
        console.log("name length", this.name.length)
    }
}

let Users2 = new UserClass;

Users2.setUserName('Rohit');
// in public we assign name outside the class
// Users2.name='';
Users2.displayUserName();
// for public method
// Users2.getNameLength()
