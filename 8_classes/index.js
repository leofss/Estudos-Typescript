"use strict";
//1 - campos em class
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
