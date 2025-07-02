import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import map from '../../assets/img/map.svg'
import phone from '../../assets/img/phone.svg'
import mail from '../../assets/img/mail.svg'
import telegram from '../../assets/img/telegram.svg'
import vk from '../../assets/img/vk.svg'
import youtube from '../../assets/img/youtube.svg'

function Footer(){
    return(
        <section className={styles.footer}>
            <div className={styles.upper_part}>
                <div>
                    <h2 className={styles.hs}>T-Park</h2>
                    <p className={styles.footert_p}>Приключения рядом с природой. Адреналин, отдых и активный образ жизни!</p>
                </div>
                <div>
                    <h2 className={styles.hs}>Навигация</h2>
                    <ul>
                        <li><Link className={styles.footer_link} to="/">Главная</Link></li>
                        <li><Link className={styles.footer_link} to="/activities">Активности</Link></li>
                        <li><Link className={styles.footer_link} to="/quests">Квесты</Link></li>
                        <li><Link className={styles.footer_link} to="/locations">Локации</Link></li>
                        <li><Link className={styles.footer_link} to="/reservation">Бронирование</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className={styles.hs}>Контакты</h2>
                    <ul>
                        <li>
                            <img className={styles.footer_img} src={map} alt="map" />
                            <p className={styles.footer_p}>Россия, Калужская область, Жуковский район</p>
                            
                        </li>
                        <li>
                            <img className={styles.footer_img} src={phone} alt="phone" />
                            <p className={styles.footer_p}>+8-(995)-305-64-61</p>
                            
                        </li>
                        <li>
                            <img className={styles.footer_img} src={mail} alt="mail" />
                            <p className={styles.footer_p}>info@tpark.ru</p>
                            
                        </li>
                        <div className={styles.social_media}>
                            <img className={styles.footer_img} src={telegram} alt="telegram" />
                            <img className={styles.footer_img} src={vk} alt="vk" />
                            <img className={styles.footer_img} src={youtube} alt="youtube" />
                        </div>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom_part}>
                <p className={styles.footerb_p}>© 2025 T-Park. Все права Защищены.</p>
                <Link className={styles.admin} to='/admin_login'>Вход для админов</Link>
            </div>
        </section>
    )
}

export default Footer