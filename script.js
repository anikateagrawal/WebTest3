function add(){
    var tex=document.getElementById("text");
    var t=tex.ariaValueMax;
    var col=document.querySelector("[name=t]:checked");
    var colid=col.id;
    var ticketscon=document.getElementById("tt");
    var ticket=document.createElement("div");
    ticket.className="tick";
    ticket.innerHTML=`<div class="co"></div>
    <div class="tag"></div>
    <div class="cont"></div>`;
    ticketscon.appendChild(ticket);

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