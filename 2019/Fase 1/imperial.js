// cabeçalho para incluir printf, scanf e fgets
// em programas javascript

var scanf_stub = require('scanf-printf-obi').scanf,
    printf_stub = require('scanf-printf-obi').sprintf,
    fgets_stub = require('scanf-printf-obi').fgets

function scanf(format) {
    var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}

function printf(args) {
    var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    process.stdout.write(res);
}

function fgets(args) {
    var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}
// final de cabeçalho

var index
var input = []

scanf("%d", "index");

for (let i = index; i > 0; i--) {
    var placeholder
    scanf("%d", "placeholder")

    input.push(placeholder)
}

const numeros_que_se_repetem = []
let i

for (let j = 0; j < index; j++) {
    let testeAtual = input[j]
    let i = 0

    for (let k = 0; k < index; k++){
        if (testeAtual == input[k]){
            i++
        }
    }

    if (i>1) {
        numeros_que_se_repetem.push(testeAtual)
    } else {
        numeros_que_se_repetem.push(501)
    }
}

console.log(numeros_que_se_repetem)