document.body.innerHTML='<input><button>Enviar</button><p></p>';
document.querySelector("button").onclick=function(){
document.querySelector("p").innerText=document.querySelector("input").value;
};