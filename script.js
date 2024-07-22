alert("Hello, from script.js!");
console.log("Hello from script console.log");
document.write("Hello from script document.write");

let income = [100, 200, 500];
let expenses = [50, 80, 120];
let totalIconme = income.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let totalExpense = expenses.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let netBalance = totalIconme - totalExpense;

console.log(netBalance);

let tasks = {
    "Eat": 3,
    "Sleep": 3,
    "Study": 2,
    "Workout": 2,
    "Doomscrolling": 1
}
console.log(tasks)
let vitalTasks = []
let importantTasks = []
let nonImportantTasks = []

for(let [task, value] of Object.entries(tasks)) {
    if (value == 1) {
        nonImportantTasks.push(task);
    }
    else if (value == 2) {
        importantTasks.push(task);
    }
    else{
        vitalTasks.push(task);
    }    
}

console.log(vitalTasks)
console.log(importantTasks)
console.log(nonImportantTasks)



