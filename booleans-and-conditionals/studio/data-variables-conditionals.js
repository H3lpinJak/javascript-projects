// Initialize Variables below
let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautsStatus = "Ready"
let averageAstronautMassKg = 80.7
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "Clear"
let prepareForLiftOff = true
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log ("Count accepted");
} else {
    console.log("Count Overexceeded")
} 
// add logic below to verify all astronauts are ready
if (astronautsStatus === "Ready") {
    console.log ("Astronaut Status: Ready")
} else {
    console.log ("ALERT! Astronaut Status: Unprepared for Launch")
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    console.log("Didn't reach 85000")
} else {
    console.log("Reached 85000")
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp); {
    console.log("Temp is good")
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel is full");
}
// add logic below to verify the weather status is clear
if (weatherStatus === "Clear") {
    console.log("Weather is Clear")
}

// Verify shuttle launch can proceed based on above conditions
if 