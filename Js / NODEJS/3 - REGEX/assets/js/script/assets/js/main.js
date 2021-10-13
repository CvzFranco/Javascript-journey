
//var texte = "Il fait beau dans un beau pays d'homme beau."
var texte = "Il est né le 12/12/2005. Sa date de naissance de cette année\
 est bien le 14/12/2023. CE jour le 26/01/2016"
 var names = "Alice, Dupont, Nicols, Julie, Anne"

//var result = texte.search(/beau/)
//var result = texte.replace(/beau/g, 'bon')
var result = texte.match(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g)

var names_arr = texte.split(/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g)

console.log(names_arr);

