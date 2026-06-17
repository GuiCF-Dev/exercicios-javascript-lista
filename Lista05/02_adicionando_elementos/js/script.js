document.body.innerHTML='<button>Adicionar Item</button><ul></ul>';
document.querySelector("button").onclick=function(){
var li=document.createElement("li");
li.innerText="Novo Item";
document.querySelector("ul").appendChild(li);
};