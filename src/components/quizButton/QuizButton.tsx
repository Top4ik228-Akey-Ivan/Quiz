import React from 'react';
import styles from './QuizButton.module.css'

interface QuizButtonProps {
    name: string;
    logo: string;
}

const QuizButton: React.FC<QuizButtonProps> = ({name, logo}) => {
    return (
        <div className={[styles.quiz, styles[name]].join(' ')}>
            <img className={styles.quizLogo} src={logo} alt="" />
            <div className={styles.quizText}>{name}</div>
        </div>
    );
}

export default QuizButton;