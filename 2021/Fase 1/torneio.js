// https://olimpiada.ic.unicamp.br/pratique/ps/2021/f1/torneio/
// Pontuação	100 / 100
// Linguagem	Javascript
// Limite de tempo permitido	1,3 s
// Limite de memória permitido	1.0 GB
// Máximo tempo usado	0,587 s
// Máxima memória usada	9.98 MB

var score = 0;
var input;

for (var i = 0; i < 6; i++) {
    scanf("%s", "input");

    if (input === "V") {
        score++;
    }
}

if (score === 1 || score === 2) {
    printf("3\n");
} 
else if (score === 3 || score === 4) {
    printf("2\n");
} 
else if (score === 5 || score === 6) {
    printf("1\n");
} 
else {
    printf("-1\n");
}