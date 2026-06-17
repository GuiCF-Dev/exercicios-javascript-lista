var quantidade = Number(prompt("Digite o número de maçãs:"));
var preco = quantidade < 12 ? 1.30 : 1.00;
alert("Custo total: R$ " + (quantidade * preco).toFixed(2));