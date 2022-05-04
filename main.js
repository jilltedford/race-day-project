let raceNumber = Math.floor(Math.random() * 1000);

// Enter true or false 
const registeredEarly = true;

// Enter age in number
const runnerAge = 18;

if (runnerAge >= 18 && registeredEarly) {
    raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly) {
    console.log(`Your race number is ${raceNumber}. The race begins at 9:30 AM.`);
} else if (runnerAge >= 18) {
    console.log(`Your race number is ${raceNumber}. The race begins at at 11:00 AM.`);
} else if (runnerAge < 18) {
    console.log(`Your race number is ${raceNumber}. The race begins at 12:30 PM.`);
}
