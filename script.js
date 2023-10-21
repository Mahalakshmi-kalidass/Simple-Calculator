const SCREEN = document.getElementById("screen");
let flag = 0;
function giveVal(element){
    let value = element.getAttribute('value');
    
    if(flag==1){
        clearAll();
        flag=0;
    }
    showInScreenn(value);
}

function giveOperator(element){
    flag=0;  //make the numbers retain after performing previous calculation
    let operator = element.getAttribute('value');
    showInScreenn(operator);
}

function showInScreenn(val){
    
    SCREEN.value += val;
}

function clearAll(){
    SCREEN.value="";
}

function calc(){
  SCREEN.value = eval(SCREEN.value);
  flag=1; //to clear the number and get a newly entered no as fresh after the calculation when a num is pressed
}