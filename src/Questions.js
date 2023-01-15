const questions = [
  {
    questionsText : "Which is the correct JavaScript syntax to change the HTML content given below?\n\n<p id=”test”>Hello World!</p>",
    answerTexts : [
      {
        answerText : " document.getElementById(“test”).innerHTML = “Hello DataFlair!”;",
        correctAnswer : true
      },
      {
        answerText : " document.getElementsById(“test”).innerHTML = “Hello DataFlair!”;",
        correctAnswer : false
      },
      {
        answerText : " document.getElementById(test).innerHTML = “Hello DataFlair!”;",
        correctAnswer : false
      },
      {
        answerText : " document.getElementByTagName(“p”)[0].innerHTML = “Hello DataFlair!”;",
        correctAnswer : false
      }
    ]
  },
    {
      questionsText : "How do you find the minimum of x and y using JavaScript?",
      answerTexts : [
        {
          answerText : " min(x,y);",
          correctAnswer : false
        },
        {
          answerText : "Math.min(x,y)",
          correctAnswer : true
        },
        {
          answerText : " Math.min(xy)",
          correctAnswer : false
        },
        {
          answerText : "min(xy);",
          correctAnswer : false
        }
      ]
    },
    {
      questionsText : "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
      answerTexts : [
        {
          answerText : " if(x 2)",
          correctAnswer : false
        },
        {
          answerText : " if(x = 2)",
          correctAnswer : false
        },
        {
          answerText : "if(x == 2)",
          correctAnswer : true
        },
        {
          answerText : " if(x != 2 )",
          correctAnswer : false
        }
      ]
    },
 
    {
      questionsText : "Which of the following is an event listener in JavaScript?",
      answerTexts : [
        {
          answerText : "onclick",
          correctAnswer : false
        },
        {
          answerText : "blur",
          correctAnswer : false
        },
        {
          answerText : "click",
          correctAnswer : true
        },
        {
          answerText : "Click()",
          correctAnswer : false
        }
      ]
    }
  ]

  module.exports = {questions}