let resetButton = document.getElementById("reset-btn"); 
let winnerPlayer = document.getElementsByTagName("h2")[0];
let comment =  document.getElementById("comment"); 
let phraseOne = [
		"What should be the consequence?",
		"What a great start Player 1!",
		"The universe heard you!"
		];
let phraseTwo = [
		"Tell em the consequence!",
		"That's great Player 2!",
		"Win streak incomiiing!"
		];
let phraseDraw = [
		"Both lucky!", 
		"Try again!", 
		"Come onnn!"
	]; 
		
		
	resetButton.addEventListener("click", function (){
		resetButton.innerHTML = "Reset"; 
		rollTheDice(); 
	}); 
	
		//The function to roll the dice
		function rollTheDice () {
			//for Dice no. 1
			var randomNumber1 = Math.floor(Math.random() * 6 + 1);
			var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
			var image1 = document.querySelectorAll("img")[0];
			image1.setAttribute("src", randomDiceImage1);
			//for Dice no. 2
			var randomNumber2 = Math.floor(Math.random() * 6 + 1);
			var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
			var image2 = document.querySelectorAll("img")[1];
			image2.setAttribute("src", randomDiceImage2);
			
			//Text to display based on who wins
			if (randomNumber1 > randomNumber2) {
				winnerPlayer.innerHTML = "Player1 wins!";
				comment.innerText = phraseOne[randomComment()]; 
			} else if (randomNumber2 > randomNumber1) {
				winnerPlayer.innerHTML = "Player2 wins!";
				comment.innerText = phraseTwo[randomComment()]; 
			} else {
				winnerPlayer.innerHTML = "Draw!";
				comment.innerText = phraseDraw[randomComment()]; 
			}
		}; 
		
		//A function that gives random number from 0-2
		function randomComment() {
		 let thisNumber =(Math.floor(Math.random() * 3));
		 return thisNumber; 
		}; 
