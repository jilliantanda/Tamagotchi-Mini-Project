// //Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

// Instantiate your Tamagotchi (If you created a class)
const currentHunger = document.querySelector("hunger");
const currentSleepiness = document.querySelector("sleepiness");
const currentBoredom = document.querySelector("boredom");
const currentAge = document.querySelector("age");


let hunger = 0;
let age = 0;
let boredom = 0;
let sleepiness = 0;

// const metrics = document.querySelector("#sleepiness", "#hunger", "#age", "#boredom")


// class elfGirl {
//    constructor(hunger, sleepiness, boredom, age){
//     this.hunger = hunger;
//     this.sleepiness = sleepiness;
//     this.boredom = boredom;
//     this.age = age;
//    }
// }

class elfGirl {
    hunger = 0;
    sleeepiness = 0;
    boredom = 0;
    age = 0;
}

// Not sure which way to use yet ^^^^

// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet:

// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// const 
setInterval(function () {element.innerHTML += "age"}, 7000);


// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
// Create buttons to:
    // -feed your pet, -2 per feed berries
    //- make pet sleep  -3
    // - make pet play board game, -1 boredom

function feed(){
    if (hunger <= 0){
        hunger -= 2
    }
    currentHunger.innerHTML = hunger;
}

// Add the ability to name your pet.

    // Submit box- Welcome to the forest. Please select your characters name
    // Display character name on page. 
setInterval(metricIncrease, 10000)

//Display rules-
function metricIncrease(){
    for (let i = 0; i <= 20; i++){
        hunger ++
        sleepiness ++
        boredom ++
    }
    currentHunger.innerHTML = hunger;
    currentSleepiness.innerHTML = sleepiness;
    currentBoredom.innerHtml = boredom;
}

// function terminate(){
//     if (elfGirl.hunger === 20){

//     }
// }

function gameOver(){
    (elfGirl[0] === 20 && elfGirl[2] === 20) ||
    (elfGirl[2] && elfGirl[1] === 10) ||
    (elfGirl[0] && elfGirl[1] === 10) ||
    (elfGirl[0] && elfGirl [2] === 10)
}





    // every 10 seconds increases hunger by 2. If 20 is reached, character dies.
    // every 10 seconds bordem increases by 1. If 20 is reached, character dies.
    // every 10 seconds, sleepiness increases by 1. If 20 is reached, character dies.
    // if boredom and sleepiness both reach 10 at the same time, character dies. 
    // if hunger and sleepiness both reach 10 at the same time, character dies.
    //  if hunger and boredom both reach 10 at the same time, character dies. 



// Style the page.


// Increase your pet's age every x minutes
//every 7 seconds increase pet's age




// Morph your pet at certain ages.
// start at age 0- creature is an egg-
// age 5- creature is a baby-
// age 20- creature is an adult


// Animate your pet across the screen while it's alive.