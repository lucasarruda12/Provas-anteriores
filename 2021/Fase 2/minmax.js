// https://olimpiada.ic.unicamp.br/pratique/ps/2021/f2/minmax/
// Pontuação	100 / 100
// Linguagem	Javascript
// Limite de tempo permitido	1,4 s
// Limite de memória permitido	1.0 GB
// Máximo tempo usado	0,563 s
// Máxima memória usada	11.0 MB

var num, min, max;
scanf("%d%d%d", "num", "min", "max");

var soma = 0;
var i = min

for(i; i < max; i++) {
    soma = 0;
    controle = i;

    while(controle) {
        soma += controle %10;
        controle = Math.floor(controle / 10);
    }

    if(soma === num){
        printf("%d\n", i)
        break
    }
}

i = max

for(i; i > min; i--) {
    soma = 0;
    controle = i;

    while(controle) {
        soma += controle %10;
        controle = Math.floor(controle / 10);
    }

    if(soma === num){
        printf("%d\n", i)
        break
    }
}