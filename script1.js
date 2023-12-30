const b1=document.querySelector("#button")

b1.addEventListener("click",(event)=>{
  event.target.textContent="Subscribed🙂"
  b1.style.backgroundColor="red";
 
},false);
const h1=document.querySelector("#h1");

h1.addEventListener("click",(event)=>{
  h1.style.color="red";
 
},false);
