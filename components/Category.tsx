import { useState } from 'react';
import Question from "./Question";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from "../styles/Icons.module.css";

const Category = ({ content, step }: { content: any; step: number }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handlePrevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    }

    const handleNextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    }

    const isFirstQuestion = currentQuestion === 0;
    const isLastQuestion = currentQuestion === content.CATEGORYQUESTIONS.length - 1;

    return (
        <div className={styles.question}>
            <TransitionGroup>
                <CSSTransition
                    key={currentQuestion}
                    timeout={500}
                    classNames={{
                        enter: styles["fade-enter"],
                        enterActive: styles["fade-enter-active"],
                        exit: styles["fade-exit"],
                        exitActive: styles["fade-exit-active"],
                    }}
                >
                    <Question content={content.CATEGORYQUESTIONS[currentQuestion]} step={step} handleNextQuestion={handleNextQuestion} />
                </CSSTransition>
            </TransitionGroup>
            <div className={styles.buttonArea}>
                <button onClick={handlePrevQuestion} className={styles.button63}
                            role="button"                 disabled={isFirstQuestion} // disable if this is the first question
                            >Førre</button>
                <button onClick={handleNextQuestion} className={styles.button61}
                    role="button"                 disabled={isLastQuestion} // disable if this is the first question
                    >Neste</button>
            </div>
        </div>
    );
};

export default Category;