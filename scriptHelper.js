// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "" || testInput === null) {
        return 'empty'
    }
    
    if (isNaN(Number(testInput))) {
        return "Not a number"
    }

    if (!isNaN(Number(testInput))) {
        return "Is a number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) != "Not a number" || validateInput(copilot) != "Not a number" || validateInput(fuelLevel) != "Is a number" || validateInput(cargoLevel) != "Is a number") {
        alert("Invalid input!")
    }

    document.getElementById('pilotStatus').innerHTML = `Pilot: ${pilot} Ready`
    document.getElementById('copilotStatus').innerHTML = `Co-Pilot: ${copilot} Ready`

    if (fuelLevel < 10000) {
        let faultyItems = document.getElementById('faultyItems')
        faultyItems.style = "visibility: visible"
        document.getElementById('fuelStatus').innerHTML = 'Not enough fuel for journey'
        let launchStatus = document.getElementById('launchStatus')
        launchStatus.innerHTML = 'Shuttle not ready for launch'
        launchStatus.style.color = 'red'
    }

    if (cargoLevel > 10000) {
        let faultyItems = document.getElementById('faultyItems')
        faultyItems.style = "visibility: visible"
        document.getElementById('cargoStatus').innerHTML = 'Too much cargo mass to take off'
        let launchStatus = document.getElementById('launchStatus')
        launchStatus.innerHTML = 'Shuttle not ready for launch'
        launchStatus.style.color = 'red'
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000) {
        let launchStatus = document.getElementById('launchStatus')
        launchStatus.innerHTML = 'Shuttle is ready for launch'
        launchStatus.style.color = 'green'
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;