


const subTitle = "ÉDUCATION EN LIGNE";
const title = <h2 className="title"><span className="d-lg-block">votre monde </span> de savoir-faire <span className="d-lg-block">artisanal</span></h2>;
const desc = (
    <>
     <p className="my-3 mt-5 fs-5 d-block lab-btn bg-light text-secondary"> Apprenez à votre rythme </p>
     <p className="my-3 fs-5 d-block lab-btn bg-light text-secondary"> Apprenez auprès des meilleurs professionnels</p>
     <p className="my-3 fs-5 d-block lab-btn bg-light text-secondary"> Des cours interactifs</p>
     <p className="my-3 fs-5 d-block lab-btn bg-light text-secondary"> Obtenez un certificat après chaque cours</p>
  </> 
  );
  


// const catagoryList = [
//     {
//         name: 'Figma',
//         link: '#',
//     },
//     {
//         name: 'Adobe XD',
//         link: '#',
//     },
//     {
//         name: 'illustration',
//         link: '#',
//     },
//     {
//         name: 'Photoshop',
//         link: '#',
//     },
// ]


const shapeList = [
    {
        name: '16M Students Happy',
        link: '#',
        className: 'ccl-shape shape-1',
    },
    {
        name: '130K+ Total Courses',
        link: '#',
        className: 'ccl-shape shape-2',
    },
    {
        name: '89% Successful Students',
        link: '#',
        className: 'ccl-shape shape-3',
    },
    {
        name: '23M+ Learners',
        link: '#',
        className: 'ccl-shape shape-4',
    },
    {
        name: '36+ Languages',
        link: '#',
        className: 'ccl-shape shape-5',
    },
]

const Banner = () => {
    return (
        <section className="banner-section">
            <div className="container">
                <div className="section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xxl-5 col-xl-6 col-lg-10">
                            <div className="banner-content">
                                <h6 className="subtitle text-uppercase fw-medium">{subTitle}</h6>
                                {title}
                                <div className="desc mt-2">{desc}</div>
                                <form action="/">
                                    <div className="banner-icon">
                                        <i className="icofont-search"></i>
                                    </div>
                                    <input type="text" placeholder="mots-clés de votre cours" />
                                    <button type="submit">Rechercher</button>
                                </form>
                             <br></br>
                            </div>
                        </div>
                     
                        <div className="col-xxl-7 col-xl-6">
                            <div className="banner-thumb">
                            <br></br><br></br><br></br>
                            <img src="assets/images/banner/001.png" alt="img" style={{ width: '400px', height: '400px', marginLeft: '110px', borderRadius:'100%' }} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="all-shapes"></div>
            <div className="cbs-content-list d-none">
                <ul className="lab-ul">
                    {shapeList.map((val, i) => (
                        <li className={val.className} key={i}><a href={val.link}>{val.name}</a></li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
 
export default Banner;