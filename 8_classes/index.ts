//1 - campos em class
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


