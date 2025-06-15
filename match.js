const match = JSON.parse(localStorage.getItem('selectedMatch'));

const container = document.getElementById('match-Details');

if (match) {
    // მოთამაშეების გამოტანა
    let homePlayers = "";
    let awayPlayers = "";

    if (match.lineup && match.lineup.home && Array.isArray(match.lineup.home.starting_lineups)) {
        homePlayers = `<ul>${match.lineup.home.starting_lineups.map(p => `<li>${p.player}</li>`).join("")}</ul>`;
    } else if (match.match_hometeam_players && Array.isArray(match.match_hometeam_players)) {
        homePlayers = `<ul>${match.match_hometeam_players.map(p => `<li>${p.player}</li>`).join("")}</ul>`;
    }

    if (match.lineup && match.lineup.away && Array.isArray(match.lineup.away.starting_lineups)) {
        awayPlayers = `<ul>${match.lineup.away.starting_lineups.map(p => `<li>${p.player}</li>`).join("")}</ul>`;
    } else if (match.match_awayteam_players && Array.isArray(match.match_awayteam_players)) {
        awayPlayers = `<ul>${match.match_awayteam_players.map(p => `<li>${p.player}</li>`).join("")}</ul>`;
    }

    container.innerHTML = `
        <h2>${match.match_hometeam_name} vs ${match.match_awayteam_name}</h2>
        <p>Score: ${match.match_hometeam_score} - ${match.match_awayteam_score}</p>
        <p>Date: ${match.match_date}</p>
        <p>Status: ${match.match_status}</p>
        <p>Stadium: ${match.match_stadium || 'უცნობია'}</p>
        <p>Referee: ${match.match_referee || 'უცნობია'}</p>
        <p>League: ${match.league_name || 'უცნობია'}</p>
        <p>Round: ${match.match_round || 'უცნობია'}</p>
        <p>Country: ${match.country_name || 'უცნობია'}</p>
        <p>Home Team Formation: ${match.match_hometeam_system || 'უცნობია'}</p>
        <p>Away Team Formation: ${match.match_awayteam_system || 'უცნობია'}</p>
        <div style="margin-top:10px;">
            <strong>${match.match_hometeam_name} მოთამაშეები:</strong>
            ${homePlayers || "<em>მონაცემები არ არის</em>"}
        </div>
        <div>
            <strong>${match.match_awayteam_name} მოთამაშეები:</strong>
            ${awayPlayers || "<em>მონაცემები არ არის</em>"}
        </div>
    `;
} else {
    container.innerHTML = "<p>მატჩის დეტალები ვერ მოიძებნა.</p>";
}