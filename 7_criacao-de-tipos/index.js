"use strict";
// 1 - generics
function ShowData(arg) {
    return `O dado é ${arg}`;
}
console.log(ShowData(5));
console.log(ShowData("teste"));
//2 - constraints em generics
function ShowProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const MyObj = { name: "Porta", cor: "Branca" };
console.log(ShowProductName(MyObj));
const MyCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
const MyPen = { name: "Bic", wheels: false, engine: false, color: "Azul" };
console.log(MyCar);
console.log(MyPen);
