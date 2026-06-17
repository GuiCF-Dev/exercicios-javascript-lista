function mostrar(){alert("Você clicou no botão!");}
document.body.innerHTML='<button>Clique</button>';
document.querySelector("button").onclick=mostrar;