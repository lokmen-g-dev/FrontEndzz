import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Rating from "../sidebar/rating";

const subTitle = "Cours";
const title = "Choisissez un cours pour commencer";
const btnText = "Parcourir toutes les cours";

const courseList = [
    {
      
      
      
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
      
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/01.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'William Smith',
        btnText: 'Read More',
    },
    {
      
      
      
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
     
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/02.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Lora Smith',
        btnText: 'Read More',
    },
    {
     
    
     
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
      
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/03.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Robot Smith',
        btnText: 'Read More',
    },
    {
      
     
      
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
       
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/04.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Zinat Zaara',
        btnText: 'Read More',
    },
    {
       
      
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
     
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/05.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Rajib Raj',
        btnText: 'Read More',
    },
    {
      
       
        cate: 'Adobe XD',
        reviewCount: '03 reviews',
     
        totalLeson: '18x Lesson',
        schdule: 'Online Class',
        authorImgUrl: 'assets/images/course/author/06.jpg',
        authorImgAlt: 'course author rajibraj91 rajibraj',
        authorName: 'Angel Mili',
        btnText: 'Read More',
    },
]

const Course = () => {
    const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/courses/getCourses"
        );
        setCourseList(response.data);
      
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };


    fetchCourses();
   
  }, []);
  const lastThreeCourses = courseList.slice(-3);
    return (
        <div className="course-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
                    {lastThreeCourses.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="course-item">
                                    <div className="course-inner">
                                        <div className="course-thumb">
                                        <img src={`http://localhost:4000/uploads/courses/${val.image}`} 
                                        style={{ width: "450px", height: "230px" }}/>

                                        </div>
                                        <div className="course-content">
                                            <div className="course-price">{val.price} dt</div>
                                            <div className="course-category">
                            {val.categorys.map((category, index) => (
                              <div className="course-cate" key={index}>
                                <a href="#">{category.name}</a>
                              </div>
                            ))}
                                                <div className="course-reiew">
                                                    <Rating />
                                                    <span className="ratting-count"> {val.reviewCount}</span>
                                                </div>
                                            </div>
                                            <Link to={`/course/${val._id}`}>
                            <h4>{val.title}</h4>
                          </Link>
                          <div className="course-details">
                            <div className="couse-count">
                              <i className="icofont-video-alt"></i>{" "}
                              {val.modules.reduce(
                                (total, module) =>
                                  total + module.lecons.length,
                                0
                              )}{" "}
                              leçons
                            </div>                                                <div className="couse-topic">
                              <i className="icofont-signal"></i>Cours en ligne
                            </div>
                                            </div>
                                            <div className="course-footer">
                            {val.trainers.map((trainer, index) => (
                              <div key={index} className="course-author">
                                {trainer.image ? (
                                  <img
                                    src={`http://localhost:4000/uploads/trainer/${trainer.image}`}
                                    style={{ width: "40px", height: "40px" }}
                                    alt={trainer.name}
                                  />
                                ) : (
                                  <img
                                    src="http://localhost:4000/uploads/profiles/ProfileFemale.png"
                                    style={{ width: "30px", height: "30px" }}
                                    alt="Profile"
                                  />
                                )}
                                <Link to="/team-single" className="ca-name">
                                  {trainer.name}
                                </Link>
                              </div>
                            ))}
                                               <div className="course-btn">
                              <Link
                                to={`/course/${val._id}`}
                                className="lab-btn-text"
                              >
                                En savoir plus{" "}
                                <i className="icofont-external-link"></i>
                              </Link>   </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
            <Link to="/course" className="lab-btn"><span>{btnText}</span></Link>
          </div>
                </div>
               
            </div>
          
        </div>
    );
}
 
export default Course;