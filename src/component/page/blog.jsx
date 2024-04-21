import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../sidebar/pagination";
import axios from "axios";

const BlogPage = () => {
  // Déplacez useState et useEffect à l'intérieur du composant BlogPage
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
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
            {blogList && blogList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="post-item">
                    <div className="post-inner">
                      <div className="post-thumb">
                        <Link to="/blog-single"><img  src={`http://localhost:4000/uploads/blog/${val.image}`} alt={`${val.imgAlt}`} /></Link>
                      </div>
                      <div className="post-content">
                        <Link to="/blog-single"><h4>{val.titre}</h4></Link>
                        <div className="meta-post">
                        <ul className="lab-ul">
 
    <li><i className={'icofont-calendar'}></i>{val.dateCreation}</li>
 
</ul>

                        </div>
                        <p>{val.contenu}</p>
                      </div>
                      <div className="post-footer">
                        <div className="pf-left">
                          <Link to="/blog-single" className="lab-btn-text"> En savoir plus{" "} <i className="icofont-external-link"></i></Link>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
  
    </Fragment>
  );
}

export default BlogPage;
