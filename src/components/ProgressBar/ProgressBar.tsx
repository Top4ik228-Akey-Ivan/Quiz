import styles from './ProgressBar.module.css'
import { IQuestion } from '../../consts/quizNames';
import React from 'react';

interface ProgressBarProps{
    hasQuestions: boolean;
    selectedQuestions: IQuestion[];
    currentQuestionIndex: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
    hasQuestions, 
    currentQuestionIndex, 
    selectedQuestions
}) => {

    const progressPercentage = hasQuestions ? (currentQuestionIndex / selectedQuestions.length) * 100 : 100;

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{ width: `${progressPercentage}%`}} />
            <div 
                className={styles.progressBarText}
            >
                {currentQuestionIndex + 1}/{selectedQuestions.length}
            </div>
        </div>
    );
}

export default ProgressBar;