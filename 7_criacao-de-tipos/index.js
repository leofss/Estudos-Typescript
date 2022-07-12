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
//4 - type parameters
function GetSomeKey(obj, key) {
    return `A chave esta presente no objeto e tem valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '5'
};
console.log(GetSomeKey(server, 'ram'));
function ShowName(obj, key) {
    return `${obj[key]}`;
}
const Me = {
    name: "Leonardo",
    age: 18,
    DriverLic: false
};
console.log(ShowName(Me, 'name'));
console.log(ShowName(Me, 'age'));
const NewTruck = {
    km: 5000,
    kg: 1000,
    desc: "Pequeno"
};
function ShowKm(km) {
    return `Kilometragem de ${km}`;
}
console.log(ShowKm(NewTruck.km));
const testing = "some text";
console.log(testing);
