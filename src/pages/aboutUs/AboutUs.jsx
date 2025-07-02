import styles from './AboutUs.module.css'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import hotel from '../../assets/img/hotel.svg'
import fork from '../../assets/img/fork.svg'
import gonc from '../../assets/img/gonc.svg'
import sauna from '../../assets/img/sauna.svg'
import horse from '../../assets/img/horse.svg'
import fish from '../../assets/img/fish.svg'
import camp from '../../assets/img/camp.svg'
import boat from '../../assets/img/boat.svg'


function AboutUs(){
    const infrastructure = [
        {id: 1, img: hotel, text: ["Отель с коттеджами",<br/>,"в скандинавском стиле"]},
        {id: 2, img: fork, text: ["Ресторан и банкетный зал"]},
        {id: 3, img: gonc, text: ["Гончарная мастерская"]},
        {id: 4, img: sauna, text: ["Баня"]},
        {id: 5, img: horse, text: ["Конюшня"]},
        {id: 6, img: fish, text: ["Рыбалка на родниках"]},
        {id: 7, img: camp, text: ["Детский лагерь",<br/>,'"Цивилизация"']},
        {id: 8, img: boat, text: ["Лодочная станция"]},
    ];
    return(
        <section className={styles.aboutus}>
            <Header />

            <div className={styles.philosophy}>
                <h2 className={styles.hs}>Философия</h2>
                <p className={styles.philosophyP}>
                    Красивое место, интересные люди, запоминающиеся приключение — вот формула ожидаемой реальности.
                </p>
                <p className={styles.philosophyP}>
                    Мы устаем от сутолоки городов, информационных потоков и обыденности. Поэтому так ценим возможность пребывания в лесу, около реки, в иных ритмах и смыслах. Это то самое состояние, которое в
                    англоязычном мире называют <strong>outdoor</strong>, во французской традиции — <strong>en plein air</strong>, а у нас просто и понятно — <strong>на природе</strong>.
                </p>
                <p className={styles.philosophyP}>
                    Мы редко задумываемся о причинах событий и возможных изменениях. О своих действиях, отношениях, внутренних мотивах. Именно поэтому так ценен тренинг — как пространство безопасного опыта,
                    коллективных переживаний и осмысленного развития.
                </p>
                <p className={styles.philosophyP}>
                    А сочетание природы и тренинга — это вообще бомба!
                </p>
                <p className={styles.philosophyP}>
                   Так родилась философия:
                    <ul>
                        <li>T-park (тренинг-парк)</li>
                        <li>T-camp (тренинговый лагерь)</li>
                        <li>T-club (клубный формат тренинга)</li>
                        <li>T-raid (тренинг-рейды)</li>
                    </ul> 
                </p>
                <p className={styles.philosophyP}>
                    Приключение и развитие в одном событии. Сочетание отдыха на природе и прокачки собственных навыков — в индивидуальном, семейном или командном формате.
                </p>
                <p className={styles.philosophyP}>
                    <strong>Правила безопасности парка</strong>: Безопасность посетителей — наш приоритет. Мы строго соблюдаем правила поведения в парке, используем современное оборудование и обучаем персонал.
                </p>
            </div>

            <div className={styles.founder}>
                <h2 className={styles.hs}>Основатель: Дмитрий Сергеев</h2>
                <p>
                    Он — человек, который придумал и основал Т-Парк..
                </p>
                <ul>
                    <li>Социальный технолог. Профессиональный модератор. Тренер по организационному развитию. Провел более 1000 тренингов. Основатель Национальной молодежной школы тренеров.</li>
                    <li>Изобретатель более 50 известных социальных технологий «Проектный робот», «Сократовская олимпиада», мыследеятельностная игра «Яма» и др.</li>
                    <li>Инструктор по туризму. Участник и руководитель около 100 категорийных походов.</li>
                    <li>Педагог. Создатель двух общероссийских и 12 региональных детских организаций. Провел более 200 детских лагерей в России, Болгарии и Франции. Более 1500 клубных воспитанников.</li>
                    <li>Игротехник. Разработчик концепции приключенческого лагеря «Цивилизация». Автор лесных квестов в Т-парке.</li>
                    <li>Автор нового экстремального вида спорта «Фрироуп». Создатель национальной федерации.</li>
                    <li>Эксперт. Основатель авторской социотехнологической школы.</li>
                    <li>Философ. Автор теории реальности, философии позитивного поколения, концепции смысла жизни и базовых национальных ценностей.</li>
                    <li>Писатель. Автор «Мифологии от Психеи».</li>
                </ul>
            </div>

            <div className={styles.infrastructure}>
                <h2 className={styles.hs}>Инфраструктура</h2>
                <p>В непосредственной близости от Т-Парка расположены:</p>
                <div className={styles.firstFlex}>
                    {infrastructure.slice(0,3).map((item) => (
                        <div
                            key={item.id}
                            className={styles.tile}
                        >
                            <img src={item.img} alt={item.img} className={styles.icons}/>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.secondFlex}>
                    {infrastructure.slice(3,6).map((item) => (
                        <div
                            key={item.id}
                            className={styles.tile}
                        >
                            <img src={item.img} alt={item.img} className={styles.icons}/>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.thirdFlex}>
                    {infrastructure.slice(6).map((item) => (
                        <div
                            key={item.id}
                            className={styles.tile}
                        >
                            <img src={item.img} alt={item.img} className={styles.icons}/>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default AboutUs