var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameters for enemy's name)
var fight = function(enemyName) {
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
     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
   );
               
   // check enemy health 
   if (enemyHealth <= 0) {
     window.alert(enemyName + " has died!");
    
     //award player money for winning
     playerMoney = playerMoney + 20;
    
     //leave while loop because enemy is dead
     break;
   } else {
       window.alert (enemyName + " still has " + enemyHealth + " health left.");
     }
        
   // remove players health by subtracting amount in enemyAttack variable
   playerHealth = playerHealth - enemyAttack;
   console.log(
     enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
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

// funtion to start a new game
var startGame = function() {
  // restart player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  // fight each enemy robot by looping over them and fighting one at a time
  for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0){
      // let player know what round they are in, remember that arrays start at 0 so add 1
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
    
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
  
      //reset enemy health before starting new fight
      enemyHealth = 50;
  
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
    
      // if player is still alive and we're not at the last enemy in the array
      if (playerHealth > 0 && i <  enemyNames.length - 1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        // if yes, take them to the store function
        if (storeConfirm) {
          shop();
        }
      }
    }
    // if player isnt alive, stop the game.
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    } 
  }

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

// function to end the entire game
var endGame = function () {

  // if player is still alive, player wins!
  if (playerHealth > 0){
    window.alert("Great job, You've survived the game! You now have a score of " + playerMoney + ".");
  } else {
      window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if(playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come again soon.");
  }
};

// go to shop between battles function
var shop = function() {
  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt(
    'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.'
  );

    // use switch case to carry out action
    switch (shopOptionPrompt) {
      case 'REFILL':
      case 'refill':
        if (playerMoney >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
  
          // increase health and decrease money
          playerHealth = playerHealth + 20;
          playerMoney = playerMoney - 7;
      }
      else {
          window.alert("You don't have enough money!");
      }
        break;
      case 'UPGRADE':
      case 'upgrade':
        if (playerMoney >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
  
          // increase attack and decrease money
          playerAttack = playerAttack + 6;
          playerMoney = playerMoney - 7;
      }
      else {
          window.alert("You don't have enough money!");
      }
        break;
      case 'LEAVE':
      case 'leave':
        window.alert('Leaving the store.');
  
        // do nothing, so function will end
        break;
      default:
        window.alert('You did not pick a valid option. Try again.');
  
        // call shop() again to force player to pick a valid option
        shop();
        break;
    }
  };
 startGame();
