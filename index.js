// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEL = document.getElementById("total-el")
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let name = "Andree"
let greeting = ", welcome back!"
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = name + greeting + " 👋 "

// let countEl = document.getElementById("count-el") // pass in arguments
let count = 0
let savedTotal =  0

function increment() {
    //count = count + 1
    count += 1
    countEl.textContent = count
    //document.getElementById("count-el").innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    console.log(count)
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    savedTotal += count
    totalEL.textContent = "Total entries: " + savedTotal
    let savedVar = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += savedVar
    // NB: Make sure to not delete the existing content of the paragraph
    count = 0
    countEl.textContent = count
}