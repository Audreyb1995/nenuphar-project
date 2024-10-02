import './header.scss'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faYoutube, faSoundcloud, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <header>
            <div>
            <nav>
                <p className='home'>HOME</p>
                <a href="#about">ABOUT ME</a>
                <a href="#music">MUSIC</a>
            </nav>
            <div className="icon-social-header">
                <a href='https://www.youtube.com/@nenuphar.musique' target='_blank'>
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
                <a href='https://soundcloud.com/user-928818550' target='_blank'>
                    <FontAwesomeIcon icon={faSoundcloud}/>
                </a>
                <a href='https://www.tiktok.com/@itsnenuphar.musique' target='_blank'>
                    <FontAwesomeIcon icon={faTiktok}/>
                </a>
                <a href='https://www.instagram.com/nenuphar.musique/' target='_blank'>
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </div>
            </div>
        </header>
    )
}

export default Header