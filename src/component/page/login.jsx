import React, { Fragment, useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; 
// import Footer from "../layout/footer";
// import Header from "../layout/header";
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import myContext from "../ContextUser/Context"
const title = "Login";
const socialTitle = "Continuer avec Google";
const btnText = "Se connecter";


const LoginPage = () => {
    useEffect(()=>{
        document.title="Arzaak-Connexion"
    },[])

 const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userEmail = queryParams.get('email')||"";
    const [email, setEmail] = useState(userEmail);
    
    const [password, setPassword] = useState('');
     const [showPassword, setShowPassword] = useState(false); 
     const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const navigate = useNavigate();
   
     const [showSpinner1,setShowSpinner1]=useState(false);
  const [showSpinner2,setShowSpinner2]=useState(false);

  //importation de contexte user connected pour rendre le navbar dynamique:
  const { setContext } = useContext(myContext);
  //
    const handleSubmit = async (event) => {
        event.preventDefault();
        setShowSpinner1(true);
        try {
            const response = await axios.post('http://localhost:4000/users/auth/login', {
                email,
                password
            });
             setShowSpinner1(false);
            toast.success(`${response.data.message}`);
            localStorage.setItem("Arzaaksession", JSON.stringify(response.data.token));
             setContext({
             connectedUser: response.data.user,
              loginRegister: false,
             response: true,
              });
            console.log('Login successful', response.data);
                 navigate("/course");
              
           
        } catch (error) {
            toast.error(`${error.response.data.message}`);
            console.error('Login error', error.response.data);
            setShowSpinner1(false);
            setPassword('');
            setEmail('');
        }
    };
 //google login:

 const [style,setStyle]=useState({opacity:'1',cursor:'pointer'});

 const loginGoogle=()=>{
    setShowSpinner2(true);
   setStyle({opacity:'0.7',cursor:'not-allowed'});
   window.open("http://localhost:4000/auth/google/callback","_self");
 
 }
    return (
        <Fragment>
            {/* <Header /> */}
             <style>
        {`
          .password-input {
            position: relative;
          }
          
          .password-input input {
            padding-right: 30px; /* Ajoute de l'espace pour l'icône */
          }
          
          .password-input .toggle-password {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            color: #666;
          }
          
        `}
      </style>
            <br></br><br></br><br></br><br></br>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3 className="title">{title}</h3>
                        <form className="account-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="name"
                                    placeholder="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className="form-group password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Mot de Passe"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
                            </div>
                            <div className="form-group">
                                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                                    <div className="checkgroup">
                                       
                                    </div>
                                    <Link to="/forgetpass">Mot de passe oublié?</Link>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <button className="d-block lab-btn" type="submit" disabled={showSpinner1} style={{opacity:`${showSpinner1?"0.5":"1"}`}}><span>{btnText}
                                 &nbsp;&nbsp;
                  {showSpinner1&&(
                    <Spinner size='sm' animation='border'></Spinner>
                  )}</span></button>
                            </div>
                        </form>
                        <div className="account-bottom">
                            <span className="d-block cate pt-10">Vous n'avez pas de compte?  <Link to="/signup">S'inscrire</Link></span>
                            <span className="or"><span>ou</span></span>
                           
                            <ul className="lab-ul social-icons justify-content-center">
                                 <button className="d-block lab-btn" 
                                 style={{backgroundColor:"#363648",color:'white', 
                                 opacity:`${style.opacity}`, cursor:`${style.cursor}`}}
                                 onClick={loginGoogle} disabled={showSpinner2}>
                                  <img alt="google" height={25} width={25} 
                                  src="assets/images/logo/google.png"  className="mx-2"></img> {socialTitle} &nbsp;
                  {showSpinner2&&(
                    <Spinner size='sm' animation='border'></Spinner>
                  )}
                                  </button>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </Fragment>
    );
}
 
export default LoginPage;
