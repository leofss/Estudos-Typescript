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
