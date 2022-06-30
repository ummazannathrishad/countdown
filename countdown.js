const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');

const targetTime= new Date('April 17, 2022 00:00:00');

function updatecountdowntime(){
    const currenttime= new Date();
    const diff= targetTime - currenttime;
    const d = Math.floor(diff/1000/60/60/24);
    const h = Math.floor(diff/1000/60/60) % 24;
    const m = Math.floor(diff/1000/60) % 60;
    const s = Math.floor(diff/1000) % 60;
    
    days.innerHTML = d;
    hours.innerHTML = h ;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}
setInterval(updatecountdowntime,1000);