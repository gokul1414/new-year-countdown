const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const mints=document.querySelector("#mints");
const seconds=document.querySelector("#seconds");

const crtYear=new Date().getFullYear();

const newYear=new Date(`January 1 ${crtYear+1} 00:00:00`);
// console.log(newYear);
function UpdateTime(){
    const ctrDate=new Date();
    const diff=newYear-ctrDate;
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor((diff/1000/60/60)%24);
    const m=Math.floor((diff/1000/60)%60);
    const s=Math.floor(diff/1000%60);

    days.innerHTML=d<10?"0"+d:d;
    hours.innerHTML=h<10?"0"+h:h;
    mints.innerHTML=m<10?"0"+m:m;
    seconds.innerHTML=s<10?"0"+s:s;

}
setInterval(UpdateTime,1000);