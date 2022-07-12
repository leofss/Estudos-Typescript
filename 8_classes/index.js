"use strict";
//1 - campos em classe
class User {
}
const Leo = new User();
Leo.name = "Leonardo";
console.log(Leo);
//2 - constructor
class Client {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new Client("joao", 18);
console.log(joao);
//3 - campo read only
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const car = new Car("Fusca");
car.name = "Uno";
console.log(car);
//4 - heranca e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const Normal = new Machine("trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const Alterado = new KillerMachine("Carro do 007", 10);
console.log(Normal);
console.log(Alterado);
//5 - metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Olá estranho meu nome é ${this.name}`);
    }
}
const Jim = new Dwarf("Joao");
console.log(Jim.name);
Jim.greeting();
//6 - getters
class Aluno {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get FullName() {
        return `${this.name} ${this.surname}`;
    }
}
const leo = new Aluno("Leonardo", "Fernandes");
console.log(leo.FullName);
