export async function fetchMatches(from, to, apiKey) {
    const url = `https://apiv2.apifootball.com/?action=get_events&from=${from}&to=${to}&APIkey=${apiKey}`;
    const res = await fetch(url);
    return await res.json();
}