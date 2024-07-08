const decrease = document.getElementById("-");
const reset = document.getElementById("reset");
const increase  = document.getElementById("+");
const countlabel = document.getElementById("count");

let count = 0;


increase.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
}

reset.onclick = function(){
    count =0;
    countlabel.textContent = count ;
}