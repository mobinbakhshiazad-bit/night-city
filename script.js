const $=s=>document.querySelector(s);const loader=$('.loader');addEventListener('load',()=>setTimeout(()=>loader.classList.add('hide'),850));
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));function progress(el){const r=el.getBoundingClientRect();return clamp((innerHeight-r.top)/(r.height-innerHeight),0,1)}
const world=$('.world'),car1=$('.car1'),back=$('.back'),front=$('.front'),driver=$('.driver'),person=$('.person'),road=$('.roadscene'),car2=$('.car2'),roadBg=$('.road-bg');
function tick(){let w=progress(world);car1.style.transform=`translate3d(${w*innerWidth*1.5}px,${Math.sin(w*Math.PI)*-70}px,0) rotate(${w*4}deg)`;back.style.transform=`translateX(${-w*90}px)`;front.style.transform=`translateX(${-w*220}px)`;
let d=progress(driver);person.style.transform=`translate3d(${(d-.5)*240}px,${(0.5-d)*45}px,0) scale(${.86+d*.14})`;
let r=progress(road);car2.style.transform=`translate3d(${r*innerWidth*1.55}px,${Math.sin(r*Math.PI)*-45}px,0)`;roadBg.style.transform=`scale(${1+r*.1})`;requestAnimationFrame(tick)}requestAnimationFrame(tick);
addEventListener('mousemove',e=>{$('.sky').style.transform=`scale(1.1) translate(${(e.clientX/innerWidth-.5)*18}px,${(e.clientY/innerHeight-.5)*10}px)`});
