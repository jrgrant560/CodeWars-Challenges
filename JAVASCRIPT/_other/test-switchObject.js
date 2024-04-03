let booFeelsTable = {
    "HUNGRY": "WANTS FOOD",
    "SAD": "CRYING",
    "HAPPY": "LAUGHING"
}

function howIsBoo(state) { return (booFeelsTable[state] || "SLEEPING") };

let stateA = undefined;

console.log(howIsBoo(stateA));