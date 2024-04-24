// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', takeOff);
window.addEventListener('load', landing);
window.addEventListener('load', missionAbort);
let altitude = 0;
let rocketPosX = 0;
let rocketPosY = 0;


function takeOff() {
    const button = document.getElementById("takeoff");
    button.addEventListener('click', function (event) {
        if (confirm('Confirm that the shuttle is ready for takeoff')) {
            altitude = 10000
            shuttleBackground.style.background = 'blue'
            spaceShuttleHeight.innerHTML = "10,000"
            flightStatus.innerHTML = "Shuttle in flight"
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + "px"
        };
    });
};
function landing() {
    const button = document.getElementById("landing");
    button.addEventListener('click', function (event) {
        alert('The shuttle is landing. Landing gear engaged.')
        shuttleBackground.style.background = 'green'
        spaceShuttleHeight.innerHTML = "0"
        flightStatus.innerHTML = "The shuttle has land."
    });
};
function missionAbort() {
    const button = document.getElementById("missionAbort");
    button.addEventListener('click', function (event) {
        shuttleBackground.style.background = 'orange'
        spaceShuttleHeight.innerHTML = "0"
        flightStatus.innerHTML = "Mission aborted."
    });
};
document.addEventListener("click", function(event){
    let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue
    ('width'));

    if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)){
        rocketPosX -= 10;
        rocket.style.marginLeft - rocketPosX + "px"
    }
    if (event.target.id === "right" && rocketPosX < -(bkgWidth / 2 - 40)){
        rocketPosX += 10;
        rocket.style.marginLeft - rocketPosY + "px"
    }
    if (event.target.id === "up" && altitude < 250000) {
        rocketPosY += 10;
        rocket.style.marginBottom - rocketPosX + "px"
        altitude += 10000;
        spaceShuttleHeight.innerHTML - altitude
    }
    if (event.target.id === "down" && altitude > 0){
        rocketPosY -= 10;
        rocket.style.marginBottom - rocketPosY + "px"
        altitude -= 10000;
        spaceShuttleHeight.innerHTML - altitude
    }

});
// function up() {
//     const button = document.getElementById("up");
//     button.addEventListener('click', function (event) {
//         height.setAttribute("flightDisplay") = parseInt(height.getAttribute("flightDisplay") + "10px");
//     });
// };
// function down() {
//     const button = document.getElementById("down");
//     button.addEventListener('click', function (event) {
//         height.setAttribute("flightDisplay") = parseInt(height.getAttribute("flightDisplay") - "10px");
//     });
// };
// function left() {
//     const button = document.getElementById("left");
//     button.addEventListener('click', function (event) {
//     });
// };
// function right() {
//     const button = document.getElementById("right");
//     button.addEventListener('click', function (event) {
//     });
// };


// window.addEventListener('load', up);
// window.addEventListener('load', down);
// window.addEventListener('load', left);
// window.addEventListener('load', right);
