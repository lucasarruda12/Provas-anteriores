var N, P, M
var camisas_p= 0, camisas_m=0
var input

scanf("%d", "N")

for(var i = 0; i<N; i++){
    scanf("%d", "input")
    
    if(input === 1){
        camisas_p++
    } else {
        camisas_m++
    }
}

scanf("%d%d", "P", "M")

if(camisas_p === P && camisas_m === M){
    printf("%s\n", "S")
} else {
    printf("%s\n", "N")
}