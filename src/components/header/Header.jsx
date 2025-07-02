import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <section className={styles.header}>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            
            <div className={styles.navigationBar}>
                <Link className={styles.link} to='/about_us'>О Нас</Link>
                <Link className={styles.link} to='/activities'>Активности</Link>
                <Link className={styles.link} to='/quests'>Квесты</Link>
                <Link className={styles.link} to='/locations'>Локации</Link>
                <Link className={styles.reservation} to='/reservation'>Забронировать</Link>
            </div>
        </section>
    )
    
}

export default Header