$(document).ready(function() {	

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern=[]; 
let userClickedPattern=[]; 
let level = 0;
let started = false; 
let highScore = 0;

//-------------------------------------------------
// When the title is clicked, it reloads the page
	$('#game-title').click(function() {
	location.reload();
});

//-------------------------------------------------
// Anchor tag that shows the instruction to play Simon Game
	$("a").on("click", function() {
		$("#instruction").css("display", "flex");
});


//-------------------------------------------------
// 1) The start button
	$("#start").on("click", function() {
		setTimeout(function() {
			if (!started) {
				$("#level-title").text("Level " + level);
				$("#start").css("display", "none");
				$("#instruction").css("display", "none");
				$("a").css("display", "none");
				nextSequence();
				started = true;
				setTimeout(function() {
					$("#your-turn").css("color", "#526D82"); 
				}, 500);
			};
		}, 500);
	});


//-------------------------------------------------
//Checks if the user clicked on any button, and pushed the "id" of that button the end of an array
	$(".btn").click(function() {
		if(started) { 
		var userChosenColour = $(this).attr("id");	userClickedPattern.push(userChosenColour);
			playSound(userChosenColour);
			animatePress(userChosenColour);
			var userLastIndex = userClickedPattern.length - 1;
				checkAnswer(userLastIndex);
		}; 
	});
	
	
//-------------------------------------------------
// 2) A function which selects random button
	function nextSequence() {
		userClickedPattern = [];
		level++;
		$("#level-title").text("Level " + level);
		// randomNumber gives random number between 0-3
		var randomNumber = Math.floor(Math.random() * 4);
	
		//It gets the color from the buttonColours array and passed it into randomChosenColor
		var randomChosenColour = buttonColours[randomNumber];
		// Finally, the value will be pushed to the end of the empty array
		gamePattern.push(randomChosenColour);
	
		// Adds a flash effect on the random color	
		$("#" + randomChosenColour).delay(100).fadeOut(100).fadeIn(100);
		playSound(randomChosenColour);
	};


//-------------------------------------------------
// 3) Checks if the buttons the user clicked is right
	function checkAnswer(currentLevel) {
		
		if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
			console.log("Success");
			if (userClickedPattern.length === gamePattern.length) {
				setTimeout(function() {
					$("#your-turn").css("color", "#9DB2BF"); 
				}, 500);
				setTimeout(function() {
					nextSequence();
				}, 1000);
				setTimeout(function() {
					$("#your-turn").css("color", "#526D82");
				}, 1500);
			}; 
		} else {
		gameOver();
		startOver(); 
		}; 
	}; 
	

//-------------------------------------------------
// Plays the corresponding sounds
	function playSound (name) {
		var audio = new Audio("./sounds/" + name + ".mp3");
		audio.play();
	}; 
	
	
//-------------------------------------------------
// Adds animation to the clicked button
	function animatePress(currentColour) {
		$("#" + currentColour).addClass("pressed")
		setTimeout(function() {
			$("#" + currentColour).removeClass("pressed"); 
		}, 100); 
	};
	
	
//-------------------------------------------------
//4) A function when you get it wrong
	function gameOver () {
		var audio = new Audio ("./sounds/wrong.mp3");
		audio.play(); 
		$("body").addClass("game-over"); 
		setTimeout(function() {
			$("body").removeClass("game-over");
			$("#your-turn").css("color","#9DB2BF"); 
			$("a").css("display", "block");
		}, 100);
		if (level > highScore) {
			level--;
			$("#score").text(` ${level}`);
			highScore = level;
		};
	};

	
//-------------------------------------------------
//5) A function to restart the game
	function startOver () {
		started = false;
		gamePattern = [];
		level = 0;
		$("#level-title").text("Wrong, Start again!");
		$("#start").css("display", "block");
		$("#start").text("Restart"); 
	}; 
	
	
}); 