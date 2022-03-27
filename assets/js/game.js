var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // Alert the players they are starting the round.
    window.alert("Welcome to Robot Gladiators!");

    /* Subtract value of playerAttack from enemyHealth
     Update value of enemyHealth var
    */
   enemyHealth = enemyHealth - playerAttack;

    // Log a message to console for confirmation
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )

    // check enemy health 
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert (enemyName + " still has " + enemyHealth + " health left.");
    }
    /* subtract the value of enemyAttack from playerHealth
     Update playerHealth value
    */
   playerHealth = playerHealth - enemyAttack;

    // Log a message to console for confirmation
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    )

    // check player health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};

fight();
