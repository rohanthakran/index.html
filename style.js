function getHistory(){
    return document.getElementById("history-value").innerHTML;

}

function printHistroy(num){
         document.getElementById("history-value").innerHTML = num;
}       
printHistroy("9-98");

function getOutput(num){
    document.getElementById("output-value").innerHTML = num;
}
function printOutput(num){
    document.getElementById("output-value").innerHTML = getFormatNUmber(num);
}

function getFormatNUmber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
printOutput("9999");
