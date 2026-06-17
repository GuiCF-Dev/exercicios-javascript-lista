const a = Number(prompt("Valor 1"));
const b = Number(prompt("Valor 2"));
const c = Number(prompt("Valor 3"));
const media = (a + b + c) / 3;
alert(media.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}));