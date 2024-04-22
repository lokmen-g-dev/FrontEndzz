import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GroupSelect from "../sidebar/group-select";
import Pagination from "../sidebar/pagination";
import Rating from "../sidebar/rating";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CoursePage = () => {
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

  
  
  useEffect(() => {
    document.title = "Arzaak-Cours";
  }, []);
  
  
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
      <GroupSelect />
      <div className="course-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="course-showing-part">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="course-showing-part-left">
                  {loading ? (
                    <SkeletonTheme borderRadius="0.5rem">
                      <Skeleton width={200} height={25} className="mt-2" />
                    </SkeletonTheme>
                  ) : (
                    <p>Affichage de {courseList.length} cours</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1">
              {loading &&
                Array.from({ length: 6 }).map((el, i) => {
                  return (
                    <div className="col" key={i}>
                      <div className="course-item course-item-static">
                        <div className="course-inner">
                          <div className="course-thumb">
                            <SkeletonTheme borderRadius="0.5rem">
                              <Skeleton
                                width={300}
                                height={300}
                                className="mt-2"
                              />
                            </SkeletonTheme>
                          </div>
                          <div className="course-content">
                            <div className="course-price">
                              <SkeletonTheme borderRadius="0.5rem">
                                <Skeleton
                                  width={30}
                                  height={10}
                                  className="mt-2"
                                />
                              </SkeletonTheme>
                            </div>
                            <div className="course-category">
                              <SkeletonTheme borderRadius="0.5rem">
                                <Skeleton
                                  width={230}
                                  height={30}
                                  count={3}
                                  className="mt-2"
                                />
                              </SkeletonTheme>
                              <SkeletonTheme borderRadius="0.5rem">
                                <Skeleton
                                  width={150}
                                  height={18}
                                  className="mt-4"
                                />
                              </SkeletonTheme>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {!loading &&
                courseList.map((val) => (
                  <div className="col" key={val._id}>
                    <div className="course-item course-item-static">
                      <div className="course-inner">
                        <div className="course-thumb">
                          <img
                            src={`http://localhost:4000/uploads/courses/${val.image}`}
                            alt={val.imgAlt}
                            style={{ width: "450px", height: "230px" }}
                          />
                        </div>
                        <div className="course-content">
                          <div className="course-price">{val.price} dt</div>
                          <div className="course-category">
                            {val.categorys.map((category, index) => (
                              <div className="course-cate" key={index}>
                                <a href="#">{category.name}</a>
                              </div>
                            ))}
                            <div className="course-review">
                             
                            </div>
                          </div>
                          <Link to={`/course/${val._id}`}>
                            <h4>{val.title}</h4>
                          </Link>
                          <div className="course-details">
                            <div className="course-count">
                              <i className="icofont-video-alt"></i>{" "}
                              {val.modules.reduce(
                                (total, module) =>
                                  total + module.lecons.length,
                                0
                              )}{" "}
                              leçons
                            </div>
                            <div className="course-topic">
                              <i className="icofont-signal"></i>Cours en ligne
                            </div>
                          </div>
                          <div className="course-footer">
                            {val.trainers.map((trainer, index) => (
                              <div key={index} className="course-author">
                                {trainer.image ? (
                                  <img
                                    src={`http://localhost:4000/uploads/trainer/${trainer.image}`}
                                    style={{ width: "40px", height: "40px", borderRadius: "100%" }}
                                    alt={trainer.name}
                                  />
                                ) : (
                                  <img
                                    src="http://localhost:4000/uploads/profiles/ProfileFemale.png"
                                    style={{ width: "40px", height: "40px" }}
                                    alt="Profile"
                                  />
                                )}
                                <Link to="/team-single" className="ca-name" style={{ fontSize: "15px" }}>
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
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {!loading && <Pagination />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursePage;
