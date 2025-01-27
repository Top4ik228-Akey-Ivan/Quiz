import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { IQuestions, IQuize } from "../../consts/quizNames";
import QuizHeader from "../../components/quizHeader/QuizHeaer";
import QuizAnswers from "../../components/QuizAnswers/QuizAnswers";

interface QuizePageProps {
    questions: IQuestions;
    quizes: IQuize[];
}

const QuizPage: React.FC<QuizePageProps> = ({ questions, quizes }) => {
    const { name } = useParams<{ name: string }>();

    const selectedQuestions = questions[name as keyof IQuestions];
    const selectedQuiz = quizes.find(quiz => quiz.name === name);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answerIndex, setAnswerIndex] = useState<number>(0);
    const [score, setScore] = useState(0); // Добавляем состояние для хранения счета

    const handleAnswer = (index: number) => {
        setSelectedAnswer(index);
        setAnswerIndex(index)
    };

    const goNext = () => {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedAnswer(null); // Сброс выбора после перехода к следующему вопросу 
        // Проверяем правильность ответа
        const isCorrect = selectedQuestions[currentQuestionIndex].answers[answerIndex].isCorrect;
        if (isCorrect) {
            setScore(prevScore => prevScore + 1); // Увеличиваем счет, если ответ правильный
        }
    }


    return (
        <div>
            <QuizHeader
                selectedQuiz={selectedQuiz}
                name={name}
            />
            <QuizAnswers
                selectedQuestions={selectedQuestions}
                selectedAnswer={selectedAnswer}
                currentQuestionIndex={currentQuestionIndex}
                handleAnswer={handleAnswer}
                score={score}
                goNext={goNext}
            />
        </div>
    );
}

export default QuizPage;

