class Game {
  constructor(questions) {
    this.questions = questions;
    this.isRunning = true;
  }
  askQuestion(n) {
    var a = prompt(this.questions[n].question, this.questions[n].answers);
    if(a == null) {
      this.isRunning = false;
    }
    else if(a != this.questions[n].correctAnswer) {
      alert("Wrong Answer, try again")
      this.askQuestion(n);
    } else {
      alert("You little genius you, correct Answer");
    }
  }
  play() {
    var n = 0;
    while(n < this.questions.length && this.isRunning){
      this.askQuestion(n);
      n++;
    }
  }
}

class QuestionObj {
  constructor(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

var quest1 = new QuestionObj("What is Air?", ["A","B","C","D"], "B");
var quest2 = new QuestionObj("What is Love?", ["A","B","C","D"], "C");
var quest3 = new QuestionObj("What is Hate?", ["A","B","C","D"], "D");
var quest4 = new QuestionObj("What is D-Day?", ["A","B","C","D"], "A");
var quest5 = new QuestionObj("What is the EU?", ["A","B","C","D"], "A");
var quest6 = new QuestionObj("What is Brexit?", ["A","B","C","D"], "C");
var quest7 = new QuestionObj("What is Greece?", ["A","B","C","D"], "B");
var listOfQuestions = [quest1, quest2, quest3, quest4, quest5, quest6, quest7];

var game = new Game(listOfQuestions)
