let sec = 0;
let min = 0;
let hrs = 0;
let timer = false;

function start(){
    timer = true;
    };

function mystw(){
    if(timer==true){
        sec = sec + 1 ;
       if(sec==60){
        min = min + 1 ;
        sec = 0 ;
       }
       if(min==60){
        hrs = hrs + 1 ;
        min = 0 ;
       }
    }
    
    let nsec = sec ;
    let nmin = min ;
    let nhrs = hrs ;

    if(sec<10){
        nsec= "0"+sec;
    }
    
    if(min<10){
        nmin = "0"+min;
    }
    
    if(hrs<10){
        nhrs = "0"+hrs;
    }
    
    document.getElementById("sec").innerText=nsec;
    document.getElementById("min").innerText=nmin;
    document.getElementById("hrs").innerText=nhrs;
};

setInterval( mystw , 1000 );

function stop(){
    timer = false;
};

function reset(){
     timer = false;

     hrs=0
     min=0;
     sec=0;
 
         document.getElementById("sec").innerText= "00" ;
         document.getElementById("min").innerText="00"; 
        document.getElementById("hrs").innerText="00"; 
};