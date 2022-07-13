"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1 - exemplo de decorator
//executa sempre o mais proximo da função por ex @a() @b() funcao => primeiro exec b depois a
function MyDecorator() {
    console.log("iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(`key = ${propertKey}`);
        console.log(target);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("metodo executado");
    }
}
__decorate([
    MyDecorator()
], MyClass.prototype, "testing", null);
const Obj = new MyClass();
Obj.testing();
//2 class decorator 
function ClassDec(constructor) {
    console.log(constructor);
    //nome da classe
    if (constructor.name === "User") {
        console.log("Criando usuário");
    }
}
let User = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ChecarIdade() {
        if (this.age >= 18) {
            console.log("Maior de idade");
        }
        else {
            console.log("Menor de idade");
        }
    }
};
User = __decorate([
    ClassDec
], User);
const PrintUser = new User("Joao", 10);
//4 - method decorator
function Enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    ShowName() {
        console.log(this);
        return `Nome da maquina é ${this.name}`;
    }
}
__decorate([
    Enumerable(false)
], Machine.prototype, "ShowName", null);
const Maq = new Machine("Fusca");
console.log(Maq);
