let homeOne = document.getElementById("homeone")
let homeTwo = document.getElementById("hometwo")
let homeThree = document.getElementById("homethree")
let homeEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeOne(){
    homeScore += 1
    homeEl.textContent = homeScore
}

function increaseHomeTwo(){
    homeScore += 2
    homeEl.textContent = homeScore
}

function increaseHomeThree(){
    homeScore += 3
    homeEl.textContent = homeScore
}

let guestOne = document.getElementById("guestone")
let guestTwo = document.getElementById("guesttwo")
let guestThree = document.getElementById("guestthree")
let guestEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestOne(){
    guestScore += 1
    guestEl.textContent = guestScore
}

function increaseGuestTwo(){
    guestScore += 2
    guestEl.textContent = guestScore
}

function increaseGuestThree(){
    guestScore += 3
    guestEl.textContent = guestScore
}


function newGame(){
    homeScore = 0
    homeEl.textContent = homeScore
    guestScore = 0
    guestEl.textContent = guestScore
}