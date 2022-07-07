//1 - tipo de objeto para função com interface

interface Product{
    name : string,
    price : number,
    isAvaliable : boolean
}

function ShowProductDetails(product : Product) {
    console.log(`O produto ${product.name} esta ${product.price}`)

    if(product.isAvaliable){
        console.log(`O produto esta disponivel`)
    }
}

const Shirt : Product = {
    name : "Camisa",
    price : 10,
    isAvaliable : true
}

ShowProductDetails(Shirt)

//2 - propriedades read only

interface Car {
    brand : string
    readonly wheels : number
}

const fusca : Car = {
    brand: "VW",
    wheels: 4,
}

console.log(fusca)

//3 - index signature 

interface CoordObj {
    [index : string] : number
}

let coords : CoordObj = {
    x: 10
}

coords.z = 20

console.log(coords)
