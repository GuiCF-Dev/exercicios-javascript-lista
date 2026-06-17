var a = Number(prompt("Digite o primeiro número:"));
var b = Number(prompt("Digite o segundo número:"));
var c = Number(prompt("Digite o terceiro número:"));
var maior = a;
if (b > maior) maior = b;
if (c > maior) maior = c;
alert("Maior número: " + maior);