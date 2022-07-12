//1 - campos em classe
class  User {
    //! = diz para o Ts que inicia sem valor
    name! : string
    age! : number
}

const Leo = new User()

Leo.name = "Leonardo"

console.log(Leo)


//2 - constructor

class Client {
    name
    age
    constructor(name : string, age : number) {
        this.name = name
        this.age = age
    }
}

const joao = new Client("joao", 18)

console.log(joao)

//3 - campo read only

class Car {
    name
    readonly wheels = 4
    constructor(name : string) {
        this.name = name
    }
}

const car = new Car("Fusca")

car.name = "Uno"

console.log(car)

//4 - heranca e super

class Machine {
    name
    constructor(name : string) {
        this.name = name
    }
}

const Normal = new Machine("trator")

class KillerMachine extends Machine{
    guns
    constructor(name : string, guns : number){
        super(name)
        this.guns = guns
    }
}

const Alterado = new KillerMachine("Carro do 007", 10)

console.log(Normal)
console.log(Alterado)

//5 - metodos

class Dwarf {
    name
    constructor(name : string) {
        this.name = name
    }

    greeting(){
        console.log(`Olá estranho meu nome é ${this.name}` )
    }
}

const Jim = new Dwarf("Joao")

console.log(Jim.name)

Jim.greeting()

//6 - getters

class Aluno {
    name
    surname
    constructor(name : string, surname : string) {
        this.name = name
        this.surname = surname
    }

    get FullName(){
        return`${this.name} ${this.surname}`
    }
}

const leo = new Aluno("Leonardo", "Fernandes")

console.log(leo.FullName)
