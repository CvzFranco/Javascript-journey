function Person (firstname, lastname, age){
    this.firstname = firstname
    this.lastname = lastname
    this.age = age

    this.hello = function(){
        console.log(`Hello ${firstname} ${lastname}`);
    }
    this.getAge = function(){
        console.log(`Hello. Je m'appelle ${firstname}
         et j'ai ${age} ans`)
    }
}

function Etudiant (firstname, lastname, age, level, sector){
    this.person = Person;
    this.person(firstname,lastname,age)
    this.age = age 
    this.sector = sector 

    this.getLevel = function(){
        console.log(`Level : ${level}`);
    }
    this.getSector = function(){
        console.log(`Sector : ${sector}`);
    }
}


// ECMAScript 2015
/*class Person{
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
}*/

var jeanne = new Person('Jeanne', 'Dupont', 50)
var marlene = new Person('Marlène', 'Gata', 30)
var nicole = new Etudiant('Nicole', 'Dupont', 30,'Master', 'Info')
