function getHistory(){
    return document.getElementById("history").innerHTML;    
}
function printHistory(num){
    document.getElementById("history").innerHTML = num;
}
function printOutput(num){
    document.getElementById("result").innerHTML = formattedNumber(num);
}
function formattedNumber(num){
    n = Number(num);
    value = new Intl.NumberFormat().format(n);
    return value;
}
var root = document.querySelector(":root");
var themeSelector = document.getElementById("themeSelectorBack");
var themeBtnPosition = document.getElementById("themeSelector");

// changing the theme
var set = 0;
themeSelector.addEventListener("click", function(){    
    switch(set){
        case 0:
            root.style.setProperty("--mainBackground", "hsl(0, 0%, 90%)");
            root.style.setProperty("--themeSelBck", "hsl(0, 5%, 81%)");
            root.style.setProperty("--screenBackground", "hsl(0, 0%, 93%)");
            root.style.setProperty("--resetKeyBackground", "hsl(185, 42%, 37%)");            
            root.style.setProperty("--resetKeyShadow", "hsl(185, 58%, 25%)");
            root.style.setProperty("--enterKeyBackground", "hsl(25, 98%, 40%)");
            root.style.setProperty("--enterKeyShadow", "hsl(25, 99%, 27%)");
            root.style.setProperty("--keyBackground", "hsl(45, 7%, 89%)");
            root.style.setProperty("--keyShadow", "hsl(35, 11%, 61%)");
            root.style.setProperty("--keyText", "hsl(60, 10%, 19%)");
            root.style.setProperty("--otherText", "hsl(0, 0, 100%)");
            root.style.setProperty("--resultText", "hsl(60, 10%, 19%)");
            themeBtnPosition.style.setProperty("left", "19px");
            set = set +1;
            console.log(set);
            break;
        case 1:
            root.style.setProperty("--mainBackground", "hsl(268, 75%, 9%)");
            root.style.setProperty("--themeSelBck", "hsl(268, 71%, 12%)");
            root.style.setProperty("--screenBackground", "hsl(268, 71%, 12%)");
            root.style.setProperty("--resetKeyBackground", "hsl(281, 89%, 26%)");            
            root.style.setProperty("--resetKeyShadow", "hsl(285, 91%, 52%)");
            root.style.setProperty("--enterKeyBackground", "hsl(176, 100%, 44%)");
            root.style.setProperty("--enterKeyShadow", "hsl(177, 92%, 70%)");
            root.style.setProperty("--keyBackground", "hsl(268, 47%, 21%)");
            root.style.setProperty("--keyShadow", "hsl(290, 70%, 36%)");
            root.style.setProperty("--keyText", "hsl(52, 100%, 62%)");
            root.style.setProperty("--otherText", "white");
            root.style.setProperty("--resultText", "hsl(52, 100%, 62%)");
            themeBtnPosition.style.setProperty("left", "32px");
            set = set +1;
            console.log(set);
            break;
        default:
            root.style.setProperty("--mainBackground", "hsl(222, 26%, 31%)");
            root.style.setProperty("--themeSelBck", "hsl(223, 31%, 20%)");
            root.style.setProperty("--screenBackground", "hsl(224, 36%, 15%)");
            root.style.setProperty("--resetKeyBackground", "hsl(225, 21%, 49%)");            
            root.style.setProperty("--resetKeyShadow", "hsl(224, 28%, 35%)");
            root.style.setProperty("--enterKeyBackground", "hsl(6, 63%, 50%)");
            root.style.setProperty("--enterKeyShadow", "hsl(6, 70%, 34%)");
            root.style.setProperty("--keyBackground", "hsl(30, 25%, 89%)");
            root.style.setProperty("--keyShadow", "hsl(28, 16%, 65%)");
            root.style.setProperty("--keyText", "hsl(221, 14%, 31%)");
            root.style.setProperty("--otherText", "white");
            root.style.setProperty("--resultText", "white");
            themeBtnPosition.style.setProperty("left", "2px");
            set = 0;
            console.log(set);
            break;

    }    
}) 
// calculator logic
var list = document.querySelectorAll(".number");
var opList = document.querySelectorAll(".operator");

for(var i = 0; i<list.length; i++){
    list[i].addEventListener("click", function(){        
        if (j ==1){   
            j = 0;         
            printHistory("");                                    
            let output = getHistory();
            printHistory(output + this.id);            
        }else{
            let output = getHistory();            
            printHistory(output + this.id);
        }        
    })
}
for(var i = 0; i<opList.length; i++){
    opList[i].addEventListener("click", function(){
        let output = getHistory();
        printHistory(output + this.id);
    })
}
let resolve = document.getElementById("resolve");
let reset = document.getElementById("RESET");

var j = 0;
resolve.addEventListener("click", function(){
    printOutput((eval(getHistory())));
    j = 1;         
})
reset.addEventListener("click", function(){
    printOutput("");
    printHistory("");
    j = 0;    
})
