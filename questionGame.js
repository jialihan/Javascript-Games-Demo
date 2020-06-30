/**
 * Use IIFE to wrap the whole project game
 */
(function() {
	var Question = function(desc, ansArray, correctNum) {
		this.desc = desc;
		this.ans = ansArray;
		this.correct = correctNum;
	};

	// Use Prototype
	Question.prototype.printOut = function() {
		console.log(this.desc);
		for (var i = 0; i < this.ans.length; i++) {
			console.log(this.ans[i]);
		}
	};
	Question.prototype.checkAnswer = function(num, callback) {
		var sc;
		if (num === this.correct) {
			console.log('Correct!');
			sc = callback(true);
		} else {
			console.log('Wrong ans! correct ans is ' + this.correct);
			sc = callback(false);
		}
		this.displayScore(sc);
	};
	Question.prototype.displayScore = function(score) {
		console.log('totol score = ' + score);
		console.log('----------------------------------------');
	};
	//  End-Prototype

	var q1 = new Question('Which month has 31 days?', [ '1. May', '2. Feb' ], 1);
	var q2 = new Question('what is my first name?', [ '1. jelly', '2. jane' ], 1);
	var q3 = new Question('what is the hotest month?', [ '1. Jun', '2. July', '3. Aug' ], 3);

	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
			}
			return sc;
		};
	}
	var keepScore = score(); // copy of the returned function

	function nextQuestion() {
		var optionalQuestions = [ q1, q2, q3 ];
		var qIndex = Math.floor(Math.random() * optionalQuestions.length);
		var selectedQuestion = optionalQuestions[qIndex];
		selectedQuestion.printOut();
		var resp = window.prompt(
			'Please select the correct ansswer(just type the number), Or type exit to quit. Attention: click canel will not exit the game!!!'
		);
		if (resp === 'exit') {
			return;
		}
		selectedQuestion.checkAnswer(parseInt(resp), keepScore);
		nextQuestion();
	}
	nextQuestion();
})();
