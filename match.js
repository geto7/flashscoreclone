const match = JSON.parse(localStorage.getItem('selectedMatch'));

const container = document.getElementById('match-Details');

if (match) {
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
        <!-- დაამატე სხვა დეტალები სურვილის მიხედვით -->
    `;
} else {
    container.innerHTML = "<p>მატჩის დეტალები ვერ მოიძებნა.</p>";
}