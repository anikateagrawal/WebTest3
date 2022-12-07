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
    console.log(Math.floor(Math.random()*10000));
    var tag="#"+Math.floor(Math.random()*10000);
    ticket.children[1].innerText=tag;
    ticket.children[0].style.backgroundColor=`${col.id.substring(0,col.id.length-1)}`;
    ticket.children[2].innerText=t;
    ticket.addEventListener("click",del);
    ticks={
        id:`${tag}`,
        col:`${col.id.substring(0,col.id.length-1)}`,
        con:`${t}`
    }
    arr.push(ticks);
    localStorage.setItem('ticks',JSON.stringify(arr));
}
var arr=[];
window.onload=dis();
function dis(){
    if(localStorage.getItem('ticks')!=null){
        var a=JSON.parse(localStorage.getItem('ticks'));
        var ticketscon=document.getElementById("tt");
        a.forEach(element => {
    var ticket=document.createElement("div");
    ticket.className="tick";
    ticket.innerHTML=`<div class="co"></div>
    <div class="tag"></div>
    <div class="cont"></div>`;
    ticketscon.appendChild(ticket);
    // console.log(Math.floor(Math.random()*10000));
    // var tag="#"+Math.floor(Math.random()*10000);
    ticket.children[1].innerText=element.id;
    ticket.children[0].style.backgroundColor=`${element.col}`;
    ticket.children[2].innerText=element.con;
    ticket.addEventListener("click",del);
        });
    }
}
var ad=document.getElementById("add");
ad.addEventListener("click",show);

function show(){
    document.getElementById("ttt").style.display="flex";
}

document.addEventListener("keypress",key);

function key(e){
    // console.log(e.key);
    if(e.key=="Enter")
    {
        add();
        hide();
    }
}

function hide(){
    document.getElementById("ttt").style.display="none";
}

function del(e){
    console.log(e.target.parentElement);
    if(document.getElementById("delet").checked==true)
    {
        e.target.parentElement.removeChild(e.target);
    }
}