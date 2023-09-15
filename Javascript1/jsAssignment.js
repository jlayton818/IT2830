var ap = "apple.png";
var or = "orange.png";
var pe = "pear.png";
var pin = "pine.png";

let str = '';
let num = 1;
let oldNum = 0;
newImage();

var image = document.getElementById('myImg');


function newImage(){
    document.getElementById("myImg").src = "";
    num = Math.floor((Math.random() * 4) + 1);
    while(oldNum == num){
        num = Math.floor((Math.random() * 4) + 1);
    }
    if (num == 1){
        str = document.getElementById("myImg").src = ap;
        str = str.substring(0, str.length - 4);
    }
    if(num == 2){
        str = document.getElementById("myImg").src = or;
        str = str.substring(0, str.length - 4);
    }
    if(num == 3){
        str = document.getElementById("myImg").src = pe;
        str = str.substring(0, str.length - 4);
    }
    if(num == 4 ){
        str = document.getElementById("myImg").src = pin;
        str = str.substring(0, str.length - 4);
        str = str + 'apple';
    }
    document.getElementById("place").innerHTML = "";
    document.getElementById("correct").innerHTML ="";
    document.body.style.backgroundColor = "white";
    oldNum = num;
    return num;
    
}

function checkApple(){
    document.getElementById("place").innerHTML = str;
    if(image.src.match("apple")){
        document.getElementById("correct").innerHTML = "Correct!";
        document.body.style.backgroundColor = "green";
        
    }
    else{
        document.getElementById("correct").innerHTML = "Incorrect";
        document.body.style.backgroundColor = "red";
    }
}
function checkOrange(){
    document.getElementById("place").innerHTML = str;
    if(image.src.match("orange")){
        document.getElementById("correct").innerHTML = "Correct!";
        document.body.style.backgroundColor = "green";
    }
    else{
        document.getElementById("correct").innerHTML = "Incorrect";
        document.body.style.backgroundColor = "red";
    }
}
function checkPear(){
    document.getElementById("place").innerHTML = str;
    if(image.src.match("pear")){
        document.getElementById("correct").innerHTML = "Correct!";
        document.body.style.backgroundColor = "green";
    }
    else{
        document.getElementById("correct").innerHTML = "Incorrect";
        document.body.style.backgroundColor = "red";
    }
} 
function checkPineapple(){
    document.getElementById("place").innerHTML = str;
    if(image.src.match("pine")){
        document.getElementById("correct").innerHTML = "Correct!";
        document.body.style.backgroundColor = "green";
    }
    else{
        document.getElementById("correct").innerHTML = "Incorrect";
        document.body.style.backgroundColor = "red";
    }
} 




