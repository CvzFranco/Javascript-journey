/*function Person (firstname, lastname, age){
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
}*/


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

class Etudiant extends Person{
    constructor(firstname,lastname,age,level,sector){
        super(firstname,lastname,age)
        this.level = level
        this.sector = sector
    }

    getLevel(){
        console.log(`Level : ${this.level}`);
    }
    getSector(){
        console.log(`Sector : ${this.sector}`);
    }
}

var jeanne = new Person('Jeanne', 'Dupont', 50)
var marlene = new Person('Marlène', 'Gata', 30)
var Mathieu = new Etudiant('Matieu', 'Bonbon', 30,'Master 2', 'Informatique')
