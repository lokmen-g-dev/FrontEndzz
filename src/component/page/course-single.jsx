import React, { Component, Fragment, useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

import PageHeaderTwo from "../layout/pageheader-2";
import Author from "../sidebar/author";
import Comment from "../sidebar/comment";
import CourseSideDetail from "../sidebar/course-detail";
import Respond from "../sidebar/respond";

const CourseSingle = () => {

    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [modules, setModules] = useState([]);
   const navigate=useNavigate();
   
    useEffect(() => {
        const fetchCourse = async () => {
            try {
              const response = await axios.get(`http://localhost:4000/courses/getCourses/${id}`);
              setCourse(response.data);
                 document.title = `Arzaak-${response.data.title}`;
              if (response.data.modules) {
                setModules(response.data.modules); 
                    }
            } catch (error) {
              console.error('Error fetching course:', error);
              navigate('/*')
            }
          };
      
          fetchCourse();
        }, [id]);
    const { title } = course;
    const { sousTitre } = course;
    const { description } = course;
    const { image } = course;
    const { infoSessionUrl } = course;
    const { price } = course;
    const { level } = course;
    const { categorys} = course;
    const { trainers} = course;

  const calculateTotalDuration = (lecons) => {
    let totalMinutes = 0;
    lecons.forEach((lecon) => {
      if (lecon.duration) {
        totalMinutes += parseInt(lecon.duration);
      }
    });
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes}`;
  };

  return (
    <Fragment>
      <PageHeaderTwo
        title={title}
        sousTitre={sousTitre}
        image={image}
        infoSessionUrl={infoSessionUrl}
        price={price}
        categorys={categorys}
        trainers={trainers}
        courseId={id}
      />
      <div className="course-single-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-part">
                <div className="course-item">
                  <div className="course-inner">
                    <div className="course-content">
                      <h3>À propos du cours</h3>
                      <p>
    {course.description && course.description.split('\n').map((block, index) => (
        <span key={index}>{block}<br /></span>
    ))}
</p>

                      <h4>Ce que vous apprendrez dans ce cours:</h4>
                      <ul className="lab-ul">
    {course.apprendreCours && course.apprendreCours.split('\n').map((block, index) => (
        <li key={index}><i className="icofont-tick-mark"></i>{block}</li>
    ))}
</ul>
                    </div>
                  </div>
                </div>
                <div className="course-video">
                  <div className="course-video-title">
                    <h4>Le contenu du cours</h4>
                  </div>
                  <div className="course-video-content">
                    <div className="accordion" id="accordionExample">
                      {modules.map((module, index) => (
                        <div className="accordion-item" key={index}>
                          <div className="accordion-header" id={`accordion${index}`}>
                            <button
                              className="d-flex flex-wrap justify-content-between"
                              data-bs-toggle="collapse"
                              data-bs-target={`#videolist${index}`}
                              aria-expanded="true"
                              aria-controls={`videolist${index}`}
                            >
                              <span>{`${index + 1}. ${module.title}`}</span>{" "}
                              <span>
                                {module.lecons
                                  ? `${
                                      module.lecons.length
                                    } lecons, ${calculateTotalDuration(
                                      module.lecons
                                    )}`
                                  : "No lecons"}
                              </span>
                            </button>
                          </div>
                          <div
                            id={`videolist${index}`}
                            className="accordion-collapse collapse show"
                            aria-labelledby={`accordion${index}`}
                            data-bs-parent="#accordionExample"
                          >
                            <ul className="lab-ul video-item-list">
                              {module.lecons &&
                                module.lecons
                                  .slice()
                                  .reverse()
                                  .map((lecon, leconIndex) => (
                                    <li
                                      className=" d-flex flex-wrap justify-content-between"
                                      key={leconIndex}
                                    >
                                      <div className="video-item-title">
                                        {`${index + 1}.${leconIndex + 1} ${lecon.title}`}
                                      </div>
                                      <div className="video-item-icon">
                                      {lecon.duration} minutes &nbsp;&nbsp;
                                        {lecon.visibility === "private" ? (
                                          <i className="icofont-lock"></i>
                                        ) : (
                                          <a
                                            href={lecon.videoUrl}
                                            className="popup"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                          >
                                            <i className="icofont-play-alt-2"></i>
                                          </a>
                                        )}
                                      </div>
                                    </li>
                                  ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Author trainers={trainers} />
                <Comment courseId={id} />
                <Respond courseId={id} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar-part">
                <CourseSideDetail
                  price={price}
                  level={level}
                  modules={modules}
                  courseId={id}
                />
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CourseSingle;
