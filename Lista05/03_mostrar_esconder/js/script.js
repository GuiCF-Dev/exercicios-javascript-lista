document.body.innerHTML='<button>Mostrar/Esconder</button><p>Parágrafo</p>';
var p=document.querySelector("p");
document.querySelector("button").onclick=function(){p.classList.toggle("oculto");p.style.display=p.classList.contains("oculto")?"none":"block";};