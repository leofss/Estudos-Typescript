"use strict";
//1 - tipo de objeto para função com interface
function ShowProductDetails(product) {
    console.log(`O produto ${product.name} esta ${product.price}`);
    if (product.isAvaliable) {
        console.log(`O produto esta disponivel`);
    }
}
const Shirt = {
    name: "Camisa",
    price: 10,
    isAvaliable: true
};
ShowProductDetails(Shirt);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10
};
coords.z = 20;
console.log(coords);
const goku = {
    name: "Goku",
    age: 50,
    superpw: ["Kamekameha", "Genki Dama"]
};
console.log(goku);
const arnold = {
    name: "arnold",
    type: "Shotgun",
    calibre: 12
};
console.log(arnold);
//read only array (pode ser modificada apenas por métodos)
let MyArray = ["Maçã", "Laranja", "Banana"];
//MyArray[3] = "mamão"
MyArray.forEach((item) => {
    console.log("Fruta: " + item);
});
MyArray = MyArray.map((item) => {
    return `Fruta map: ${item}`;
});
console.log(MyArray);
