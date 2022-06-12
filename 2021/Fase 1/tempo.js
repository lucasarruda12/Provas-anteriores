// cabeçalho para incluir printf, scanf e fgets
// em programas javascript

var scanf_stub = require('scanf-printf-obi').scanf,
    printf_stub = require('scanf-printf-obi').sprintf,
    fgets_stub = require('scanf-printf-obi').fgets

function scanf(format) {
    var res = scanf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}

function printf(args){
    var res = printf_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    process.stdout.write(res);
}

function fgets(args){
    var res = fgets_stub.apply(this, Array.prototype.slice.call(arguments, 0));
    eval(res);
}
// final de cabeçalho

var controle, input;
var lista = [];
scanf("%d", "controle")

for(controle; controle > 0; controle--){
    scanf("%s", "input")
    
    lista.push({letra: input.slice(0,1), numero: input.slice(1)})
}