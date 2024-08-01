/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let textLength = document.getElementById("text-length")
let textVolume = document.getElementById("text-volume")
let textMass = document.getElementById("text-mass")
let convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    let inputData = document.getElementById("data").value

    let lengthConversion = `${inputData} meters = ${(inputData * 3.281).toFixed(3)} feet | ${inputData} feet = ${(inputData * (1 / 3.281)).toFixed(3)} meters` 
    let volumeConversion = `${inputData} liters = ${(inputData * 0.264).toFixed(3)} gallons | ${inputData} gallons = ${(inputData * (1 / 0.264)).toFixed(3)} liters` 
    let massConversion = `${inputData} kilos = ${(inputData * 2.204).toFixed(3)} pounds | ${inputData} pounds = ${(inputData * (1 / 2.204)).toFixed(3)} kilos` 

    textLength.innerHTML = `<p>${lengthConversion}</p>`
    textVolume.innerHTML = `<p>${volumeConversion}</p>`
    textMass.innerHTML = `<p>${massConversion}</p>`
})
