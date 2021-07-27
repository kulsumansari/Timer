/** on button start , pause , reset 
 * hrs:min:s
*/

let duration;
paused =false;
let lblHrs=document.getElementById('hour');
let lblMins=document.getElementById('minute')
let lblSec=document.getElementById('second')
let txtHrs=document.getElementById('txtHrs')
let txtMins=document.getElementById('txtMins')
let txtSec=document.getElementById('txtSec')

const start=()=> {
    clearInterval(duration)
    if(paused===true){
        Resume();
    }else{
        let hr=  parseInt(txtHrs.value) || 0;
        let min= parseInt(txtMins.value) || 0;
        let sec= parseInt(txtSec.value) || 0; 
        ( isNaN(hr) || isNaN(min) || isNaN(sec) ) ? alert('Invalid Input!') : timer(hr,min,sec);   
    }
}

const Resume=()=>{ 
    let hr= lblHrs.innerText;
    let min= lblMins.innerText;
    let sec= lblSec.innerText;
    timer(hr,min,sec)  
}

const timer=(hours,minutes,seconds)=> {  
    duration = setInterval(() => { 

        if(hours==0 && minutes== 0 && seconds== 0){
            displayTime(0,0,0)
            return;
        }
        seconds>0 ? seconds-- : seconds;
        
        if(seconds <= 0 && minutes !=0){
            seconds=59;
            minutes--;
        }
        if(minutes <=0 && hours !=0){
            minutes= 59;
            hours--;  
        }
        if(hours<=0){
            hours=0
        }
        displayTime(hours,minutes,seconds)

     }, 1000);
}

const pause=()=> {  
    clearInterval(duration);
    paused= true;
    // btnStart.innerText="Resume"
}

const displayTime= (h,m,s) =>{
    console.log("h",h.length);
    lblHrs.innerText = (h.toString().length > 1) ? h : `0${h}`;
    lblMins.innerText = (m.toString().length > 1) ? m : `0${m}`;
    lblSec.innerText = (s.toString().length > 1) ? s: `0${s}`;
}
const reset=()=>{  
    clearTimeout(duration);
    btnStart.innerText="Start"
    displayTime(0,0,0)
    txtHrs.value = ''
    txtMins.value = ''
    txtSec.value = ''
}


let btnStart=document.getElementById("start");
let btnReset=document.getElementById("reset");
let btnPause=document.getElementById("pause");


btnStart.addEventListener('click',  start);
btnPause.addEventListener('click', pause)
btnReset.addEventListener("click",reset)




