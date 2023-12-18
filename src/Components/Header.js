import styles from './Styles/Header.module.css'
import logo from './Images/netflix-logo.png'
import profile from './Images/profile.png'
import { FaSearch,FaGift,FaBell } from 'react-icons/fa'
function Header(){
    return(
        <div className={styles.Nav}>
            <nav className={styles.item1}>
                <a href="/"><img src={logo} className={styles.Img}/></a>
                <span>Inicio</span>
                <span>Series</span>
                <span>Filmes</span>
                <span>Series</span>
            </nav>
            <nav className={styles.item2}>
                <a href="/pesquisar"><span><FaSearch color='white'/></span></a>
                <span><FaGift/></span>
                <span><FaBell/></span>
                <span><img src={profile} className={styles.profile}/></span>
            </nav>
        </div>
    )
}

export default Header