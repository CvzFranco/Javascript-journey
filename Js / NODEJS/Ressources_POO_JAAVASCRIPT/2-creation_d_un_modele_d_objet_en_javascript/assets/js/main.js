// ECMAScript 2015
class Person{
    constructor(firstname, lastname, age){
        this.firstname = firstname
        this.lastname =lastname
        this.age = age
        this.createdAt = new Date()
    }

    hello(){
        console.log(`Hello ${this.firstname}`);
    }
    getAge(){
        console.log(`Hello. Je m'appelle ${this.firstname}
         et j'ai ${this.age} ans`)
    }
}

var jeanne = new Person('Jeanne', 'Dupont', 50)
var marlene = new Person('Marlène', 'Gata', 30)
