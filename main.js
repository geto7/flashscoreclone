let allMatches = [];

fetch("https://apiv2.apifootball.com/?action=get_events&from=2025-06-01&to=2025-06-10&APIkey=d0e14b4ee1195e6e84a646a0a72817844d4930854aba5635e39d997fe601ede9")
  .then(res => res.json())
  .then(data => {
      allMatches = data;
      displayMatches(allMatches);
  })
  .catch(error => console.error("მატჩები არ ჩაიტვირთა", error));

function displayMatches(matches) {
    const container = document.getElementById("matches");
    container.innerHTML = "";

    matches.forEach(match => {
        const matchElement = document.createElement("div");
        matchElement.classList.add("match");

        matchElement.innerHTML = `
            <h2>${match.match_hometeam_name} vs ${match.match_awayteam_name}</h2>
            <p>score: ${match.match_hometeam_score} - ${match.match_awayteam_score}</p>
            <p>date: ${match.match_date}</p>
            <p>status: ${match.match_status}</p>
        `;

        container.appendChild(matchElement);
    });
}


document.getElementById("search").addEventListener("input", function() {
    searchMatches();
});


document.getElementById("searchBtn").addEventListener("click", function() {
    searchMatches();
});

function searchMatches() {
    const value = document.getElementById("search").value.toLowerCase();
    const filtered = allMatches.filter(match =>
        match.match_hometeam_name.toLowerCase().includes(value) ||
        match.match_awayteam_name.toLowerCase().includes(value)
    );
    displayMatches(filtered);
}