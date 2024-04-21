import { useEffect, useState } from "react";
import axios from "axios";

const subTitle = "Catégories";
const title = "Découvrez nos catégories";

const CategoryTwo = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:4000/categorys/getCategorys');
        setCategoryList(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    };

    fetchCategories();
  }, []);

  const nextCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categoryList.length);
  };

  const prevCategory = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + categoryList.length) % categoryList.length);
  };

  return (
    <div className="category-section padding-tb section-bg style-2">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center">
            <div className="col-auto">
              <button className="btn btn-link orange" onClick={prevCategory}>&lt;</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-link orange" onClick={nextCategory}>&gt;</button>
            </div>
            <div className="col">
              <div className="category-list" id="categoryList">
                {categoryList.map((val, i) => (
                  <div key={i} className={`category-item ${currentIndex === i ? 'active' : ''}`}>
                    <div className="category-image-container">
                      <img className="category-image" src={`http://localhost:4000/uploads/category/${val.image}`} alt={val.name} />
                      <div className="category-title">{val.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTwo;

const styles = `
.category-section {overflow: hidden;}
.category-list {display: flex;overflow: hidden;padding: 10px 0;}
.category-list:hover { overflow-x: auto;}
.category-item {flex: 0 0 auto;width: 200px; scroll-snap-align: center;position: relative; margin-right: 10px;}
.category-item.active .category-image {transform: scale(1.1); }
.category-image-container {position: relative;overflow: hidden;border-radius: 10px;}
.category-image {width: 100%;height: 145px;display: block;border-radius: 10px;transition: transform 0.3s ease;}
.category-title {position: absolute;top: 10px;left: 10px;background-color: rgba(0, 0, 0, 0.7);color: #fff;
  padding: 5px 10px;border-radius: 5px;font-size: 14px;font-weight: bold;}
.btn-link {color: #007bff;cursor: pointer;background: none;border: none;outline: none;}
.btn-link.orange {color: orange;}
`;

const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
