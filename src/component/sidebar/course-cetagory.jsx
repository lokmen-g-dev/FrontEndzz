import React, { useState, useEffect } from "react";
import axios from "axios";

const title = "Catégories de cours";

const CourseSideCetagory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:4000/categorys/getCategorys");
                const data = response.data; 
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

                setCategories(categoriesWithCoursesCount);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="course-side-cetagory">
            <div className="csc-title">
                <h5 className="mb-0">{title}</h5>
            </div>
            <div className="csc-content">
                <div className="csdc-lists">
                    <ul className="lab-ul">
                        {categories.map((category, index) => (
                            <li key={index}>
                                <div className="csdc-left">
                                    <a href={`#`}>{category.name}</a>
                                </div>
                                <div className="csdc-right">{category.courseCount}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CourseSideCetagory;
