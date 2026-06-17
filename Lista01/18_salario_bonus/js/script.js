let salario = parseFloat(prompt("Digite o seu salário:"));
let bonus = parseFloat(prompt("Digite o valor do bônus:"));

let salarioTotal = salario + bonus;

alert("O salário total é: " + salarioTotal.toFixed(2));