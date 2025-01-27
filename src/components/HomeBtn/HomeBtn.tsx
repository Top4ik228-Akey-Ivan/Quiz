import { Link } from 'react-router-dom'
import styles from './HomeBtn.module.css'

const HomeBtn = () => {
    return (
        <Link style={{textDecoration: 'none'}} to='/home'>
            <button className={styles.homeBtn}>Home</button>
        </Link>
    );
}

export default HomeBtn;