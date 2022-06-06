// https://olimpiada.ic.unicamp.br/pratique/ps/2021/f1/baralho/
// Pontuação	40 / 100
// Linguagem	Javascript
// Limite de tempo permitido	1,3 s
// Limite de memória permitido	1.0 GB
// Máximo tempo usado	0,581 s
// Máxima memória usada	10.2 MB

var baralho;
var carta = "";
var copas = [];
var espadas = [];
var ouros = [];
var paus = [];

scanf("%s", "baralho");

for (var i = 0; i < baralho.length; i = i + 3) {
    carta = baralho.slice(i, i + 3);

    if (carta.includes("C")) {
        copas.push(carta);
    }

    if (carta.includes("E")) {
        espadas.push(carta);
    }

    if (carta.includes("U")) {
        ouros.push(carta);
    }

    if (carta.includes("P")) {
        paus.push(carta);
    }
}

var j, k;
var copas_falso = false;
var espadas_falso = false;
var ouros_falso = false;
var paus_falso = false;

// COPAS

for (j = 0; j < copas.length; j++) {
    for (k = 0; j < copas.length; j++) {
        if (copas[j] === copas[k]) {
            copas_falso++;
        }
    }
}

if (copas_falso > 1) {
    printf("erro\n");
} else if (copas.length === 13) {
    printf("0\n");
} else {
    var r_copas = 13 - copas.length;
    printf("%d\n", r_copas);
}

// ESPADAS

for (j = 0; j < espadas.length; j++) {
    for (k = 0; j < espadas.length; j++) {
        if (espadas[j] === espadas[k]) {
            espadas_falso++;
        }
    }
}

if (espadas_falso > 1) {
    printf("erro\n");
} else if (espadas.length === 13) {
    printf("0\n");
} else {
    var r_espadas = 13 - espadas.length;
    printf("%d\n", r_espadas);
}

// ouros

for (j = 0; j < ouros.length; j++) {
    for (k = 0; j < ouros.length; j++) {
        if (ouros[j] === ouros[k]) {
            ouros_falso++;
        }
    }
}

if (ouros_falso > 1) {
    printf("erro\n");
} else if (ouros.length === 13) {
    printf("0\n");
} else {
    var r_ouros = 13 - ouros.length;
    printf("%d\n", r_ouros);
}

// paus

for (j = 0; j < paus.length; j++) {
    for (k = 0; j < paus.length; j++) {
        if (paus[j] === paus[k]) {
            paus_falso++;
        }
    }
}

if (paus_falso > 1) {
    printf("erro\n");
} else if (paus.length === 13) {
    printf("0\n");
} else {
    var r_paus = 13 - paus.length;
    printf("%d\n", r_paus);
}