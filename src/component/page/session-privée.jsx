import { Fragment } from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
import Rating from "../sidebar/rating";

const conSubTitle = "Session Privée";
const conTitle = "Réservez Votre Session Privée.";
const btnText = "Envoyer";

const SessionPriveePage = () => {
    const [teamList, setTeamList] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);
    useEffect(() => {
        const fetchInstructors = async () => {
            try {
                const response = await axios.get("http://localhost:4000/trainer/getTrainers");
                setTeamList(response.data);
            } catch (error) {
                console.error("Error fetching team:", error);
            }
        };

        fetchInstructors();
    }, []);
    useEffect(() => {
        let total = 0;
        teamList.forEach((instructor) => {
            total += instructor.courses.length;
        });
        setTotalCourses(total);
    }, [teamList]);
    return (
        <Fragment>
          
          <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
            <div className="instructor-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {teamList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="instructor-item">
                                        <div className="instructor-inner">
                                            <div className="instructor-thumb">
                                            <img src={`http://localhost:4000/uploads/trainer/${val.image}`} alt={val.imgAlt} style={{ height: '150px' , width: '150px' }}/>
                                            </div>
                                            <div className="instructor-content">
                                            <Link to="/team-single"><h4>{val.name}</h4></Link>
                                            <p>{val.formation}</p>
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="instructor-footer">
                                            <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                            <li><i className="icofont-book-alt"></i> {val.courses.length} cours</li>
                                                <li> {val.prixHeure} dt/Heure</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{conSubTitle}</span>
                        <h2 className="title">{conTitle}</h2>
                    </div>
                    <div className="section-wrapper">
                    <form className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Votre Nom *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Votre Prénom *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Votre Email *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="Votre Téléphone *"
                                />
                            </div>
                           
                            <div className="form-group w-100">
                                <textarea 
                                    rows="8" 
                                    type="text"
                                    placeholder="Votre Message"
                                ></textarea>
                            </div>
                            <div className="form-group w-100 text-center">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        
        </Fragment>
    );
}
 
export default SessionPriveePage;