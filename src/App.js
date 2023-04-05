import './App.css';
import { useState } from 'react';

function App() {
    const [question, setQuestion] = useState('When yobo and I went to Chicago in August where did we eat?');
    const [options, setOptions] = useState(['Ramen-san deluxe', 'Kung Fu Tea', 'Strings Ramen Shop', 'Daebak Korean BBQ']);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

    const checkAnswer = (option) => {
        /** 
        if (option === 'bowling' || option === 'FUCKING BOWLING') {
            setIsCorrectAnswer(true);
            document.querySelector('.question').classList.add('fade-out');
            document.querySelector('.poem').classList.add('fade-in');
        } else {
            setIsCorrectAnswer(false);
        }
        setSelectedOption(option);
        */
       setIsCorrectAnswer(true);
       document.querySelector('.question').classList.add('fade-out');
       document.querySelector('.poem').classList.add('fade-in');
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
                <p>Hand in hand with you, I find my home</p>
                <p>I want nothing more than to always be with you</p>
            </div>
        </div>
    );
}

export default App;
