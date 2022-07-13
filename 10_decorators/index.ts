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

//3 - method decorator

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

//4 - property decorator
//todo id precisa ser de 5 digitos 00001

function FormatNumber() {
    return function (target : Object, propertKey : string) {
        let value : string

        const getter = function () {
            return value
        }
        const setter = function (NewVal:string) {
            value = NewVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey,{
            set : setter,
            get : getter,
        });
    }
}

class ID {
    @FormatNumber()
    id;

    constructor(id : string){
        this.id = id;
    }
}

const NewItem = new ID("1")
console.log(NewItem)

//5 - exemplo real method decorator
function CheckIfPosted() {
    return function (target : any, propertKey : string | Symbol, descriptor : PropertyDescriptor) {
        //devolve a função post
        const ChildFunction = descriptor.value
        console.log(ChildFunction)
        descriptor.value = function(...args : any[]) {
            if(args[1] === true ){
                console.log("Usuário ja postou")
                return null
            }else{
                return ChildFunction.apply(this, args)
            }
        }
        return descriptor;
    }
}

class Post {
    Posted = false
    @CheckIfPosted()
    post(content : string, Posted : boolean){
        this.Posted = true
        console.log(`Post: ${content}`)
    }
}

const NewPost = new Post()

NewPost.post("Hello World", NewPost.Posted)
NewPost.post("Hello Worldddd", NewPost.Posted)//retorna usuario ja postou
