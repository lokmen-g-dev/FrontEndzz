import React, { Fragment, useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import About from "../section/about";
import Achievement from "../section/achievement";
import Banner from "../section/banner";
import Blog from "../section/blog";
import Category from "../section/category-2"
import Course from "../section/course";
import Instructor from "../section/instructor";
import Sponsor from "../section/sponsor";
import Student from "../section/student";
import ClientsThree from "../section/clients-3";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500); 
    }, []);

    useEffect(() => {
        document.title = "Arzaak-Accueil";
    },[]);

    return (
        <Fragment> 
            <Banner />
            {isLoading ? (
                <Skeleton height={400} />
            ) : (
                <Sponsor />
            )}
            {isLoading ? (
                <Skeleton height={200} count={4} />
            ) : (
                <Category />
            )}
            {isLoading ? (
                <Skeleton height={200} count={3} />
            ) : (
                <Course />
            )}
            {isLoading ? (
                <Skeleton height={200} count={2} />
            ) : (
                <About />
            )}
            {isLoading ? (
                <Skeleton height={200} count={3} />
            ) : (
                <Instructor />
            )}
            {isLoading ? (
                <Skeleton height={200} count={3} />
            ) : (
                <Student />
            )}
            {isLoading ? (
                <Skeleton height={200} count={3} />
            ) : (
                <Blog />
            )}
            {isLoading ? (
                <Skeleton height={200} count={3} />
            ) : (
                <ClientsThree />
            )}
            {isLoading ? (
                <Skeleton height={200} count={3} />
            ) : (
                <Achievement />
            )}
        </Fragment>
    );
};

export default Home;
