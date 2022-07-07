//1 - arrays 

let numbers : number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

//sintaxe alternatica

const nums : Array<number> = [100, 200]

console.log(nums[0])

//2 parâmetros

function Soma(a:number, b:number) {
    console.log(a + b)
}

Soma(4, 5)

//5 retorno da função
//seta qual tipo da funcção dege retornar 
function Greeting(name:string) : string {
    return `Ola ${name}`
}

console.log(Greeting("Leonardo"))

//6 funções anonimas

setTimeout(() => {
    const salary : number = 1000

}, 2000);

//7 tipos objetos

function Coord(coo: {x : number, y : number}) {
    console.log(`Coordenadas x: ${coo.x}, cordernadas y: ${coo.y}`)
}

//os nomes das variaveis tem que corresponder com as da função
const objcoored = {x: 200, y:300}

Coord(objcoored)

//8 opcionais

function numss(a : number, b : number, c? : number) {
    console.log(a, b)
    if(c){
        console.log(c)
    }
}

console.log(1,2,3)
console.log(1,2)


//validação props(args) opcionais 
//parametros opcionais vem por último
function AdvGreeting(FirstName:string, LastName?: string) {
    if(LastName !== undefined){
        //early return retorna algo antes pois chegou na condição o suficiente
        return (`Olá, ${FirstName} ${LastName}, como vai?`)
    }
    else{
        return(`Olá ${FirstName}`)
    }
}

console.log(AdvGreeting("Leonardo", "Fernandes"))
console.log(AdvGreeting("Leonardo"))

//9 - Union Types

function ShowBal(balance:number | string) {
    console.log(`O saldo é de ${balance}`)
}

ShowBal(500)
ShowBal("500")

//11 avançando em unions types 

function ShowUserRole(role: boolean | string) {
    if(typeof role === "boolean"){
        return "Usuário não aprovado"
    }
    else{
        return `Função é ${role}`
    }
}

console.log(ShowUserRole(false))
console.log(ShowUserRole("Admin"))

//9 - Type allias
type bal = number | string

function ShowBall(balance: bal) {
    console.log(`O saldo é de ${balance}`)
}

ShowBall(500)
ShowBall("500")

//13 - interface

interface Point{
    x: number
    y: number
    z: number
}

function ShowCoords(obj:Point) {
    console.log(`X: ${obj.x} Y: ${obj.y}, X: ${obj.z}`)
}


const coordobj : Point = {
    x: 10,
    y: 20, 
    z: 10
}

ShowCoords(coordobj)


//14 - literal types

function ShowDirection(direction : "left" | "right" | "center") {
    console.log(`A direção é ${direction}`)
}

ShowDirection("left")

//15 - non null assertion

const p = document.getElementById("some-p")

//é bom para caso quisermos manipular elemetnos existentes no html
console.log(p!.innerText)