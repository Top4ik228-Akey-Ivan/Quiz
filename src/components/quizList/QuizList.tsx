import { Quizes } from "../../consts/quizNames";
import QuizButton from "../quizButton/QuizButton";

import { Link } from "react-router-dom";

import styles from './QuizList.module.css'

const QuizList = () => {
    return (
        <div className={styles.quizList}>
            {Quizes.map(quiz =>
                <Link style={{textDecoration: 'none'}} key={quiz.name} to={`/${quiz.name}`}>
                    <QuizButton
                        name={quiz.name}
                        logo={quiz.logo}
                    />
                </Link>
            )}
        </div>
    );
}

export default QuizList;