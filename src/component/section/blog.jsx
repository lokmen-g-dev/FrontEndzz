import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const subTitle = "NOS ARTICLES DE BLOG";
const title = "Plus d'articles de notre plateforme";

const Blog = () => {
    const [blogList, setBlogList] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
          try {
            const response = await axios.get('http://localhost:4000/blog/blogs');
            console.log(response.data);
            setBlogList(response.data);
          } catch (error) {
            console.error('Erreur lors de la récupération des blogs :', error);
          }
        };
    
        fetchBlogs();
      }, []);
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const lastThreeBlogs = blogList.slice(-3);
    return (
        <div className="blog-section padding-tb section-bg">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
                    {lastThreeBlogs && lastThreeBlogs.map((val, i) => (
                            <div className="col" key={i}>
                                <div className="post-item">
                                    <div className="post-inner">
                                        <div className="post-thumb">
                                        <Link to={`/blog/${val._id}`}><img  src={`http://localhost:4000/uploads/blog/${val.image}`} alt={`${val.imgAlt}`} /></Link>
                                        </div>
                                        <div className="post-content">
                                        <Link to={`/blog/${val._id}`}><h4>{val.titre}</h4></Link>
                                            <div className="meta-post">
                                                <ul className="lab-ul">
                                                <li><i className={'icofont-calendar'}></i>{new Intl.DateTimeFormat("fr-FR", options).format(
                      new Date( val.dateCreation)
                    )}</li>                                                </ul>
                                            </div>
                                            <p>{val.sousTitre}</p>
                                        </div>
                                        <div className="post-footer">
                                            <div className="pf-left">
                                            <Link to={`/blog/${val._id}`} className="lab-btn-text"> En savoir plus{" "} <i className="icofont-external-link"></i></Link>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Blog;