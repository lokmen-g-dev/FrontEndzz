import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "../sidebar/rating";
import axios from "axios"; // Importer axios pour effectuer des requêtes HTTP

const subTitle = "Formateurs";
const title = "Cours dispensés par des professionnels de renom";

const Instructor = () => {
    const [instructorList, setInstructorList] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);
    useEffect(() => {
        const fetchInstructors = async () => {
            try {
                const response = await axios.get("http://localhost:4000/trainer/getTrainers");
                setInstructorList(response.data);
            } catch (error) {
                console.error("Error fetching instructors:", error);
            }
        };

        fetchInstructors();
    }, []);
    useEffect(() => {
        let total = 0;
        instructorList.forEach((instructor) => {
            total += instructor.courses.length;
        });
        setTotalCourses(total);
    }, [instructorList]);
    const lastThreeInstructor = instructorList.slice(-4);
    return (
        <div className="instructor-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {lastThreeInstructor.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="instructor-item">
                                    <div className="instructor-inner">
                                        <div className="instructor-thumb">
                                            <img src={`http://localhost:4000/uploads/trainer/${val.image}`} alt={val.imgAlt} style={{ height: '150px' , width: '150px' }} />
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
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center footer-btn">
                        <p>Vous voulez rentabiliser votre activité, gagner un revenu durable et toucher une audience mondiale?<Link to="/team">Devenez instructeur</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructor;
