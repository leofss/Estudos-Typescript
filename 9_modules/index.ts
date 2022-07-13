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