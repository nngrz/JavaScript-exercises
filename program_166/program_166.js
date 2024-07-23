let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array
function getRandomItem() {
    let randomNumber = Math.floor(Math.random() * 3)
    // return randomNumber for debug
    return hands[randomNumber]
}

console.log(getRandomItem())
