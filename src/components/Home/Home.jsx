import imgHome1 from '../../assets/images/home-1.png'
import imgHome2 from '../../assets/images/home-2.png'
import nenuphar from '../../assets/images/nenuphar-police.png'
import  { useState, useEffect } from 'react';
import './home.scss'



function Home() {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    setIsVisible(true);
  }, []); 
    return (
        <div className={`fade-in home-container ${isVisible ? 'show' : ''}`}>
            <div className='left-column'>
                <img src={nenuphar} alt="nenuphar-font"/>
                <a href="https://www.youtube.com/@nenuphar.musique" target='_blank'>
                    <button>LISTEN</button>     
                </a>
           
            </div>
            <div className='right-column'>
                <img className='home-1' src={imgHome1} alt="portrait artiste nénuphar"/>
                <img className='home-2' src={imgHome2} alt="portrait artiste nénuphar"/>
            </div>
        </div>
    )
}

export default Home