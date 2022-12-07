function add(){
    var tex=document.getElementById("text");
    var t=tex.value;
    var col=document.querySelector("[name=t]:checked");
    var colid=col.id;
    var ticketscon=document.getElementById("tt");
    var ticket=document.createElement("div");
    ticket.className="tick";
    ticket.innerHTML=`<div class="co"></div>
    <div class="tag"></div>
    <div class="cont"></div>`;
    ticketscon.appendChild(ticket);
    console.log(col.id);
    ticket.children[0].style.backgroundColor=`${col.id.substring(0,col.id.length-1)}`;
    ticket.children[2].innerText=t;
    ticket.addEventListener("click",del);
}
var ad=document.getElementById("add");
ad.addEventListener("click",show);

function show(){
    document.getElementById("ttt").style.display="flex";
}

document.addEventListener("keypress",key);

function key(e){
    console.log(e.key);
    if(e.key=="Enter")
    {
        add();
        hide();
    }
}

function hide(){
    document.getElementById("ttt").style.display="none";
}
document.re

function del(e){
    console.log(e.target.parentElement);
    if(document.getElementById("delet").checked==true)
    {
        e.target.parentElement.removeChild(e.target);
    }
}