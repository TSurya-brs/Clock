
// clock 
setInterval(updateSecond, 1000);

function updateSecond(){
    const now = new Date();
    // console.log(now);

    const seconds = now.getSeconds();
    const rotation=(seconds/60)*360;
    let sec = document.querySelector(".sec").style.transform=`rotate(${rotation}deg)`;

    const minutes=now.getMinutes();
    const rotation2=(minutes/60)*360;
    let minii=document.querySelector(".min").style.transform=`rotate(${rotation2}deg)`;

    const hours=now.getHours();
    const rotation3=((hours / 12) * 360);
    let hr=document.querySelector(".hour").style.transform=`rotate(${rotation3}deg)`;

    //Am or PM and morning evening
    let ampm='';
    let gm='';

    if(hours<12){ 
        ampm='AM';
    }
    else{
        ampm='PM';
        
    }

    //display digital clock time
    h=hours>12 ? hours-12 :hours;
    m=minutes<10 ? '0' +minutes : minutes;
    s=seconds<10 ? '0' +seconds : seconds;

    document.querySelector(".time").textContent=`${h}:${m}:${s} ${ ampm }`;
    

    
}


// 3-colour box 
function colour(color){
    const arrdiv=['header','clk','footer', 'div'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}

// colour box 
function getcolour(color){
    const a=document.getElementById("content").value;
    colour(a);
    document.getElementById('content').value = '';

}







  


