
window.addEventListener("load", function() {

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let thisDocument = document;
        let list = "tbd"
        let pilot = document.getElementById('pilotName').value;
        let copilot = document.getElementById("copilotName").value;
        let fuel = document.getElementById("fuelLevel").value;
        let cargo = document.getElementById("cargoMass").value;

        formSubmission(thisDocument, list, pilot, copilot, fuel, cargo)
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })

    
 });