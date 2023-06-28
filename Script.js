// Questions that will be asked
const Questions = [{
	q: "Which of the following element is removed by HTML5?",
	a: [{ text: "vlink", isCorrect: false },
	{ text: "marginwidth", isCorrect: false },
	{ text: "dir", isCorrect: true },
	{ text: "compact", isCorrect: false }
	]

},
{
	q: "Which of the following css property specifies a delay for the transition effect?",
	a: [{ text: "Transition-effect", isCorrect: false, isSelected: false },
	{ text: "Transition", isCorrect: false },
	{ text: "Transition-duration", isCorrect: false },
	{ text: "Transition-delay", isCorrect: true }
	]

},
{
	q: "JavaScript ",
	a: [{ text: "RMI", isCorrect: false },
	{ text: "Triggering Event", isCorrect: false },
	{ text: "Function/Method", isCorrect: true },
	{ text: "Preprocessor", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}