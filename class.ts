class Userss{
    name:'';
    email:'';

    addUser(user){
        return `${user} is added`
    }
}

let Users1 = new Userss;

console.log(Users1.addUser('rohit'))