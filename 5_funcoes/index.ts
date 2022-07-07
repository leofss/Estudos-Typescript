// 1 - void

function NoReturn():void{
    console.log("Sem retorno")
}

NoReturn()

//2 - callback como argumento

type UserInfo = string | number

function Greeting(name:string, id : number) {
    return `Olá ${name} ${id}`
}

//f = greeting
function PreGreeting(f: (name : string, id : number) => UserInfo, UserName : string, UserId : number) {
    console.log("prep")

    const greet = f(UserName, UserId)

    console.log(greet)
}

PreGreeting(Greeting, "Leonardo", 10)

//3 - generic function 

function FirstElement<T>(arr : T[]) : T {
    return arr[0]
}

console.log(FirstElement([1, 2 ,3]))
console.log(FirstElement(["A", "B"]))
console.log(FirstElement([1, 2 ,"A"]))


function MergeObj<U, T>(obj1 : U, obj2 : T) {
    return{
        //... pega tudo em um objeto
        ...obj1,
        ...obj2
    }
}

const NewObj = MergeObj({name : "Leonardo"}, {age : 30, job : "Programmer"})

console.log(NewObj)

//4 - constraints 
type Cmp = string | number
function BigNumber<T extends Cmp >(a : T, b : T): T {
    let biggest : T
    
    if(+a > +b){
        biggest = a
    }
    else{
        biggest = b
    }

    return biggest
}

console.log(BigNumber(5, 10))
console.log(BigNumber("5", "1"))

//5 - especificando tipo de argumento 

function MergeArrays<T>(arr1 : T[], arr2 : T[]) {
    return arr1.concat(arr2)
}

console.log(MergeArrays([1, 2, 3], [1, 2, 3]))
console.log(MergeArrays<number | string>([1, 2, 3], ["a", "b"]))

//parâmetros opcionais 

function ModernGreeting(name : string, greet? : string ) {
    if(greet){
        return `Olá ${greet} ${name}, tudo bem?`
    }

    return `Olá ${name}`
}

console.log(ModernGreeting("Matheus"))
console.log(ModernGreeting("Matheus", "Dr."))

//parâmetro default

function Soma(n:number, m = 10) {
    return n + m
}

console.log(Soma(10))

console.log(Soma(10, 83))