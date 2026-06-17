document.body.innerHTML='<h2>Título Original</h2><button>Alterar</button>';
var h2=document.querySelector("h2");
document.querySelector("button").onclick=function(){h2.innerText="Título Atualizado!";};