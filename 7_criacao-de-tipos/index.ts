// 1 - generics

function ShowData <T> (arg : T) : string {
    return `O dado é ${arg}`
}

console.log(ShowData(5))
console.log(ShowData("teste"))

//2 - constraints em generics

function ShowProductName<T extends {name : string}>(obj : T) {
    return `O nome do produto é: ${obj.name}`
}

const MyObj = {name : "Porta", cor : "Branca"}

console.log(ShowProductName(MyObj))

//3 - Generics com interface 

interface Obj<T, U, Q>{
    name : string
    wheels : T
    engine : U
    color : Q
}

type Car = Obj<number, number, string>
type Pen = Obj<boolean, boolean, string>

const MyCar : Car = {name : "Fusca", wheels : 4, engine : 1.0, color : "Branco"}
const MyPen : Pen = {name : "Bic", wheels : false, engine : false, color : "Azul"}

console.log(MyCar)
console.log(MyPen)

//4 - type parameters

function GetSomeKey<T, K extends keyof T>(obj : T, key : K){
    return `A chave esta presente no objeto e tem valor de ${obj[key]}`
}

const server = {
    hd : '2TB',
    ram : '5'
}

console.log(GetSomeKey(server, 'ram'))

//5 - keyof type operator 

type Carac = {name : string, age : number, DriverLic : boolean}

type C = keyof Carac

function ShowName(obj:Carac, key : C): string {
    return `${obj[key]}`
}

const Me : Carac = {
    name : "Leonardo",
    age : 18,
    DriverLic : false
}

console.log(ShowName(Me,'name'))
console.log(ShowName(Me,'age'))

//6 - indexed access type

type Truck = {km : number, kg : number, desc : string}

type Km = Truck["km"]

const NewTruck = {
    km : 5000,
    kg : 1000,
    desc : "Pequeno"
}

function ShowKm(km:Km) {
    return `Kilometragem de ${km}`
}


console.log(ShowKm(NewTruck.km))

//8 - conditional types

interface Name {
    ShowName() : string
}

//? se for verdade string, else : boolean
type Show = Name extends {ShowName() : string} ? string : boolean

//9 - template literals type

type testeA = "text"

type CustomType = `some ${testeA}`

const testing : CustomType = "some text"

console.log(testing)





