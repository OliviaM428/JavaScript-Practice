//2026 season game results
const seasonResults = [
    {
        gameDate: "2026-10-15",
        gameLocation: "Scotiabank Saddledome",
        hawksScore: 5,
        opponentTeam: "Calagory Flames",
        opponentScore: 1,
        hawksWin: true,
    },
    {
        gameDate: "2026-10-20",
        gameLocation: "Rogers Arena",
        hawksScore: 3,
        opponentTeam: "Vancover Giants",
        opponentScore: 4,
        hawksWin: false,
    },
    {
        gameDate: "2026-10-22",
        gameLocation: "Bell Centre",
        hawksScore: 3,
        opponentTeam: "Canucks",
        opponentScore: 2,
        hawksWin: true,
    },
]

const resultsTable = document.querySelector("#season-results-table")

function createResultRow(gameData) {
    //Generate a row from a game object
    const resultRow = `
    <tr>
    <td>${gameData.gameDate}</td>
    <td>${gameData.gameLocation}</td>
    <td>${gameData.hawksScore}</td>
    <td>${gameData.opponentTeam}</td>
    <td>${gameData.opponentScore}</td>
    <td>${gameData.hawksWin}</td>
    </tr>
    `;
    return resultRow;
}

//loop over all game results and print each row
function showAllResults(resultsList) {
    for (result of resultsList){
        const currentRow = createResultRow(result);
        resultsTable.innerHTML += currentRow;
    }
}
showAllResults(seasonResults);