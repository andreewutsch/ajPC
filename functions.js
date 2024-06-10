/// DOM = DocumentObjectModel (how JS modifiziert eine Webseite)
///       --> HTML Document

//Funktion definieren
function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

//Funktion abrufen
countdown()
// -------------------

let lap1 = 34
let lap2 = 33
let lap3 = 36
// Create a function that logs out the sum of all the lap times
function total(){
    let totalLaps = lap1 + lap2 + lap3
    console.log(totalLaps)
    // console.log(lap1 + lap2 + lap3)
}
total()
// -----------------

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementLap() {
    lapsCompleted = lapsCompleted + 1
}

incrementLap()
incrementLap()
incrementLap()

console.log(lapsCompleted)