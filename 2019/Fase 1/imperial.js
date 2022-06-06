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