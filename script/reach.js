let darkMode = true;

function mode(){
if (darkMode){
    document.body.style.background = "linear-gradient(to bottom right, #39c467, rgb(226, 186, 55))";
    document.getElementById("header").style.color = "black";
    document.getElementById("footer").style.color = "black";
    document.getElementById("outLearn").style.color = "black";
    document.getElementById("footer").style.backgroundColor = "#39c467"; 
    document.querySelectorAll('a').forEach(anchor =>{
        anchor.style.color = "black";
    })
    darkMode = false;
}
else{
    document.body.style.background = "linear-gradient(to bottom right, #080052, rgb(73, 0, 107))";
    document.getElementById("header").style.color = "lightgrey";
    document.getElementById("footer").style.color = "lightgrey";
    document.getElementById("outLearn").style.color = "lightgrey";
    document.getElementById("footer").style.backgroundColor = "#090058"; 
    document.querySelectorAll('a').forEach(anchor =>{
        anchor.style.color = "lightgrey";
    })
    darkMode = true;
}} 