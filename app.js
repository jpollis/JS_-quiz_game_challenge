(function() {
	var Question = function(randomQuestion, answerOptions, correctNumber) {
		this.randomQuestion = randomQuestion;
		this.answerOptions = answerOptions;
		this.correctNumber = correctNumber;
	}

	var nhl = new Question("What city in South Florida do the Panthers play in?", ["Sunrise", "Tampa Bay"], 0);
	var mma = new Question("Who is the current Heavy Weight Champ?", ['Jon Jones', 'Daniel Cormier'], 1);

	var questionArray = [nhl, mma];

	Question.prototype.askQuestion = function() {
		console.log(this.randomQuestion);
		for (var i = 0; i < this.answerOptions.length; i++) {
		  console.log(i + ": " + this.answerOptions[i]);
		}
	}

	Question.prototype.checkAnswer = function(answer) {
		if (answer === this.correctNumber) {
			console.log('Correct!');
		} else {
			console.log('Try again!');
		}
	}

	var el = Math.floor(Math.random()*questionArray.length);

	questionArray[el].askQuestion();

	var userAnswer = parseInt(prompt('Please select the correct answer'));

	questionArray[el].checkAnswer(userAnswer);
})();
