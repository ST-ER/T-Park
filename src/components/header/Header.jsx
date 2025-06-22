import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import { useNavigate } from 'react-router-dom';
// import AboutUs from ''
// import Activities from ''
// import Quests from ''
// import Locations from ''


function Header() {
    // const navigate = useNavigate();
    // Вставить onClick={navigate('/')} в каждую кнопку, когда будут соответствующие страницы
    return(
        <section className={styles.header}>
            <img src={logo} alt="logo" />
            <div className={styles.navigationBar}>
                <button>О Нас</button>
                <button>Активности</button>
                <button>Квесты</button>
                <button>Локации</button>
                <button className={styles.reservation}>Забронировать</button>
            </div>
        </section>
    )
    
}

export default Header