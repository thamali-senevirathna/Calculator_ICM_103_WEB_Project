let inputText=document.getElementById('inputTxt');

let buttonAc=document.getElementById('btnAc');
let buttonDE=document.getElementById('btnDE');
let buttonPrasantage=document.getElementById('btn%');
let buttonDivition=document.getElementById('btn/');

let buttonSeven=document.getElementById('btn7');
let buttonEight=document.getElementById('btn8');
let buttonNine=document.getElementById('btn9');
let buttonMultiple=document.getElementById('btn*');

let buttonFour=document.getElementById('btn4');
let buttonFive=document.getElementById('btn5');
let buttonSix=document.getElementById('btn6');
let buttonSunstract=document.getElementById('btn-');

let buttonOne=document.getElementById('btn1');
let buttonTwo=document.getElementById('btn2');
let buttonThree=document.getElementById('btn3');
let buttonAddition=document.getElementById('btn+');

let buttonDoubleZero=document.getElementById('btn00');
let buttonZero=document.getElementById('btn0');
let buttonDote=document.getElementById('btnDote');
let buttonEqual=document.getElementById('btn=');

let firstNum;
let operater;
let equal;

buttonPrasantage.addEventListener("click",e=>{
    operater="%";
    firstNum=parseFloat(inputText.value);
    inputText.value='';
});

buttonDivition.addEventListener("click",e=>{
    operater="/";
    firstNum=parseFloat(inputText.value);
    inputText.value='';
});

buttonMultiple.addEventListener("click",e=>{
    operater="*";
    firstNum=parseFloat(inputText.value);
    inputText.value='';
});

buttonSunstract.addEventListener("click",e=>{
    operater="-";
    firstNum=parseFloat(inputText.value);
    inputText.value='';
});

buttonAddition.addEventListener("click",e=>{
    operater="+";
    firstNum=parseFloat(inputText.value);
    inputText.value='';
});


let secondNum;
let total;
buttonEqual.addEventListener("click",e=>{
    secondNum=parseFloat(inputText.value);
    operater1();
    inputText.value=firstNum+" "+operater+" "+secondNum+" "+"="+" "+total;
    
});

function operater1(){
    switch(operater){
        case '+':
            total=firstNum+secondNum;
            break;
        case '-':
            total=firstNum-secondNum;
            break;
        case '*':
            total=firstNum*secondNum;
            break;
        case '/':
            total=firstNum/secondNum;
            break;
        case '%':
            total=firstNum%secondNum;
            break;
        default : 
            console.log("Try again!This is not operater...");


    }
}


buttonAc.addEventListener("click",e=>{
    inputText.value='';
});
buttonDE.addEventListener("click",e=>{
    inputText.value=inputText.value.substr(0,inputText.value.length-1);
});
buttonOne.addEventListener("click",e=>{
    inputText.value+=1;
    
});
buttonTwo.addEventListener("click",e=>{
    inputText.value+=2;
});
buttonThree.addEventListener("click",e=>{
    inputText.value+=3;
});
buttonFour.addEventListener("click",e=>{
    inputText.value+=4;
});
buttonFive.addEventListener("click",e=>{
    inputText.value+=5;
});
buttonSix.addEventListener("click",e=>{
    inputText.value+=6;
});
buttonSeven.addEventListener("click",e=>{
    inputText.value+=7;
});
buttonEight.addEventListener("click",e=>{
    inputText.value+=8;
});
buttonNine.addEventListener("click",e=>{
    inputText.value+=9;
});
buttonDoubleZero.addEventListener("click",e=>{
    btnbuttonDoubleZeroDobZiro=inputText.value+="00";
});
buttonZero.addEventListener("click",e=>{
    inputText.value+=0;
});
buttonDote.addEventListener("click", () => {
    if (!inputText.value.includes(".")) {
        inputText.value += ".";
    }
});