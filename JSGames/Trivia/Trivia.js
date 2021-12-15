const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');



function quiz(){}

function showResults(){}

// display quiz right away
quiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
      question: "How tall is the eiffel tower?",
      answers: {
        a: "324m",
        b: "224m",
        c: "334m",
        d: "234m"
      },
      correctAnswer: "a"
    },
    {
      question: "What animal have 3 heart?",
      answers: {
        a: "whale",
        b: "Sea-horse",
        c: "Octopuse"
      },
      correctAnswer: "c"
    },
    {
      question: "what is the first game ever created?",
      answers: {
        a: "Pacman",
        b: "Pong",
        c: "Pokémon",
        d: "Adventure"
      },
      correctAnswer: "b"
    }
  ];

  function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answers){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }