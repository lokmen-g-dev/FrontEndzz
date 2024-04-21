import { Fragment } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/footer";
import Header from "../layout/header";
import PageHeader from "../layout/pageheader";
import Rating from "../sidebar/rating";

const conSubTitle = "Get in touch with Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";
const instructorList = [
    {
        imgUrl: 'assets/images/instructor/01.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Emilee Logan',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
    {
        imgUrl: 'assets/images/instructor/02.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Donald Logan',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
    {
        imgUrl: 'assets/images/instructor/03.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Oliver Porter',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
    {
        imgUrl: 'assets/images/instructor/04.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Nahla Jones',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
    {
        imgUrl: 'assets/images/instructor/05.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Tomi Hensley',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
    {
        imgUrl: 'assets/images/instructor/06.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Foley Patrik',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
    {
        imgUrl: 'assets/images/instructor/07.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Lily Forster',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
    {
        imgUrl: 'assets/images/instructor/08.jpg',
        imgAlt: 'instructor rajibraj91 rajibraj',
        name: 'Alex Itzel',
        degi: 'Master of Education Degree',
        courseCount: '08 courses',
        studentAnroll: '30 dt/heure',
    },
]

const achieveList = [
    {
        imgUrl: 'assets/images/achive/01.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'Start Teaching Today',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Become A Instructor',
        siteLink: '#',
    },
    {
        imgUrl: 'assets/images/achive/02.png',
        imgAlt: 'achive thumb rajibraj91 rajibraj',
        title: 'If You Join Our Course',
        desc: 'Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica',
        btnText: 'Register For Free',
        siteLink: '#',
    },
]



const TeamPage = () => {
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
            <div className="instructor-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                            {instructorList.map((val, i) => (
                                <div className="col" key={i}>
                                    <div className="instructor-item">
                                        <div className="instructor-inner">
                                            <div className="instructor-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                            </div>
                                            <div className="instructor-content">
                                                <Link to="/team-single"><h4>{val.name}</h4></Link>
                                                <p>{val.degi}</p>
                                                <Rating />
                                            </div>
                                        </div>
                                        <div className="instructor-footer">
                                            <ul className="lab-ul d-flex flex-wrap justify-content-between align-items-center">
                                                <li><i className="icofont-book-alt"></i> {val.courseCount}</li>
                                                <li> {val.studentAnroll}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{conSubTitle}</span>
                        <h2 className="title">{conTitle}</h2>
                    </div>
                    <div className="section-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your Email *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="number"
                                    placeholder="Mobile Number *"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Your Subject *"
                                />
                            </div>
                            <div className="form-group w-100">
                                <textarea 
                                    rows="8" 
                                    type="text"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="form-group w-100 text-center">
                                <button className="lab-btn"><span>{btnText}</span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                    </div>
                </div>
            </div>
        
        </Fragment>
    );
}
 
export default TeamPage;