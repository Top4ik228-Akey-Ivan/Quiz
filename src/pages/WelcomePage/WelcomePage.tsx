import styles from './WelcomePage.module.css'

import reactLogo from '../../assets/logo.svg'

import QuizList from '../../components/quizList/QuizList'

const WelcomePage = () => {
    return (
        <div>
            <div className={styles.header}>
                <img className={styles.logoImg} src={reactLogo} alt="" />
                <div className={styles.headerText}>THE FRONTEND QUIZ</div>
            </div>
            <div className={styles.choiceText}>Choose quiz</div>
            <QuizList />
        </div>
    );
}

export default WelcomePage;