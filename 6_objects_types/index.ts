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

//4 - extending interface

interface Human{
    name : string
    age : number
}

interface Super extends Human{
    superpw : string[]
}

const goku : Super = {
    name : "Goku",
    age : 50,
    superpw : ["Kamekameha", "Genki Dama"]
}

console.log(goku)

//intersection types

interface Personagem{
    name : string
}

interface Arma{
    type : string
    calibre : number
}

type HumanWithGun = Personagem & Arma

const arnold : HumanWithGun = {
    name : "arnold",
    type : "Shotgun",
    calibre: 12 
}

console.log(arnold)

//read only array (pode ser modificada apenas por métodos)

let MyArray : ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

//MyArray[3] = "mamão"

MyArray.forEach((item) => {
    console.log("Fruta: " + item)
})

MyArray = MyArray.map((item) =>{
    return `Fruta map: ${item}`
})

console.log(MyArray)


//Tuplas

type NameAndAge = [string, number]

const User : NameAndAge = ["Leonardo", 18]

console.log(User)

//Tuplas com read only

function ShowNumbers(numbers:readonly [number, number]) {
    console.log(numbers[0])
}

ShowNumbers([1, 2])