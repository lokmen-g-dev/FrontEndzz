
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";


const subTitle = "Session Privée";
const title = "Réservez Votre Session Privée";
const btnText = "En Savoir plus";

const studentList = [
    {
       
       
        name: 'Session Privée',
     
        desc: 'Arzaak vous donne une chance pour vous de vous réserver pour une session de formation individuelle en ligne avec le formateur de votre choix. Avec à cette formation, vous pratiquer vos compétences artisanale techniques en temps réel et recevoir des retours personnalisés et des corrections de votre formateur.',
        desc2: 'Cette session interactif , vous donnera la possibilité de poser des questions  spécifiques , de demander un feedback ou une assistance et de recevoir des conseils techniques selon votre besoin .Vous bénéficierez d’un suivi professionnel et d’un accompagnement sur mesure pour vous aider à atteindre vos objectifs.',

    },
   
]


const Student = () => {
    return (
        <div className="student-feedbak-section padding-tb shape-img">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row justify-content-center row-cols-lg-2 row-cols-1">
                        <div className="col">
                            <div className="sf-left">
                                <div className="sfl-thumb">
                                    <img src="assets/images/feedback/01.jpg" alt="student feedback" />
                                    <a href="https://www.youtube.com/embed/MU3qrgR2Kkc" className="video-button popup" target="_blank"><i className="icofont-ui-play"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {studentList.map((val, i) => (
                                <div className="stu-feed-item" key={i}>
                                    <div className="stu-feed-inner">
                                        <div className="stu-feed-top">
                                            <div className="sft-left">
                                                <div className="sftl-thumb">
                                                      </div>
                                                <div className="sftl-content">
                                                    <Link to="/team-single"><h6>{val.name}</h6></Link>
                                                    <span>{val.degi}</span>
                                                    
                                                </div>
                                            </div>
                                            <div className="sft-right">
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="stu-feed-bottom">
                                            <p>{val.desc}</p>
                                            <p>{val.desc2}</p>
                                        </div>
                                        <div className="text-center mt-5">
            <Link to="/session" className="lab-btn"><span>{btnText}</span></Link>
            <br></br>
          </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Student;