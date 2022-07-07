"use strict";
// 1 - void
function NoReturn() {
    console.log("Sem retorno");
}
NoReturn();
function Greeting(name, id) {
    return `Olá ${name} ${id}`;
}
//f = greeting
function PreGreeting(f, UserName, UserId) {
    console.log("prep");
    const greet = f(UserName, UserId);
    console.log(greet);
}
PreGreeting(Greeting, "Leonardo", 10);
//3 - generic function 
function FirstElement(arr) {
    return arr[0];
}
console.log(FirstElement([1, 2, 3]));
console.log(FirstElement(["A", "B"]));
console.log(FirstElement([1, 2, "A"]));
function MergeObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const NewObj = MergeObj({ name: "Leonardo" }, { age: 30, job: "Programmer" });
console.log(NewObj);
function BigNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(BigNumber(5, 10));
console.log(BigNumber("5", "1"));
//5 - especificando tipo de argumento 
function MergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(MergeArrays([1, 2, 3], [1, 2, 3]));
console.log(MergeArrays([1, 2, 3], ["a", "b"]));
//parâmetros opcionais 
function ModernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}`;
}
console.log(ModernGreeting("Matheus"));
console.log(ModernGreeting("Matheus", "Dr."));
//parâmetro default
function Soma(n, m = 10) {
    return n + m;
}
console.log(Soma(10));
console.log(Soma(10, 83));
//8 - unknown 
function DoSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um numero");
    }
}
DoSomething([1, 2, 3]);
DoSomething(5);
//9 - rest operator
function SumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(SumAll(1, 2, 4, 5, 7, 8));
//10 - destructuring como parametro
function ProdDetais({ name, price }) {
    return `Produto ${name} custa ${price}`;
}
const shirt = { name: "Camisa", price: 40 };
console.log(ProdDetais(shirt));
