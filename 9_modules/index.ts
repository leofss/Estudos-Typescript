//1 - importação de arquivo
//se é js pode omitir o ,js de greet
import ImportGreet from "./greet";

ImportGreet();

//2 - import de variavel

import { x } from "./variable";

console.log(x);

//3 - multiplas importações

import { c, b, Mult } from "./multiples";

console.log(c, b);

Mult();

//4 - alias

import { SomeName as name} from "./changename";

console.log(name)

//4 - import all

import * as MyNum from './numbers';

console.log(MyNum);

console.log(MyNum.n2)

const primeiro = MyNum.n1;

MyNum.ShowNumbers(primeiro, MyNum.n2, MyNum.n3)

//5 - importando tipos

import { Human } from "./Tipos";

class Pessoa implements Human {
    age;
    name;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
}