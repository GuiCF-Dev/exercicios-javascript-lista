let numeroA = Number(prompt("Digite o valor de A:"));
let numeroB = Number(prompt("Digite o valor de B:"));

let trocadeValores = numeroA;
numeroA = numeroB;
numeroB = trocadeValores;   

alert("O valor de A é: " + numeroA);
alert("O valor de B é: " + numeroB);