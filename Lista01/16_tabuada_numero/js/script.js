let numeroTabuada = Number(prompt("Digite um número para ver a tabuada: "));

for (let i = 1; i <= 10; i++) {
    let resultado = numeroTabuada * i;
    
    alert(numeroTabuada + " x " + i + " = " + resultado);
}