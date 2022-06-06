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