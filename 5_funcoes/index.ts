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