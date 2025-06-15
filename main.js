import { fetchMatches } from './api.js';

let allMatches = [];

const from = "2025-06-01";
const to = "2025-06-10";
const apiKey = "d0e14b4ee1195e6e84a646a0a72817844d4930854aba5635e39d997fe601ede9";

fetchMatches(from, to, apiKey)
  .then(data => {
    console.log("API response:", data);
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

        const odd1 = match.match_odd_1 || match.odd_1 || "-";
        const oddX = match.match_odd_x || match.odd_x || "-";
        const odd2 = match.match_odd_2 || match.odd_2 || "-";

        matchElement.innerHTML = `
            <h2>${match.match_hometeam_name} vs ${match.match_awayteam_name}</h2>
            <p>score: ${match.match_hometeam_score} - ${match.match_awayteam_score}</p>
            <p>date: ${match.match_date}</p>
            <p>status: ${match.match_status}</p>
            <div style="margin:10px 0;">
                <strong>კუშები:</strong>
                <span style="margin-right:10px;">1: ${odd1}</span>
                <span style="margin-right:10px;">X: ${oddX}</span>
                <span>2: ${odd2}</span>
            </div>
            <button class="details-btn" data-id="${match.match_id}">დეტალები</button>
        `;

        container.appendChild(matchElement);
    });

    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const matchId = this.getAttribute('data-id');
            const match = allMatches.find(m => m.match_id == matchId);
            localStorage.setItem('selectedMatch', JSON.stringify(match));
            window.location.href = 'match.html';
        });
    });
}

document.getElementById("search").addEventListener("input", function() {
    searchMatches();
});

document.getElementById("searchBtn").addEventListener("click", function() {
    searchMatches();
});

document.getElementById("dateFrom").addEventListener("change", function() {
    searchMatches();
});

document.getElementById("dateTo").addEventListener("change", function() {
    searchMatches();
});

function searchMatches() {
    const value = document.getElementById("search").value.toLowerCase();
    const dateFrom = document.getElementById("dateFrom").value;
    const dateTo = document.getElementById("dateTo").value;

    let filtered = allMatches.filter(match =>
        match.match_hometeam_name.toLowerCase().includes(value) ||
        match.match_awayteam_name.toLowerCase().includes(value)
    );

    if (dateFrom) {
        filtered = filtered.filter(match => match.match_date >= dateFrom);
    }
    if (dateTo) {
        filtered = filtered.filter(match => match.match_date <= dateTo);
    }

    displayMatches(filtered);
}
//თარიღების არჩევის საშუალება
//ცალკე აპის სამუშაო
//მატჩის მოთამაშეების დამატება
//კუშები