import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const subTitle = "Catégories";
const title = "Catégorie populaire pour apprendre";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:4000/categorys/getCategorys');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

   
        const categoriesWithCoursesCount = await Promise.all(
          data.map(async (category) => {
            const courseResponse = await fetch(`http://localhost:4000/categorys/countCourses?categoryId=${category._id}`);
            if (!courseResponse.ok) {
              throw new Error('Failed to fetch course count');
            }
            const courseCountData = await courseResponse.json();
            const updatedCategory = { ...category, courseCount: courseCountData.count };
            return updatedCategory;
          })
        );

        setCategoryList(categoriesWithCoursesCount);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    };

    fetchCategories();
  }, []); 

  return (
    <div className="category-section padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-2 justify-content-center row-cols-xl-6 row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((val, i) => (
              <div className="col" key={i}>
                <div className="category-item text-center">
                  <div className="category-inner">
                    <div className="category-thumb">
                      <img src={`http://localhost:4000/uploads/category/${val.image}`} alt={val.name} style={{ width: '200px', height: '100px' }} />
                    </div>
                    <div className="category-content">
                      <Link to={`/course/${val._id}`}>
                        <span>{val.name}</span>
                      </Link>
                      <h6>{val.courseCount} Cours</h6>
                     
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

export default Category;
