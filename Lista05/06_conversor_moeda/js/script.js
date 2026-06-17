function converterDolarParaReal(v){return v*5.65;}
var valor=Number(prompt("Digite o valor em dólar:"));
document.body.innerHTML="<p>R$ "+converterDolarParaReal(valor).toFixed(2)+"</p>";