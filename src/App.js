import './App.css';
import { useState } from 'react';
import { questions } from './Questions';

function App() {


  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if(isCorrect) 
     {
      setScore(score+1);

     }


    if(currentQuestion + 1 < questions.length) 
    {
      setCurrentQuestion(currentQuestion + 1)
    }
    else 
    {
      setShowScore(true)
    }

  }

  const handleRepeat = () => {
    window.location.reload();
  }

  return (
    <div className='app'>
    {showScore ? (
      <>
      
      <div className='score-section'>
        You scored {score} out of {questions.length}
        
      </div>
      <div className='repFlex'>

      <button className='repeatBtn' onClick={handleRepeat}>Repeat Test</button>
      </div>
      </>
    ) : (
      <>
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>{questions[currentQuestion].questionsText}</div>
        </div>
        <div className='answer-section'>
          {questions[currentQuestion].answerTexts.map((answerTexts) => (
            <button onClick={() => handleAnswerClick(answerTexts.correctAnswer)}>{answerTexts.answerText}</button>
          ))}
        </div>
      </>
    )}
  </div>
  );
}

export default App;
