var alice = {}
var paul = new Object()

// Model

function Person (firstname, lastname, age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age

    this.hello = function(){
        console.log(`Hello ${firstname} ${lastname}`);
    }
}

var jeanne = new Person('Jeanne', 'Dupont', 50)
var marlene = new Person('Marlène', 'Gata', 30)
