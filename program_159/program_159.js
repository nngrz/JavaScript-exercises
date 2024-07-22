let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0

function home1() {
    count += 1 
    homeScore.textContent = count
}

function home2() {
    count += 2 
    homeScore.textContent = count
}

function home3() {
    count += 3 
    homeScore.textContent = count
}

function guest1() {
    count += 1 
    guestScore.textContent = count
}

function guest2() {
    count += 2 
    guestScore.textContent = count
}

function guest3() {
    count += 3 
    guestScore.textContent = count
}
