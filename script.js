const loader=document.getElementById("loader");
window.addEventListener("load",()=>setTimeout(()=>{loader.style.opacity="0";loader.style.visibility="hidden"},900));
const hero=document.querySelector(".hero"),bg=document.querySelector(".hero-bg");
hero.addEventListener("mousemove",e=>{const x=(e.clientX/innerWidth-.5)*28,y=(e.clientY/innerHeight-.5)*18;bg.style.transform=`scale(1.1) translate(${x}px,${y}px)`});
hero.addEventListener("mouseleave",()=>bg.style.transform="scale(1.1)");
const modal=document.getElementById("modal");
document.getElementById("openTrailer").onclick=()=>modal.classList.add("show");
document.getElementById("close").onclick=()=>modal.classList.remove("show");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.remove("show")});
document.querySelectorAll(".feature,.person").forEach(card=>{
 card.addEventListener("mousemove",e=>{const r=card.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;card.style.transform=`perspective(900px) rotateX(${(y/r.height-.5)*-3}deg) rotateY(${(x/r.width-.5)*3}deg)`});
 card.addEventListener("mouseleave",()=>card.style.transform="");
});
