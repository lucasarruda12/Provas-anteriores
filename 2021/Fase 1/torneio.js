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