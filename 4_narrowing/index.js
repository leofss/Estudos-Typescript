"use strict";
//1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log(`impossivel somar ${a} com ${b}`);
    }
}
sum("4", "59");
sum(10, 20);
sum("5", 6);
//2 - checando se valor existe 
function operation(arr, op) {
    if (op) {
        if (op === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (op === "mult") {
            const mult = arr.reduce((i, total) => i * total);
            console.log(mult);
        }
    }
    else {
        console.log("insira uma existente");
    }
}
operation([1, 2, 3, 4, 5, 6, 7, 8], "sum");
operation([1, 2, 3, 4, 5, 6, 7, 8], "mult");
//3 - instance of
class User {
    constructor(name, idade) {
        this.name = name;
        this.idade = idade;
    }
}
class SuperUser extends User {
    constructor(name, idade) {
        super(name, idade);
    }
}
const John = new User("John", 10);
const Paul = new SuperUser("Paul", 10);
function Gre(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá Super ${user.name} ${user.idade}`);
    }
    else if (user instanceof User) {
        console.log(`Ola ${user.name} ${user.idade}`);
    }
}
Gre(John);
Gre(Paul);
//4 - operador in
class Cat {
    constructor(nome, breed) {
        this.nome = nome;
        if (breed) {
            this.breed = breed;
        }
    }
}
const Lili = new Cat("Lili");
const Lolo = new Cat("Lolo", "Persa");
function ShowCat(cat) {
    if ('breed' in cat) {
        console.log(`Raça do ${cat.nome} é ${cat.breed}`);
    }
    else {
        console.log("Sem raça");
    }
}
ShowCat(Lili);
ShowCat(Lolo);
function Revv(review) {
    if (!review) {
        console.log("nao");
        return;
    }
    console.log(review);
}
Revv(false);
