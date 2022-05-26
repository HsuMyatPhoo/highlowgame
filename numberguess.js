//  two random number
// answer
// hint 

let min,max,ans,hint;
min=1;
max=100;
ans=Math.floor(Math.random() * (max - min) +1);
console.log(ans);


// getting text 
let classn,first,second,third;
first=document.querySelector(".firstline");
second=document.querySelector(".secondline");
third=document.querySelector(".thirdline");


// getting button 
let button1=document.querySelector(".btn").children[0];
let button2=document.querySelector(".btn").children[1];
let button3=document.querySelector(".btn").children[2];
// console.log(buttons);


// hidding play again button 
let pagain=document.querySelector('.again');
pagain.style.visibility = "hidden";
console.log(pagain);



//getting & Setting hint number 
hint=Math.floor(Math.random() * (max-min) + 1);
// console.log(hint);
let hintnumber=document.querySelector('.hint');
hintnumber.textContent=hint;


let btn=document.querySelector('div');

btn.addEventListener('click',button);
function button(e){
    // console.log(e.target.className);

    
    classn=e.target.className;
    

    if(classn == 'lower'){
        // console.log('it is lower');
        // console.log(hint , ans);
        if(ans < hint){
            won(hint,ans);
        }else{
            lost(hint,ans);
        }

    }else if(classn == 'jc'){
        // console.log('it is jackpot');
        if(ans == hint){
            won(hint,ans);
        }else{
            lost(hint,ans);
        }

    }else if(classn == 'higher'){
        // console.log('it is higher');
        if(ans > hint){
            won(hint,ans);
        }else{
            lost(hint,ans);
        }
    }
    
    pagain.style.visibility = "visible";
}


function won(hint,ans){
    first.textContent="You Won.";
    second.textContent="";
    third.textContent=`Your hint was ${hint} .The hidden number was ${ans}.`

    buttondisabled();

}


function lost(hint,ans){
    first.textContent="You Lost";
    second.textContent="";
    third.textContent=`Your hint was ${hint} .The hidden number was ${ans}.`;
    buttondisabled();
}

function buttondisabled(){
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button1.style.opacity ="0.5";
    button2.style.opacity ="0.5";
    button3.style.opacity ="0.5";
    button1.style.background ="#aaa";
    button2.style.background ="#aaa";
    button3.style.background ="#aaa";

}

function playagain(){
    window.location.reload();
}