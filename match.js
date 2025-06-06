const params = new URLSearchParams(window.location.search);
const matchId = parseInt(params.get('id'));

fetch("matches.json")
.then(res => res.json())
.then(matches => {
    const match = matches.find(m => m.id === matchId);
    if (match) {
        displayMatchDetails(match);
    } else {
        document.body.innerHTML = "<p>მატჩი ვერ მოიძებნა</p>";
    }
})
.catch(error => {
    console.error("მატჩის დეტალები ვერ ჩაიტვირთა", error);
    document.body.innerHTML = "<p>მატჩის დეტალები ვერ ჩაიტვირთა</p>";
});
function displayMatchDetails(match) {
    const container = document.getElementById("match-Details");

    container.innerHTML = `
        <h1>${match.team1} vs ${match.team2}</h1>
        <p>Score: ${match.score}</p>
        <p>Date: ${match.date}</p>
        <p>Status: ${match.status}</p>
        <a href="index.html"> ⬅️ უკან დაბრუნება</a>
    `;
}