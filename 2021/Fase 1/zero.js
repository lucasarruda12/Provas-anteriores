// https://olimpiada.ic.unicamp.br/pratique/ps/2021/f1/zero/
// Pontuação	100 / 100
// Linguagem	Javascript
// Limite de tempo permitido	1,8 s
// Limite de memória permitido	1.0 GB
// Máximo tempo usado	0,793 s
// Máxima memória usada	21.3 MB

var controle, input;
var resposta = [];
scanf("%d", "controle");

for (controle; controle > 0; controle--) {
    scanf("%d", "input");

    if (input !== 0){
        resposta.push(input);
    } else {
        resposta.pop();
    }
}

printf("%d\n", resposta.reduce((a, b) => a + b));