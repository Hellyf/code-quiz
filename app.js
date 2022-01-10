// quiz class//
class Quiz{
    constructor(questions){
        this.score=0;
        this.questions=0;
        this.questionsIndex=0;
    }

    getQuestionIndex(){
        return this.question[thid.questionsIndex];
    }

    guess(answer){
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionsIndex++;
    }

    isEnded(){
        return this.questionsIndex=== this.questions.length;

    }
}
class Question{
    constructor(text,choices,answer){
        this.text= text;
        this.choices=choices;
        this.answer=answer;
    }

    isCorrectAnswer(choice){
        return this.answer===choice;
    }
}
function displayQuestion(){
    if(Quiz.isEnded ()){
        showScore();

    }else{
        let questionElement=document.getElementById("question");
        questionElement.innerHTML= quiz.getQuestionIndex().text;

        let choices = getQuestionIndex().choices;
        for(let i = 0; i < choices.length; i++){
            let choiceElement= document.getElementById("choice"+i);
            choiceElement.innerHTML=choices[i];
            guess("btn"+i, choices[i]);
        }

        showProgress();
    }
};
function guess(id,guess){
    let button=document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
}
function showProgress(){
    let currentQuestionNumber = quiz.questionsIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML=
    'Question ${currentQuestionNumber} of ${quiz.question.length} ';
  }

  function showScores(){
      let quizEndHTML= 
      '
      <h1> Quiz completed </h1>
      <h2> id="score">you Scored ${quiz.score} of ${quiz.question.length}</h2>

      <div class="quiz-repeat">
          <a href="index.html">Take Quiz again</a>

      </div>
      
      ';
      let quizElement = document.getElementById("quiz");
      quizElement.innerHTML= quizEndHTML;
  }
  let question = [
     new Question(
          "what's my major", ["bussiness international","art & literature","politic and development","computer science"], "bussiness international"
       ),
     new Question(
        "my favorite type of music", ["electro","rap","r&b","pop"], "r&b"
     ),
     new Question(
        "what's your nationality", ["Jamaicain","haitian","French","americain"], "haitian"
     ),
     new Question(
        "what's my favorite activity", ["hiking","skiing","museum","snowboarding"], "museum"
     ),
     new Question(
        "favorite color", ["red","blue","green","orange"], "blue"
     ),
     )
  ];

  let quiz = new Quiz(questions);
  displayQuestion();
