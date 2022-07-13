//1 - exemplo de decorator
//executa sempre o mais proximo da função por ex @a() @b() funcao => primeiro exec b depois a
function MyDecorator() {
    console.log("iniciando decorator")

    return function (target : any, propertKey : string, descriptor : PropertyDescriptor) {
        console.log("Executando decorator")
        console.log(`key = ${propertKey}`)
        console.log(target)
        console.log(descriptor)
    }
}

class MyClass {
    @MyDecorator()

    testing(){
        console.log("metodo executado")
    }
}

const Obj = new MyClass() 

Obj.testing();

//2 class decorator 

function ClassDec(constructor : Function) {
    console.log(constructor);
    //nome da classe
    if(constructor.name === "User" ){
        console.log("Criando usuário")
    }
}
@ClassDec
class User {
    name 
    age
    constructor(name : string, age : number) {
        this.name = name
        this.age = age
    }

    ChecarIdade(){
        if(this.age >= 18){
            console.log("Maior de idade")
        }else{
            console.log("Menor de idade")
        }
    }
}

const PrintUser = new User("Joao", 10)

//4 - method decorator

function Enumerable(value:boolean) {
    return function (target : any, propertKey : string, descriptor : PropertyDescriptor) {
        descriptor.enumerable = value
    }
}

class Machine {
    name
    constructor(name : string) {
        this.name = name
    }
    @Enumerable(false)
    ShowName(){
        console.log(this)
        return `Nome da maquina é ${this.name}`
    }
}

const Maq = new Machine("Fusca")

console.log(Maq)