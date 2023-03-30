import './App.css';
import { useState } from 'react';

function App() {
    const [question, setQuestion] = useState('What day is out anniversary?');
    const [options, setOptions] = useState(['April 29 haha', 'March 29', 'April 10', 'January 20']);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

    const checkAnswer = (option) => {
        if (option === 'April 10') {
            setIsCorrectAnswer(true);
            document.querySelector('.question').classList.add('fade-out');
            document.querySelector('.poem').classList.add('fade-in');
        } else {
            setIsCorrectAnswer(false);
        }
        setSelectedOption(option);
    };

    const handleAnimationEnd = () => {
        document.querySelector('.question').remove();
    }

    return (
        <div className="container">
            <div className="question" onAnimationEnd={handleAnimationEnd}>
                <h2>{question}</h2>
                {options.map((option) => (
                    <button
                        key={option}
                        className={selectedOption === option ? 'selected' : ''}
                        onClick={() => checkAnswer(option)}
                        disabled={selectedOption !== null}
                    >
                        {option}
                    </button>
                ))}
                {selectedOption !== null && (
                    <div>
                        {isCorrectAnswer ? (
                            <p className="correct">Correct!</p>
                        ) : (
                            <p className="incorrect">Incorrect</p>
                        )}
                    </div>
                )}
            </div>
            <div className="poem">
                <p>So long it has been, since I've last seen you</p>
                <p>Like a drug, my body needs you, and I don't want to be saved</p>
            </div>
        </div>
    );
}

export default App;
