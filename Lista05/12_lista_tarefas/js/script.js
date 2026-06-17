document.body.innerHTML='<input><button>Adicionar</button><ul></ul>';
document.querySelector("button").onclick=function(){
var li=document.createElement("li");
li.innerText=document.querySelector("input").value;
document.querySelector("ul").appendChild(li);
};