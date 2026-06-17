document.body.innerHTML='<button>Ativar</button><p>Texto</p>';
document.querySelector("button").onclick=function(){
document.querySelector("p").classList.toggle("ativo");
};