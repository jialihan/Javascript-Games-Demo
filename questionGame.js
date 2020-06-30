function PlayQuestionGame() {
	var Question = function(desc, ansArray, correctNum) {
		this.desc = desc;
		this.ans = ansArray;
		this.correct = correctNum;
		this.printOut = function() {
			console.log(this.desc);
			for (var i = 0; i < ansArray.length; i++) {
				console.log(this.ans[i]);
			}
		};
	};

	var q1 = new Question('Which month has 31 days?', [ '1. May', '2. Feb' ], 1);
	var q2 = new Question('what is my first name?', [ '1. jelly', '2. jane' ], 1);
	var q3 = new Question('what is the hotest month?', [ '1. Jun', '2. July', '3. Aug' ], 3);

	var optionalQuestions = [ q1, q2, q3 ];
	var qIndex = Math.floor(Math.random() * optionalQuestions.length);
	var selectedQuestion = optionalQuestions[qIndex];
	selectedQuestion.printOut();

	var resp = window.prompt(
		'Please select the correct ansswer(just type the number), Or type exit to quit. Attention: click canel will not exit the game!!!'
	);
	console.log(resp);
	if (resp === null || resp === '' || resp === 'null') {
		// click cancel
		console.log('-----------------------------------');
		PlayQuestionGame();
	}
	if (resp === 'exit') {
		return;
	}
	// IIFE to execute this function only once
	(function(num) {
		if (num === selectedQuestion.correct) {
			console.log('Correct!');
		} else {
			console.log('Wrong ans! correct ans is ' + selectedQuestion.correct);
		}
	})(parseInt(resp));
	console.log('----------------------------------------');
}
PlayQuestionGame();
