// https://olimpiada.ic.unicamp.br/pratique/ps/2021/f2/tenis/
// Pontuação	100 / 100
// Linguagem	Javascript
// Limite de tempo permitido	1,4 s
// Limite de memória permitido	1.0 GB
// Máximo tempo usado	0,582 s
// Máxima memória usada	10.1 MB

var grupo = [];
var input;
var i = 0;

for (i; i < 4; i++){
    scanf("%d", "input");
    grupo.push(input);
}

printf("%d\n", Math.abs((grupo[0] + grupo[3]) - (grupo[1] + grupo[2])));