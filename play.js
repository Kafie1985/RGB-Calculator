var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");


var colorList = [0, 0, 0];


var redp = document.getElementById("redp");
var bluep = document.getElementById("bluep");
var greenp = document.getElementById("greenp");
var divA = document.getElementById("div-a");
var divB = document.getElementById("div-b");
var divC = document.getElementById("div-c");
//var wrap = document.getElementById("wrapper");
var results = document.getElementById("results");



red.onclick = function redbtn() {
    var redEntry = document.getElementById("red-entry");
    var redText = redEntry.value;
    //console.log("Working" + redText);
    colorList[0] = redText;
    //console.log(colorList);
    redpp = "The RED Value is " + colorList[0];
    redp.innerHTML = redpp;
    //console.log(redp);
    var divAbg = "rgb(" + colorList + ")";
    console.log(divAbg)
    divA.style.backgroundColor = divAbg;
    results.style.backgroundColor = "rgb(" + colorList + ")";
    results.innerHTML = divAbg;





}
blue.onclick = function bluebtn() {
    var blueEntry = document.getElementById("blue-entry");
    var blueText = blueEntry.value;
    //console.log("Working" + blueText);
    colorList[2] = blueText;
    //console.log(colorList);
    bluepp = "The BLUE Value is " + colorList[2];
    bluep.innerHTML = bluepp;
    //console.log(bluep);
    var divBbg = "rgb(" + colorList + ")";
    console.log(divBbg)
    divB.style.backgroundColor = divBbg;
    results.style.backgroundColor = "rgb(" + colorList + ")";
    results.innerHTML = divBbg;




}
green.onclick = function greenbtn() {
    var greenEntry = document.getElementById("green-entry");
    var greenText = greenEntry.value;
    //console.log("Working" + greenText);
    colorList[1] = greenText;
    console.log(colorList);
    greenpp = "The GREEN Value is " + colorList[1];
    greenp.innerHTML = greenpp;
    //console.log(greenp);
    var divCbg = "rgb(" + colorList + ")";
    console.log(divCbg)
    divC.style.backgroundColor = divCbg
        //wrap = wrap.style.backgroundColor = "rgb(" + colorList + ")";
    results.style.backgroundColor = "rgb(" + colorList + ")";
    results.innerHTML = divCbg;




}