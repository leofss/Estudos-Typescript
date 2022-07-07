//1 - numbers
let x : number = 10
console.log(x)

let y : number = 15.202020
console.log(y.toPrecision(3)) //mostra apenas 3 numeros 15.2


//2 - string

const FirstName : string = "Leonardo"

console.log(FirstName.toUpperCase()) //LEONARDO

let FullName : string 

const LastName : string = "Fernandes"

console.log(FirstName + " " + LastName);

//3 - boolean

let a : boolean = false

console.log(a)

//4 - inference e annotation
//annotation
const ann : string = "Teste"
//inference 
let inf = "Teste"

console.log(ann)

//desafio 

const num : number = 5

const numstring = num.toString()

const printnmb : string = `Numero ${numstring}`

console.log(printnmb)

