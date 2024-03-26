let shuttlename = 'Determination';
let ShuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const MilesPerKm = 0.621;

console.log(typeof shuttlename);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof MilesPerKm)

let milesToMars = distanceToMarsKm * MilesPerKm;
let hoursToMars = distanceToMarsKm / ShuttleSpeedMph;
let daysToMars = 12857.1428 / 24;
"Determination will take 535.714 days to reach Mars."
console.log(shuttlename + " will take " + daysToMars + " days to reach the moon.");
