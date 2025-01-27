import React from "react";
import styles from './Result.module.css'

interface ResultProps {
    score: number;
}

const Result: React.FC<ResultProps> = ({score}) => {
    return (
        <div 
            className={styles.result}
        >
            Congratulations, you answered {score} questions correctly
        </div>
    );
}
 
export default Result;