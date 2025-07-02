import styles from './Main.module.css'
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'

function Main(){
    return(
        <section>
            <Header />
            <Footer />
        </section>
    )
}

export default Main