var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
    // Alert the players they are starting the round.
    window.alert("Welcome to Robot Gladiators!");

    // ask if the player would like to SKIP or FIGHT this round.
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    console.log(playerName + " has chosen to " + promptFight + ".");

if (promptFight === "FIGHT" || promptFight === "fight"){
    /* Subtract value of playerAttack from enemyHealth
     Update value of enemyHealth var
    */
   enemyHealth = enemyHealth - playerAttack;

    // Log a message to console for confirmation
    console.log(
    playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
    )

    // check enemy health 
    if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died!");
    }
    else {
        window.alert (enemyNames[i] + " still has " + enemyHealth + " health left.");
    }
    /* subtract the value of enemyAttack from playerHealth
     Update playerHealth value
    */
   playerHealth = playerHealth - enemyAttack;

    // Log a message to console for confirmation
    console.log(
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
} else if (promptFight === "SKIP" || promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if true, leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from player for skipping
        playerMoney = playerMoney - 2;
    }
    // if no, ask question again by running fight() again
    else {
        fight();
    }
} else {
    window.alert("You need to choose a valid option. Try again!");
}
};

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}
