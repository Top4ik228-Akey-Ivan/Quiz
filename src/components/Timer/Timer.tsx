import React from "react";
import styles from './Timer.module.css'

const Timer = () => {
    const [secondsElapsed, setSecondsElapsed] = React.useState<number>(0);

    React.useEffect(() => {
        const timerId = setInterval(() => {
            setSecondsElapsed(prev => prev + 1);
        }, 1000);

        return () => clearInterval(timerId); // Очистка интервала при размонтировании компонента
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${ minutes }:${ secs < 10 ? '0' : '' }${ secs }`;
    };

    return (
        <div className={styles.timer}>
            {formatTime(secondsElapsed)}
        </div>
    );
}

export default Timer;