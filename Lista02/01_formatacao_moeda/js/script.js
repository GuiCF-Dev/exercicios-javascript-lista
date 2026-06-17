const valor = Number(prompt("Digite um valor"));
alert(valor.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));