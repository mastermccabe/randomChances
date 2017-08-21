/* written by McCabe Tonna */
/* 1 quarter = 1 game
1 in 100 chance to win the slot machine -
which will give you between 50 - 100 quarters -- use Math.random and
Math.floor to pick random number of coins)*/

function randomChances(enterQuarters, leaveAmount) {
  var winningValue = Math.trunc(Math.random() * 100) + 1;


  while (enterQuarters != leaveAmount && enterQuarters > 0) {
    var randomRoll = Math.trunc(Math.random() * 100) + 1;

    var payout = Math.trunc(Math.random() * 50) + 51;

    console.log("Your Roll:" + randomRoll + "\n");
    console.log("Winning Value:" + winningValue + "\n\n\n\n");
    console.log("Quarters left:" + enterQuarters);



    if (randomRoll == winningValue) {
      console.log("WINNER!!!!!\n You have won " + winningValue + "\n\n\n\n");
      enterQuarters = enterQuarters + winningValue;
      return enterQuarters;
    }
    enterQuarters -= 1;
  }

  if (enterQuarters == 0) {
    console.log("Sorry you lost, enter more quarters!!!")
    return 0;
  }

}
randomChances(20, 25);
