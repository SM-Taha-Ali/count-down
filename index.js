var hrs = document.getElementById("hrs");
var mins = document.getElementById("mins");
var secs = document.getElementById("secs");


function start(){
    for (let i = 0; i < 60; i++) {
        secs.textContent = i
        console.log("function started")
    }
}