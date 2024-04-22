
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const newsTitle = "Voulez-vous que nous vous envoyions un e-mail concernant les offres spéciales et les mises à jour ?";
const siteTitle = "A propos";
const useTitle = "Informations";
const socialTitle = "Liens utiles";
const supportTitle = "Contacter nous";


const siteList = [
    {
        text: 'Apprenez à votre rythme, où que vous soyez, avec l"aide de professionnels du métier et donnez vie à votre créativité en perfectionnant votre savoir-faire artisanal.',
        link: '#',
    },
   
]

const useList = [
  
    {
        text: 'Partenaires',
        link: '#',
    },
    {
        text: 'Contact',
        link: '/contact',
    },
  
    {
        text: 'Support',
        link: '#',
    },
    {
        text: 'Réclamations',
        link: '#',
    },
    {
        text: 'Conditions d"utilisation',
        link: '#',
    },
    {
        text: 'Politique de confidentialité',
        link: '#',
    },
]

const socialList = [
    {
        text: 'Nos Cours',
        link: '/course',
    },
    {
        text: 'Nos Evenements',
        link: '#',
    },
    {
        text: 'Nos Blogs',
        link: '/blog',
    },
    {
        text: 'Devenir Formateur',
        link: '/team',
    },
    {
        text: 'Session Privée',
        link: '/session',
    },
]

const supportList = [
    {
        text: ' +216 20 472 727',
        link: '#',
    },
    {
        text: '+216 20 472 727',
        link: '#',
    },
    {
        text: 'contact@arzaak.tn',
        link: '#',
    },
   
   
]
const socialList1 = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'rss',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'rss',
    }, 
    {
        link: '#',
        iconName: 'icofont-whatsapp',
        className: 'rss',
    }, 
]


const Footer = () => {
    return (
        <div className="news-footer-wrap">
            <div className="fs-shape">
                <img src="assets/images/shape-img/03.png" alt="fst" className="fst-1" />
                <img src="assets/images/shape-img/04.png" alt="fst" className="fst-2" />
            </div>
            
            <div className="news-letter">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="news-title">
                            <h3>{newsTitle}</h3>
                        </div>
                        <div className="news-form">
                            <form action="/">
                                <div className="nf-list">
                                    <input type="email" name="email" placeholder="Entrer votre Email" />
                                    <input type="submit" name="submit" value="S'inscrire" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer>
                <div className="footer-top padding-tb pt-0">
                    <div className="container">
                        <div className="row g-4 row-cols-xl-4 row-cols-md-2 row-cols-1 justify-content-center">
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{siteTitle}</h4>
                                            </div>
                                            <div className="content">
                                            <ul className="lab-ul">
                                                    {siteList.map((val, i) => (
                                                        <li key={i}>
                                                           <p style={{ color: 'white', fontSize: '15px' }}>{val.text}</p>
<br></br>
                                                            <img  src="assets/images/logo/001.png" alt="Logo" style={{ height: '75px' }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{useTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {useList.map((val, i) => (
                                                        <li key={i} ><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{socialTitle}</h4>
                                            </div>
                                            <div className="content">
                                                <ul className="lab-ul">
                                                    {socialList.map((val, i) => (
                                                        <li key={i}><a href={val.link}>{val.text}</a></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="footer-item">
                                    <div className="footer-inner">
                                        <div className="footer-content">
                                            <div className="title">
                                                <h4>{supportTitle}</h4>
                                            </div>
                                            <div className="content">
                                            <ul className="lab-ul">
                                                {supportList.map((val, i) => (
                                                    <li key={i}>
                                                        {val.text.includes('@') ? (
                                                            <>
                                                                <FontAwesomeIcon icon={faEnvelope}  style={{ color: 'white' }}/> &nbsp;&nbsp;
                                                                <a href={`mailto:${val.text}`}>{val.text}</a>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <FontAwesomeIcon icon={faPhone}  style={{ color: 'white' }}/> &nbsp;&nbsp;
                                                                <a href={`tel:${val.text.replace(/\s+/g, '')}`}>{val.text}</a>
                                                            </>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul></ul>
                                            <ul className="lab-ul social-icons">
                                                                {socialList1.map((val, i) => (
                                                                   <li key={i} style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%' }}>

                                                                        <a href={val.link} className={val.className}><i className={val.iconName}></i></a>
                                                                    </li>
                                                                ))}
                                                            </ul> 
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2" >
                    <div className="container">
                        <div className="section-wrapper">
                            <p>&copy; 2024 <Link to="/">Arzaak</Link> </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
 
export default Footer;