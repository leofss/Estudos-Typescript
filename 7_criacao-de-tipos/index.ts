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