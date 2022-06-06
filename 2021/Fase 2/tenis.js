var grupo = [];
var input;
var i = 0;

for (i; i < 4; i++){
    scanf("%d", "input");
    grupo.push(input);
}

printf("%d\n", Math.abs((grupo[0] + grupo[3]) - (grupo[1] + grupo[2])));