//TODO: Add Your Code Below
window.addEventListener('load', async function () {
    let data = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
        .then(function (response) {
            return response.json()
        })
    console.log(data)
    const sortedData = data.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace
    })
    let div = document.getElementById('container');
    div.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        div.innerHTML = div.innerHTML + `
            <div class="astronaut">
                <div class="bio">
                    <h3>${sortedData[i].firstName} ${sortedData[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${sortedData[i].hoursInSpace}</li>
                        <li id='active${i}'>Active: ${sortedData[i].active}</li>
                        <li>Skills: ${sortedData[i].skills}</li>
                    </ul>
                </div>
                <img class="avatar" src=${sortedData[i].picture}>
            </div>
        `
        if (sortedData[i].active === true) {
            let activeLi = document.getElementById(`active${i}`);
            activeLi.style.color = 'green'
        }
    }
    div.innerHTML = div.innerHTML + `
        <h1 id='astronautCount'>Astronaut Count: ${sortedData.length}</h1>
    `
    const h1 = document.getElementById('astronautCount');
    h1.style.backgroundImage = 'linear-gradient(to right, red, white, blue'
    h1.style.textAlign = 'center'
})