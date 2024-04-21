import React, { useState, useContext } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
// import {useLocation } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import myContext from "../ContextUser/Context";
import styles from "./header.module.css";


const phoneNumber = "+216 20 472 727";
const address = "contact@arzaak.tn";


let socialList = [
    {
        iconName: 'icofont-facebook-messenger',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-vimeo',
        siteLink: '#',
    },
    {
        iconName: 'icofont-skype',
        siteLink: '#',
    },
    {
        iconName: 'icofont-rss-feed',
        siteLink: '#',
    },
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
	const [socialToggle, setSocialToggle] = useState(false);
	const [headerFiexd, setHeaderFiexd] = useState(false);

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			setHeaderFiexd(true);
		} else {
			setHeaderFiexd(false);
		}
	});
   
    
    const [bg,setBg]=useState("");
    const [clr,setClr]=useState("");
    const hadelStyle7=()=>{
    setBg('#f16126');
    setClr('white');
    }
     const hadelStyle7Reset=()=>{ 
        setBg('');
        setClr(''); 
    }




    //destructuring pour consommer le contexte de user connecté ou non pour le consommer:
 const { context, setContext } = useContext(myContext);
 const navigate=useNavigate();
    //

    //
  const handelDeconnect=()=>{
    console.log('déconnexion user');
    if (context.connectedUser.googleConnect) {
                window.open(`http://localhost:4000/logOut`, "_self");
              }
     else {
        setContext({
      connectedUser: {},
      loginRegister: true,
      response: true,
    });
        navigate('/login')
     }         
    localStorage.removeItem("Arzaaksession");
    
  }
    //

    return (
      <header
        className={`header-section ${
          headerFiexd ? "header-fixed fadeInUp" : ""
        }`}
      >
        <div className={`header-top ${socialToggle ? "open" : ""}`}>
          <div className="container">
            <div className="header-top-area">
              <ul className="lab-ul left">
                <li>
                  <i className="icofont-ui-call"></i> <span>{phoneNumber}</span>
                </li>
                <li>
                  <i className="icofont-email"></i> {address}
                </li>
              </ul>
              <ul className="lab-ul social-icons d-flex align-items-center">
                <li>
                  <p>Trouvez-nous sur : </p>
                </li>
                {socialList.map((val, i) => (
                  <li key={i}>
                    <a href={val.siteLink}>
                      <i className={val.iconName}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom" style={{ height: '90px' }}>
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/">
                  <img
                    src="assets/images/logo/001.png"
                    alt="logo"
                    width={"120px"}
                  />
                </Link>
              </div>
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>

                    <li>
                      <NavLink to="/" className={styles["nav-link"]}>
                        Accueil
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/course" className={styles["nav-link"]}>
                        Cours
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog" className={styles["nav-link"]}>
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/team" className={styles["nav-link"]}>
                      Session Privée
                      </NavLink>
                    </li>
                   
        
                    <li>
                      <NavLink
                        to="/contact"
                        className={`${styles["nav-link"]}`}
                      >
                        Contact
                      </NavLink>
                    </li>
                    {!context.response && (
                      <>
                        <SkeletonTheme borderRadius="0.5rem">
                          <Skeleton width={220} height={45} className="mt-2" />
                        </SkeletonTheme>
                      </>
                    )}
                    {context.loginRegister && context.response && (
                      <>
                        <li>
                          {" "}
                          <Link to="/login" className="login">
                            <i className="icofont-user"></i>{" "}
                            <span>Connexion</span>{" "}
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link to="/signup" className="signup">
                            <i className="icofont-users"></i>{" "}
                            <span>Inscription</span>{" "}
                          </Link>
                        </li>
                      </>
                    )}

                    {Object.keys(context.connectedUser).length !== 0 && (
                      <>
                        <li className="menu-item-has-children">
                          <a
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-bs-offset="0,0"
                            className={styles["nav-link"]}
                          >
                            <img
                              className="me-2 mb-1 rounded-circle"
                              alt=""
                              height={30}
                              width={30}
                              src={context.connectedUser.image}
                            ></img>
                            Bienvenue <span>{context.connectedUser.nom}</span>
                          </a>
                          <ul className="lab-ul dropdown-menu">
                            <li>
                              <NavLink to="/shop"> Mon compte </NavLink>{" "}
                            </li>
                            <li
                              onClick={handelDeconnect}
                              className="py-2"
                              style={{
                                cursor: "pointer",
                                color: `${clr}`,
                                backgroundColor: `${bg}`,
                              }}
                              onMouseEnter={hadelStyle7}
                              onMouseLeave={hadelStyle7Reset}
                            >
                              {" "}
                              <span className="ms-3">Déconnexion </span>
                            </li>
                          </ul>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div
                  className={`header-bar d-lg-none ${
                    menuToggle ? "active" : ""
                  }`}
                  onClick={() => setMenuToggle(!menuToggle)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div
                  className="ellepsis-bar d-lg-none"
                  onClick={() => setSocialToggle(!socialToggle)}
                >
                  <i className="icofont-info-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}
 
export default Header;