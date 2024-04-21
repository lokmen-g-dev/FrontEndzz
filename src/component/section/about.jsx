


const subTitle = "À propos de notre plateforme";
const title = "Arzaak une expérience d'apprentissage enrichissante  et interactive";
const desc = "Que vous soyez professionnel ou amateur ,Arzaak vous offre la possibilité de monter en compétences et d'apprendre des techniques dans une large variété de disciplines artisanales et créatives adaptés à tous les niveaux de savoir faire.";



const aboutList = [
    {
        imgUrl: 'assets/images/about/icon/01.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Formateurs qualifiés',
        desc: 'Apprenez auprès des professionnels du métier et bénéficiez d"un suivi à vie.',
    },
    {
        imgUrl: 'assets/images/about/icon/02.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Certificats',
        desc: 'Obtenez des certifications de formation accélérée et commencez un carrière professionnel.',
    },
    {
        imgUrl: 'assets/images/about/icon/03.jpg',
        imgAlt: 'about icon rajibraj91 rajibraj',
        title: 'Cours en ligne',
        desc: 'Accédez à des cours en ligne et des sessions privées accessibles , abordables et apprenez selon votre propre rythme.',
    },
]


const About = () => {
    return (
        <div className="about-section">
            <div className="container">
                <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
                    <div className="col">
                        <div className="about-right padding-tb">
                            <div className="section-header">
                                <span className="subtitle">{subTitle}</span>
                                <h2 className="title">{title}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className="section-wrapper">
                                <ul className="lab-ul">
                                    {aboutList.map((val, i) => (
                                        <li key={i}>
                                            <div className="sr-left">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="sr-right">
                                                <h5>{val.title}</h5>
                                                <p>{val.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-left">
                            <div className="about-thumb">
                                <img src="assets/images/about/01.png" alt="about" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default About;