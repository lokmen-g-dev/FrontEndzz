
import CountUp from 'react-countup';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const subTitle = "COMMENCER AU SUCCÈS";
const title = "Atteignez vos objectifs avec Arzaak";


const achievementList = [
    {
        count: '30',
        desc: 'Catégories',
    },
    {
        count: '3084',
        desc: 'Cours',
    },
    {
        count: '330',
        desc: 'Certificats',
    },
    {
        count: '2300',
        desc: 'Formateurs',
    },
]

const achieveList = [
    {
        imgUrl: 'assets/images/achive/01.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Commencez à enseigner',
        desc: 'si vous êtes un centre de formation, un chef ou un artisan, c"est votre chance de booster votre carrière en dispensant vos cours en ligne via notre plateforme. Rejoignez-nous et partagez vos talents avec une communauté mondiale et  rentabilisez votre activité en générant des revenus à vie.',
        btnText: 'Devenez instructeur',
        siteLink: '/team',
    },
    {
        imgUrl: 'assets/images/achive/02.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Rejoignez notre cours',
        desc: 'Arzaak vous offre une variété de cours en ligne interactifs dans diverses disciplines artisanales et créatives. Nous vous garantissons une expérience d"apprentissage engageante, intéressante et interactives et des cours de haute qualité dispensés par des professionnels de renom.',
        btnText: 'Inscription gratuite',
        siteLink: '/signup',
    },
]


const Achievement = () => {
    const [categoriesCount, setCategoriesCount] = useState(0);
    const [coursesCount, setCoursesCount] = useState(0);
    const [trainersCount, setTrainersCount] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesResponse = await axios.get('http://localhost:4000/categorys/count');
                const coursesResponse = await axios.get('http://localhost:4000/courses/count');
                const trainersResponse = await axios.get('http://localhost:4000/trainer/count');

                setCategoriesCount(categoriesResponse.data.count);
                setCoursesCount(coursesResponse.data.count);
                setTrainersCount(trainersResponse.data.count);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="achievement-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="counter-part mb-4">
                        <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
                           
                                <div className="col">
                                    <div className="count-item">
                                        <div className="count-inner">
                                            <div className="count-content">
                                            <h2><span className="count">{categoriesCount}</span><span>+</span></h2>
                                            <p>Catégories</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                <div className="count-item">
                                    <div className="count-inner">
                                        <div className="count-content">
                                            <h2><span className="count">{coursesCount}</span><span>+</span></h2>
                                            <p>Cours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="count-item">
                                    <div className="count-inner">
                                        <div className="count-content">
                                        <h2><span className="count">{trainersCount}</span><span>+</span></h2>
                                            <p>Formateurs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="achieve-part">
                        <div className="row g-4 row-cols-1 row-cols-lg-2">
                            {achieveList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="achieve-item">
                                        <div className="achieve-inner">
                                            <div className="achieve-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="achieve-content">
                                                <h4>{val.title}</h4>
                                                <p>{val.desc}</p>
                                                <a href={val.siteLink} className="lab-btn"><span>{val.btnText}</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Achievement;