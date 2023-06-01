
let clearEl = document.getElementById("clear-el")
let pointsH = document.getElementById("points-h")
let pointsG = document.getElementById("points-g")
let homePoints = 0
let geustPoints = 0


// add functions for Home
function pointsH1(){
    homePoints += 1

    pointsH.textContent = homePoints
}
function pointsH2(){
    homePoints += 2

    pointsH.textContent = homePoints
}
function pointsH3(){
    homePoints += 3

    pointsH.textContent = homePoints
}


// add functions for Geust
function pointsG1(){
    geustPoints += 1

    pointsG.textContent = geustPoints
}
function pointsG2(){
    geustPoints += 2

    pointsG.textContent = geustPoints
}
function pointsG3(){
    geustPoints += 3

    pointsG.textContent = geustPoints
}

// clear every thing

function clean() {

     homePoints = 0
     geustPoints = 0
     pointsG.textContent = 0
     pointsH.textContent = 0
}








