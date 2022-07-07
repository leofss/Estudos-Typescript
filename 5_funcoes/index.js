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
