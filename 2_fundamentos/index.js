"use strict";
//1 - numbers
let x = 10;
console.log(x);
let y = 15.202020;
console.log(y.toPrecision(3)); //mostra apenas 3 numeros 15.2
//2 - string
const FirstName = "Leonardo";
console.log(FirstName.toUpperCase()); //LEONARDO
let FullName;
const LastName = "Fernandes";
console.log(FirstName + " " + LastName);
//3 - boolean
let a = false;
console.log(a);
//4 - inference e annotation
//annotation
const ann = "Teste";
//inference 
let inf = "Teste";
console.log(ann);
//desafio 
const num = 5;
const numstring = num.toString();
const printnmb = `Numero ${numstring}`;
console.log(printnmb);
