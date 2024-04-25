
// const form = document.getElementById("form")
// const yourName = document.getElementById("name").value
const currentHunger = document.querySelector("#hunger");
const currentBoredom = document.querySelector("#boredom");
const currentSleepiness = document.querySelector("#sleepiness");
const currentAge = document.querySelector("#age");
const currentDay = document.querySelector("#day");
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")



let day = 0;

button1.onclick = feed
button2.onclick = sleep
button3.onclick = playGame


let player = prompt("Name your elf: ", "Player name")
if (player != null){
    document.getElementById("playerName").innerHTML =
    ", " + player + "!";
}


const interval1 = setInterval(dayIncrease, 5000)
const interval2 = setInterval(metricIncrease, 3500)
const interval3 = setInterval(ageUP, 3000)



const intervalChange = setInterval(() => {
    if (Elf.boredom >= 20 || Elf.hunger >= 20){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset()
    }
    else if (Elf.boredom >= 10 && Elf.sleepiness >= 10){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset()
    } else if (Elf.sleepiness >= 10 && Elf.hunger >= 10){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset ()
    } else if (Elf.hunger >= 10 && Elf.boredom >= 10) {
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset()
    }
}, 0) 



const Elf = {
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0
   }



function dayIncrease(){
    for(let i = 0; i <= 0; i++){
      day ++  
    }
    currentDay.innerHTML = day;
}

function ageUP(){
    for(let i = 0; i<= 0; i++){
        Elf.age ++
    }
    currentAge.innerHTML = Elf.age;
}

function Evolution(){
   if (day === 2) {
    document.getElementById('img1').src = 'baby-elf.png'
   }
        else if (day === 5){
            document.getElementById('img2').src = 'evolved elf.png'
        }
     }
    

function metricIncrease(){
    for (let i = 0; i <= 0; i++){
        Elf.hunger += 2
        Elf.sleepiness += 1
        Elf.boredom += 1
    }
    currentHunger.innerHTML = Elf.hunger;
    currentSleepiness.innerHTML = Elf.sleepiness;
    currentBoredom.innerHTML = Elf.boredom;   
}
        

function feed(){
    if (Elf.hunger >= 2){
        Elf.hunger -= 2
    }
    currentHunger.innerHTML = Elf.hunger;
}


function sleep(){
    if (Elf.sleepiness >= 3){
        Elf.sleepiness -= 3
    }
    currentSleepiness.innerHTML= Elf.sleepiness;
}

function playGame(){
    if (Elf.boredom >= 1){
        Elf.boredom -= 1
    }
    currentBoredom.innerHTML= Elf.boredom;
}


function reset(){
    Elf.boredom = 0
    Elf.hunger = 0
    Elf.sleepiness = 0
    Elf.age = 0
    day = 0
    currentHunger.innerHTML = Elf.hunger;
    currentSleepiness.innerHTML = Elf.sleepiness;
    currentBoredom.innerHTML = Elf.boredom;   
    currentAge.innerHTML = Elf.age;
    currentDay.innerHTML = day;
}


   // if boredom and sleepiness both reach 10 at the same time, character dies. 
    // if hunger and sleepiness both reach 10 at the same time, character dies.
    //  if hunger and boredom both reach 10 at the same time, character dies. 





// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet:

// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// const 



// Create buttons to:
    // -feed your pet, -2 per feed berries
    //- make pet sleep  -3
    // - make pet play board game, -1 boredom


// Add the ability to name your pet.

    // Submit box- Welcome to the forest. Please select your characters name
    // Display character name on page. 
// setInterval(metricIncrease, 10000)

//Display rules-






    // every 10 seconds increases hunger by 2. If 20 is reached, character dies.
    // every 10 seconds bordem increases by 1. If 20 is reached, character dies.
    // every 10 seconds, sleepiness increases by 1. If 20 is reached, character dies.
    // if boredom and sleepiness both reach 10 at the same time, character dies. 
    // if hunger and sleepiness both reach 10 at the same time, character dies.
    //  if hunger and boredom both reach 10 at the same time, character dies. 



// Style the page.


// Increase your pet's age every x seconds


// Morph your pet at certain ages.
// start at age 0- creature is an egg-
// age 5- creature is a baby-
// age 15- creature is an adult


// Animate your pet across the screen while it's alive.