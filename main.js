fetch("matches.json")
.then(res => res.json())
.then(data => {
    displayMatches(data);
})
.catch(error => console.error("მატჩები არ ჩაიტვირთა", error));

function displayMatches(matches) {
    const container =document.getElementById("matches");

    matches.forEach(match => {
        const matchElement = document.createElement("div");
        matchElement.classList.add("match");

        matchElement.innerHTML = `
            <h2>${match.team1} vs ${match.team2}</h2>
            <p>score: ${match.score}</p>
            <p>date: ${match.date}</p>
            <p>status: ${match.status}</p>
            <a href="match.html?id=${match.id}">დეტალები</a>
        `;

        container.appendChild(matchElement);
    });
}
