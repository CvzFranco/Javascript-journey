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

var getHeritages = (obj) =>{

    var prototype = Object.getPrototypeOf(obj)

    var result = []

    while (prototype) {
        result[result.length] = prototype.constructor.name
        prototype = Object.getPrototypeOf(prototype)
    }

    return result

}

var displayObject = (obj) =>{
    var content = Object.entries(obj)
    document.getElementById("app").innerHTML = ""

    content.forEach(tab => {
        let result = `<div><strong>${tab[0]}</strong> : ${tab[1]} </div>`
        document.getElementById("app").innerHTML += result
    });

}


var jeanne = new Person('Jeanne', 'Dupont', 50)
var marlene = new Person('Marlène', 'Gata', 30)
var mathieu = new Etudiant('Mathieu', 'Bonbon', 30,'Master 2', 'Informatique')
