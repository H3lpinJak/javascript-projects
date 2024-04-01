const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray = sleepAids.split(",").sort();
    console.log(foodArray);
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray]
    console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let infoDrawer = input.question("Pick a drawer 1, 2, 3, or 4?")
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (Number(infoDrawer) === 1 || Number(infoDrawer) === 2|| Number(infoDrawer) === 3 || Number(infoDrawer) === 4) {
    console.log(`The drawer you selected contains ${cargoHold[Number(infoDrawer)-1]}`);
} else {
    console.log("ERROR NO DRAWER AVAILABLE")    
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (Number(infoDrawer) === 1 || Number(infoDrawer) === 2|| Number(infoDrawer) === 3 || Number(infoDrawer) === 4) {
    console.log(`The drawer you selected contains ${cargoHold[Number(infoDrawer)-1]}`);
    let infoItem = input.question("What item would you like?") 
    if (cargoHold)
} else { 
    console.log("ERROR NO DRAWER AVAILABLE")    
}