class Students{
    // this also don't need to declair in shorthand trick
    name = "";
    email = "";
    age = 0;

    constructor(name,email,age){
        this.name = name
        this.email = email
        this.age = age

    }

    // shorthand initilization trick
    // constructor(public name, public email, public age){
    //    
    // }

    displayVal(){
        console.log("constr",this.name,this.email,this.age)
    }
}


const S1 = new Students('rohit','rohit@gmail.com',24);
S1.displayVal()