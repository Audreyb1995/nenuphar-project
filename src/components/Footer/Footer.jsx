import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faSoundcloud, faTiktok, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {

    return (
        <div className="footer-container">
            <div className='footer-top'>
                <div className="icon-social-footer">
                    <h2>Suivez-moi !</h2>
                    <div className='social-container'>
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
                <div className='contact'>
                    <h2>Contactez-moi !</h2>
                    <div className='contact-block phone'>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                        <p>06.26.68.43.76</p>
                    </div>
                    <div className='contact-block  email'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <p>nenuphar.musique@gmail.com</p>
                    </div>
                </div>
            </div>
                
            <div className='credits'>Developped by <a href="https://www.audrey.grandgirard.net/" target='_blank'>Audrey BAUFAYS</a></div>
        </div>
    )
}

export default Footer