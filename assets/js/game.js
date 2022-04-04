var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function() {
while(playerHealth > 0 && enemyHealth > 0) {
  
        // ask if the player would like to SKIP or FIGHT this round.
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player picks "skip" confirm and stop the loop
        if (promptFight === "SKIP" || promptFight === "skip") {

        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                 // subtract money from player for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        
        // remove enemy health by subtracting amount in playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining."
            );
               
        // check enemy health 
        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while loop because enemy is dead
            break;
        } else {
             window.alert (enemyNames[i] + " still has " + enemyHealth + " health left.");
        }
        
        // remove players health by subtracting amount in enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
                   
        // check player health
        if (playerHealth <= 0) {
           window.alert(playerName + " has died!");
           // leave while loop if player has died 
           break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } // end of while loop
}; // end of fight function

            
for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0){
        // let player know what round they are in, remember that arrays start at 0 so add 1
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );

        // pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemy health befor starting new fight
        enemyHealth = 50;

        // use debuggr to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
        
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}
            