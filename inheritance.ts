class CreateAccount{
    createEmail(name : string){
        return `${name}@gmail.com email is created`

    }
}

class StudentAccount extends CreateAccount{
    addName(name : string){
        return `${name} student name is added`
    }
}

const SA = new StudentAccount();
console.log(SA.addName('rohit'))
console.log(SA.createEmail('rohit'))
