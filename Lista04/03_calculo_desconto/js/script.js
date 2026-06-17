var valor = Number(prompt("Digite o valor da compra:"));
if (valor > 100) valor = valor * 0.9;
alert("Valor final: R$ " + valor.toFixed(2));