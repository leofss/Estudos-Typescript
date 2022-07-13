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
//7 = setters
class Coords {
    set FillX(x) {
        if (x === 0) {
            return;
        }
        else {
            this.x = x;
            console.log("X inserido com sucesso");
        }
    }
    set FillY(y) {
        if (y === 0) {
            return;
        }
        else {
            this.y = y;
            console.log("Y inserido com sucesso");
        }
    }
    get FullCoords() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
const MyCoords = new Coords();
MyCoords.FillX = 10;
MyCoords.FillY = 20;
console.log(MyCoords);
console.log((MyCoords.FullCoords));
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    ItemTitle() {
        return `Tituelo do post é ${this.title}`;
    }
}
const Post = new BlogPost("Hello World");
console.log(Post.ItemTitle());
//9 - PUBLIC
class C {
    constructor() {
        this.x = 10;
    }
}
const obj = new C;
console.log(obj.x);
//10 - protected
//acessado apenas por meio de metodo
class E {
    constructor() {
        this.y = 10;
    }
    PtdMTD() {
        console.log("este metodo é protegido");
    }
}
class F extends E {
    showY() {
        console.log(`Yy: ${this.y}`);
    }
    ShowPtdMtd() {
        this.PtdMTD();
    }
}
const Fins = new F();
Fins.showY();
Fins.ShowPtdMtd();
//11 - private
//extends nao funciona, apenas possível pela classe original
class Priv {
    constructor() {
        this.name = "Privado";
    }
    ShowName() {
        console.log(this.name);
    }
    PvtMtd() {
        console.log("metodo privado");
    }
    ShowPvtMtd() {
        this.PvtMtd();
    }
}
const pObj = new Priv();
pObj.ShowName();
pObj.ShowPvtMtd();
//12 - static members
//usado mais para classe auxiliares 
class StaticMembers {
    static Method() {
        console.log("Static metodo");
    }
}
StaticMembers.prop = "Teste";
console.log(StaticMembers.prop);
StaticMembers.Method();
//13 - generic class
class item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get FirstItem() {
        return `first: ${this.first}`;
    }
}
const newI = new item("caixa", "banana");
console.log(newI);
console.log(newI.FirstItem);
//14 - Parameter prop
class Para {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
    get GetPrice() {
        return `Preço é ${this.price}`;
    }
}
const NewObJ = new Para("camisa", 20);
console.log(NewObJ);
console.log(NewObJ.name);
console.log(NewObJ.GetPrice);
//17 - class expressions
const MyClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new MyClass("Jones");
console.log(pessoa.name);
//18 - abstract class
class Abs {
}
class AbsExe extends Abs {
    constructor(name) {
        super();
        this.name = name;
    }
    ShowName() {
        console.log(`nome: ${this.name}`);
    }
}
