import React from 'react';
import { IQuize } from '../../consts/quizNames';
import styles from './QuizHeader.module.css'

interface QuizHeaderProps {
    selectedQuiz?: IQuize;
    name?: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({selectedQuiz, name}) => {
    return (
        <div className={styles.header}>
            {selectedQuiz && selectedQuiz.logo && (
                <img className={styles.logoImg} src={selectedQuiz.logo} alt={`${name} quiz`} />
            )}
            <div className={styles.headerText}>THE {name} QUIZ</div>
        </div>
    );
}

export default QuizHeader;