import React from "react";
import styles from './QuizAnswers.module.css';
import { IQuestion } from "../../consts/quizNames";
import Timer from "../Timer/Timer";
import Result from "../Result/Result";
import ProgressBar from "../ProgressBar/ProgressBar";
import HomeBtn from "../HomeBtn/HomeBtn";

interface QuizAnswersProps {
    selectedQuestions: IQuestion[];
    currentQuestionIndex: number;
    selectedAnswer: number | null;
    handleAnswer: (index: number) => void;
    goNext: () => void;
    score: number;
}

const QuizAnswers: React.FC<QuizAnswersProps> = ({
    selectedQuestions,
    currentQuestionIndex,
    selectedAnswer,
    handleAnswer,
    goNext,
    score
}) => {

    const hasQuestions = selectedQuestions && currentQuestionIndex < selectedQuestions.length;
    return (
        <div className={styles.quizContainer}>
            {hasQuestions ? (
                <div className={styles.quizBox}>
                    <ProgressBar
                        selectedQuestions={selectedQuestions}
                        currentQuestionIndex={currentQuestionIndex}
                        hasQuestions={hasQuestions}
                    />
                    <div
                        className={styles.questionText}
                    >
                        {selectedQuestions[currentQuestionIndex].text}
                    </div>

                    <div>
                        {selectedQuestions[currentQuestionIndex].answers.map((answer, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                className={
                                    selectedAnswer === index
                                        ? styles.SelectedAnswer
                                        : styles.Answer
                                }
                            >
                                {answer.text}
                            </button>
                        ))}
                    </div>

                    <div className={styles.footer}>
                        <Timer />
                        <button
                            className={styles.btn}
                            onClick={() => goNext()}
                        >
                            Next
                        </button>
                    </div>
                </div>

            ) : (
                <div className={styles.resultBox}>
                    <Result score={score} />
                    <HomeBtn />
                </div>
            )}
        </div>
    );
};

export default QuizAnswers;
