import React, { Component, Fragment, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import PopularPost from "../sidebar/popular-post";

import Search from "../sidebar/search";
import Tags from "../sidebar/tags";
const socialList = [
  {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
  },
  {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
  },
];
const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const [prevArticleId, setPrevArticleId] = useState(null);
  const [nextArticleId, setNextArticleId] = useState(null);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blog/blog/${id}`
        );
        setBlog(response.data);
        console.log(response.data);

        const { prevId, nextId } = response.data;
        setPrevArticleId(prevId);
        setNextArticleId(nextId);
      } catch (error) {
        console.error("Error fetching Blog:", error);
      }
    };
    fetchBlog();
  }, [id, navigate]);
  useEffect(() => {
    document.title = "Arzaak-Détail Blog";
  }, []);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour12: false,
  };
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-thumb">
                            <img
                              src={`http://localhost:4000/uploads/blog/${blog.blog?.image}`}
                              alt={`${blog.imgAlt}`}
                              className="w-100"
                            />
                          </div>
                          <div className="post-content">
                            <h2>{blog.blog && blog.blog.titre}</h2>

                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li>
                                  <a href="#">
                                    <i className="icofont-calendar"></i>
                                    {blog.blog && blog.blog.dateCreation}
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p>{blog.sousTitre}</p>
                            <blockquote>
                              <p>
                                Dynamically recaptiualize distributed
                                technologies is wherease turnkey channels and
                                onotonectally provide access to resource
                                leveling expertise vias worldwide deliverables
                                uolisticly extend aserser are diverse vortals.{" "}
                              </p>
                              <cite>
                                <a href="#">...Melissa Hunter</a>
                              </cite>
                            </blockquote>

                            <p>
                              {blog.blog &&
                                blog.blog.contenu
                                  .split("\n")
                                  .map((block, index) => (
                                    <span key={index}>
                                      {block}
                                      <br />
                                    </span>
                                  ))}
                            </p>

                            <div className="tags-section">
                              <a href="#">Partager cet article : </a>
                              <ul className="lab-ul social-icons">
                                {socialList.map((val, i) => (
                                  <li key={i}>
                                    <a
                                      href={val.link}
                                      className={val.className}
                                    >
                                      <i className={val.iconName}></i>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="navigations-part">
                        {prevArticleId !== null && (
                          <div className="left">
                            <a href={`/blog/${prevArticleId}`} className="prev">
                              <i className="icofont-double-left"></i>Article
                              précédent
                            </a>
                          </div>
                        )}
                        {nextArticleId !== null && (
                          <div className="right">
                            <a href={`/blog/${nextArticleId}`} className="next">
                              Article suivant
                              <i className="icofont-double-right"></i>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search />

                <PopularPost />

                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogSingle;
