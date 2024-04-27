const currentHunger = document.querySelector("#hunger")
const currentBoredom = document.querySelector("#boredom")
const currentSleepiness = document.querySelector("#sleepiness")
const currentAge = document.querySelector("#age")
const currentDay = document.querySelector("#day")
const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")


button1.onclick = feed
button2.onclick = sleep
button3.onclick = playFlute
button4.onclick = lightsOn




let player = prompt("Name your elf: ", "Player name")
if (player != null){
    document.getElementById("playerName").innerHTML =
    ", " + player + "!";
}



const elf = {
    hunger: 0,
    sleepiness: 0,
    boredom: 0,
    age: 0
   }


let day = 0;



const interval1 = setInterval(dayIncrease, 5000)


function dayIncrease(){
    for(let i = 0; i <= 0; i++){
      day ++  
    }
    currentDay.innerHTML = day;
}

const interval3 = setInterval(ageUP, 3000)

function ageUP(){
    for(let i = 0; i<= 0; i++){
        elf.age ++
    }
    currentAge.innerHTML = elf.age;
    evolution()
}

const interval2 = setInterval(metricIncrease, 3500)


function metricIncrease(){
    for (let i = 0; i <= 0; i++){
        elf.hunger += 2
        elf.sleepiness += 1
        elf.boredom += 1
    }
    currentHunger.innerHTML = elf.hunger;
    currentSleepiness.innerHTML = elf.sleepiness;
    currentBoredom.innerHTML = elf.boredom;   
}
        

function feed(){
    if (elf.hunger >= 2){
        elf.hunger -= 2
        elf.sleepiness += 2
    }
    currentHunger.innerHTML = elf.hunger;
}


function sleep(){
    if (elf.sleepiness >= 3){
        elf.sleepiness -= 3
        elf.hunger += 1
    }
    currentSleepiness.innerHTML= elf.sleepiness;
    document.body.style.backgroundImage= "url('nighttime.gif')"
}

function lightsOn(){
    document.body.style.backgroundImage= "url('daytimes.gif')"
}


function playFlute(){
    if (elf.boredom >= 1){
        elf.boredom -= 1
    }
    currentBoredom.innerHTML= elf.boredom;
}



var egg = document.getElementById("egg")
var babyElf = document.getElementById("baby")
var adultElf = document.getElementById("adult")


function evolution(){
   if (elf.age >= 5){
            egg.style.visibility = "hidden"
            babyElf.style.visibility = "visible"
   }
  if (elf.age >= 10){
            babyElf.style.visibility = "hidden"
            adultElf.style.visibility = "visible"
        }
    }
    


const intervalChange = setInterval(() => {
    if (elf.boredom >= 20 || elf.hunger >= 20){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset()
    }
    else if (elf.boredom >= 10 && elf.sleepiness >= 10){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset()
    } else if (elf.sleepiness >= 10 && elf.hunger >= 10){
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset ()
    } else if (elf.hunger >= 10 && elf.boredom >= 10) {
        clearInterval(interval1)
        clearInterval(interval2)
        clearInterval(interval3)
        reset()
    }
}) 


var deadElf = document.getElementById("dead")

function reset(){
    document.body.style.backgroundImage= "url('death.gif')"
    adultElf.style.visibility = "hidden"
    deadElf.style.visibility = "visible"
    elf.boredom = 0
    elf.hunger = 0
    elf.sleepiness = 0
    elf.age = 0
    day = 0
    currentHunger.innerHTML = elf.hunger;
    currentSleepiness.innerHTML = elf.sleepiness;
    currentBoredom.innerHTML = elf.boredom;   
    currentAge.innerHTML = elf.age;
    currentDay.innerHTML = day;
}




// Create buttons to:
    // -feed your pet, -2 per feed berries
        //- +2 sleepiness
    //- make pet sleep  -3
        //- 1 hunger
    // - make pet play the flute, -1 boredom


// Add the ability to name your pet.

    // Submit box- Welcome to the forest. Please select your characters name
    // Display character name on page. 


    // every 10 seconds increases hunger by 2. If 20 is reached, character dies.
    // every 10 seconds bordem increases by 1. If 20 is reached, character dies.
    // every 10 seconds, sleepiness increases by 1. If 20 is reached, character dies.
    // if boredom and sleepiness both reach 10 at the same time, character dies. 
    // if hunger and sleepiness both reach 10 at the same time, character dies.
    //  if hunger and boredom both reach 10 at the same time, character dies. 



// Style the page.




// Animate your pet across the screen while it's alive.