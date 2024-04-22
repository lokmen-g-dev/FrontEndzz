import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const title = "Nos Articles De Blog";

const PopularPost = () => {
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
       
        hour12: false,
      };
      const lastThreeBlogs = blogList.slice(-4);
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h5 className="title">{title}</h5>
            </div>
            <ul className="widget-wrapper">
            {lastThreeBlogs && lastThreeBlogs.map((val, i) => (
                    <li className="d-flex flex-wrap justify-content-between" key={i}>
                        <div className="post-thumb">
                        <Link to={`/blog/${val._id}`}><img  src={`http://localhost:4000/uploads/blog/${val.image}`} alt={`${val.imgAlt}`} /></Link>
                        </div>
                        <div className="post-content">
                        <Link to={`/blog/${val._id}`}><h6>{val.titre}</h6></Link>
                            <p>{new Intl.DateTimeFormat("fr-FR", options).format(
                      new Date( val.dateCreation)
                    )}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default PopularPost;