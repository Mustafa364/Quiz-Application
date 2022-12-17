

    var quizData = [
        {
          question: "Ques 1: What is Sum of 23+7 ?",
          a: "30",
          b: "22",
          c: "37",
          d: "27",
          correct: "a",
        },
        {
          question: "Ques 2: How many players are in a cricket team ?",
          a: "10",
          b: "11",
          c: "12",
          d: "13",
          correct: "c",
        },
        {
          question: "Ques 3: What is Capital of Punjab ?",
          a: " Karachi",
          b: " Multan",
          c: " Rawalpendi",
          d: " Lahore",
          correct: "c",
        },
        {
          question: "Ques 4: What do you call a type of shape that has five sides ?",
          a: "Pentagon",
          b: " Rectangle ",
          c: "Triangle",
          d: "Square",
          correct: "a",
        },
        {
          question: "Ques 5: Which is the coldest location in the earth ?",
          a: "America",
          b: "Russia",
          c: "Antarctica ",
          d: "Europe",
          correct: "c",
        },
        {
            question: "Ques 6: The largest ‘Democracy’ in the world ?",
            a: "America",
            b: "Russia",
            c: "Pakistan ",
            d: "India",
            correct: "d",
          },
          {
            question: "Ques 7: Who is the founder of Microsoft ?",
            a: "Bill Gates",
            b: "Elon Musk",
            c: "Sundar Pichai ",
            d: " Mark Zuckerberg ",
            correct: "a",
          },
          {
            question: "Ques 8: What is Computer Coding?",
            a: "A Radio Show",
            b: "List of Functions",
            c: "Giving Instructions to Computer",
            d: "StyleSheets",
            correct: "c",
          },
          {
          question: "Ques 9: Which of these is a Programming Language?",
          a: "HyperText Markup Language",
          b: "Cascading StyleSheet",
          c: "Twitter Bootstrap",
          d: "JavaScript",
          correct: "d",
        },
        {
            question: "Ques 10: Inside which HTML element do we put the JavaScript?",
            a: "<script src=''>",
            b: "<js>",
            c: "<scripting>",
            d: "<javascript> ",
            correct: "a",
          },
      ];
      
      var answerEls = document.querySelectorAll(".answer");
      var aText = document.getElementById("aText");
      var bText = document.getElementById("bText");
      var cText = document.getElementById("cText");
      var dText = document.getElementById("dText");
      var questionEl = document.getElementById("question");
      var submitBtn = document.getElementById("submit");
      
      var currentQuiz = 0;
      var score = 0;
      
      quizLoad();
      
      function quizLoad() {
        deSelectInput();
      
        var currentQuizData = quizData[currentQuiz];
      
        questionEl.innerText = currentQuizData.question;
        aText.innerText = currentQuizData.a;
        bText.innerText = currentQuizData.b;
        cText.innerText = currentQuizData.c;
        dText.innerText = currentQuizData.d;
      }
      
      function getSelection() {
        var answer = undefined;
      
        answerEls.forEach((answerEl) => {
          if (answerEl.checked) {
            answer = answerEl.id;
          }
        });
        return answer;
      }
      
      function deSelectInput() {
        answerEls.forEach((answer) => {
          answer.checked = false;
        });
      }
      
      submitBtn.addEventListener("click", () => {
        var answer = getSelection();
      
        if (answer) {
          if (answer === quizData[currentQuiz].correct) {
            score++;
          }
      
          currentQuiz++;
      
          if (currentQuiz < quizData.length) {
            quizLoad();
          } else {
            alert(`You've scored ${score} / ${quizData.length}`);
            location.reload();
          }
        }
      });
      