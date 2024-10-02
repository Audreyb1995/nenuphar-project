import './aboutMe.scss'
import photo1 from "../../assets/images/Marvincolor-2.jpg"
import photo2 from "../../assets/images/Marvincolor-3.jpg"
import photo3 from "../../assets/images/Marvincolor-4.jpg"
import photo4 from "../../assets/images/Marvincolor-5.jpg"
import { motion } from 'framer-motion'

function About() {
    const images = [
        { src: photo1, alt: "Image 1", initial: { x: '-20vw' }, whileInView: { x: 5 }  },
        { src: photo2, alt: "Image 2", initial: { x: '10vw' }, whileInView: { x: 0 }, className: "hidden"  },
        { src: photo3, alt: "Image 3", initial: { x: '-20vw' }, whileInView: { x: 5 } },
        { src: photo4, alt: "Image 4", initial: { x: '10vw' }, whileInView: { x: 0 }, className: "hidden"  },
    ];
    return (
        <div className='about-container'>
            <div className='text-about'>
                <h1>ABOUT ME</h1>
                <p>
                Artiste musicien solo, Nénuphar propose des sons enregistrés pour la plupart en autodidacte en home studio depuis une dizaine d’années. Sexualité, déprime, voyages et célébration de l’instant présent sont les sujets principaux des musiques.
                En studios au 6mic, en sorties à Marseille, la volonté de l’artiste est de capter l'ambiance musicale actuelle et ainsi créer ses compositions en français, en anglais, grâce à la MAO, à la voix, au clavier et à la guitare.
                Une direction vers l'électro-pop-folk-acoustique, enrichie constamment par ses répétitions au 6MIC, la salle de musique actuelle Aixoise.
                </p>
                <br/>
                <p>
                <span>SES PROJETS : </span>
                <br/>
                Créer un EP de 4 ou 5 titres, se produire dans la Région Sud et le reste de la France;
                Rencontrer le public et travailler son set dans les studios du 6MIC.
                </p>
                <br/>
                <p>
                Entre les Beegees et Asaf Avidan, Philipe Katerine et Christine and the Queens, Nénuphar se projète dans une pop variété-électro...
                </p>
                <br/>
                <p>
                <span>PARCOURS ET EN COURS...</span>
                <br/>
                Pré-casting de The Voice, avant 1ère partie Négresses Vertes, concert au 6mic à Aix-en-Provence
                </p>
            </div>
            <div className='img-about'>
            {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                         className={`about-image ${image.className}`}
                        initial={{ opacity: 0, ...image.initial }}
                        whileInView={{ opacity: 1, ...image.whileInView }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }} // Animer une seule fois
                    />
                ))}
            </div>
        </div>
    )
}

export default About