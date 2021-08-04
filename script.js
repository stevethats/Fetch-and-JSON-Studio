// TODO: add code here
window.addEventListener("load", function () {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(
        function (response) {
            response.json().then(
                function (json) {
                    json.sort(function(a,b){return b["hoursInSpace"]-a["hoursInSpace"]});
                    const container = document.getElementById("container");
                    const title = document.getElementById("title");

                    title.innerHTML += ' ' + json.length;
                    
                    let test = "";
                    for (astronaut of json) {
                        test += `
                            <div class="astronaut">
                                <div class="bio">
                                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                                        <ul>
                                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                            <li ${astronaut.active ? 'id="activeStatus"' : ''}>Active: ${astronaut.active}</li>
                                            
                                            <li>Skills: ${astronaut.skills.join(", ")}</li>
                                        </ul>
                                </div>
                                <img class="avatar" src=${astronaut.picture}>
                            </div>`
                    }
                    container.innerHTML = test;
                });
        });
});