// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById('missionTarget')
    div.innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    
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
        return 'Empty'
    }
    
    if (isNaN(Number(testInput))) {
        return "Not a Number"
    }

    if (!isNaN(Number(testInput))) {
        return "Is a Number"
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required")
    }

    else if (validateInput(pilot) != "Not a Number" || validateInput(copilot) != "Not a Number" || validateInput(fuelLevel) != "Is a Number" || validateInput(cargoLevel) != "Is a Number") {
        alert("Invalid input!")
    } else {
        document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`
        document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`

        if (fuelLevel < 10000) {
            let faultyItems = document.getElementById('faultyItems')
            faultyItems.style = "visibility: visible"
            document.getElementById('fuelStatus').innerHTML = 'Fuel level too low for launch'
            let launchStatus = document.getElementById('launchStatus')
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
            launchStatus.style.color = 'red'
        }

        if (cargoLevel > 10000) {
            let faultyItems = document.getElementById('faultyItems')
            faultyItems.style = "visibility: visible"
            document.getElementById('cargoStatus').innerHTML = 'Cargo mass too heavy for launch'
            let launchStatus = document.getElementById('launchStatus')
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
            launchStatus.style.color = 'red'
        }

        if (fuelLevel >= 10000) {
            document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch'
        }

        if (cargoLevel <= 10000) {
            document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch'
        }

        if (fuelLevel >= 10000 && cargoLevel <= 10000) {
            let launchStatus = document.getElementById('launchStatus')
            document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch'
            document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch'
            launchStatus.innerHTML = 'Shuttle is Ready for Launch'
            launchStatus.style.color = 'green'
        }
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
            //console.log(response.json()) ask why this print command breaks the code, I assume something to do with how promises are processed
            return response.json()
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length)
    return planets[index]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;