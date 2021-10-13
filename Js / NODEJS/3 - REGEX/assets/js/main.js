
var reg = /gr[ao]s/.test("gros")

// verification d'un nombre écrit avec 4 chiffres
var annee = /[0-9]{4}/.test(4)


// 12/02/2005

// Vérification au sens large
// var date_model = /[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}/
//var date_model = /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/

// Vérification strict
// var date_model = /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/
//var date_model = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/


// email@gmail.com

var check_date = date_model.test("ab/12/1242")


console.log(reg);
// gros
// gras