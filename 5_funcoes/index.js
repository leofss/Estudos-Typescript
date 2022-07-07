"use strict";
// 1 - void
function NoReturn() {
    console.log("Sem retorno");
}
NoReturn();
function Greeting(name, id) {
    return `Olá ${name} ${id}`;
}
//f = greeting
function PreGreeting(f, UserName, UserId) {
    console.log("prep");
    const greet = f(UserName, UserId);
    console.log(greet);
}
PreGreeting(Greeting, "Leonardo", 10);
