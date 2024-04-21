import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import Footer from "../layout/footer";
// import Header from "../layout/header";
import axios from 'axios';
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';
import countryNames from 'react-phone-number-input/locale/en';
import 'react-phone-number-input/style.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Spinner } from 'react-bootstrap';
const title = "Inscription";
const socialTitle = "Continuer avec Google";
const btnText = "S'inscrire";



const SignupPage = () => {
  useEffect(()=>{
    document.title="Arzaak-Inscription"
},[]);
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      Mobile: '',
      pays: 'Tunisia'
    });
  
   
  
   
    
   
    const [showPassword, setShowPassword] = useState(false); // État pour afficher/cacher le mot de passe
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // État pour afficher/cacher le mot de passe de confirmation
   
  //Initialiser l'état de phone number et région de l'utilisateur à l'aide de package react-phone-number installer ci-dessus :

  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('TN'); 
  

  const handlePhoneInputChange = (value) => {
    setPhoneNumber(value);
    setFormData(prev=>{
      return {...prev,Mobile:value}
    });
    setAlertPhone(false);
 

 
  };

  const handleCountryChange = (value) => {
 
 
    const pays=(countryNames[value]);
  
  
    setCountry(value);


    setFormData(prev=>{
      return {...prev,pays:pays}
    });

 
 
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
      if (name==="password"||name==="confirmPassword") {
        setAlertPassword(false);
      }
     
    };
  const navigate = useNavigate();

  const [alertPhone,setAlertPhone]=useState(false);
  const [alertPassword,setAlertPassword]=useState(false);

  const [showSpinner1,setShowSpinner1]=useState(false);
  const [showSpinner2,setShowSpinner2]=useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      let qualityData=true;
      if (formData.password !== formData.confirmPassword) {
        setAlertPassword(true);
        qualityData=false;
      }
      if (!phoneNumber||!isValidPhoneNumber(phoneNumber)) {
        console.log("Le numéro de téléphone est invalide ou vide");
        qualityData=false;
       
          setAlertPhone(true);
        
      }
  if (qualityData) {
    try {
        setShowSpinner1(true);
      const User={...formData,showNotifications:isCheked}
      const response = await axios.post('http://localhost:4000/users/auth/register', User);
      console.log(response.data);
      toast.success(`${response.data.message}`);
      const email=formData.email;
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        Mobile: '',
        pays: ''
      });
      setShowSpinner1(false);
    
       navigate(`/login?email=${email}`);
       
    } catch (error) {
      console.error(error);
   
      toast.error(`${error.response.data.message}`);
      setShowSpinner1(false);
      setFormData(prev=>{
        return {...prev,email:''}
      });
    }
  }
      
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };
  
   
  
    //google login:

  const [style,setStyle]=useState({opacity:'1',cursor:'pointer'});

  const loginGoogle=()=>{
    setShowSpinner2(true);
    setStyle({opacity:'0.7',cursor:'not-allowed'});
    window.open("http://localhost:4000/auth/google/callback","_self");
  }
// j'acceepte les notif
const [isCheked,setIsCheked]=useState(false);
const handelCheck=()=>{
    setIsCheked(prev=>{
        return !prev
    })
}
    return (
    <Fragment>
     
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
      <br></br><br></br><br></br>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Prénom"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
     
              <div className={alertPassword?"form-group password-input mb-0":"form-group password-input"}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mot de Passe"
                  className="password-input"
                  required
                />
                <span className="toggle-password" onClick={togglePasswordVisibility}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </span>
                
              </div>
              {alertPassword&&(
                <span className='my-0' style={{fontSize:'10px',fontWeight:'bold',color:'#B80000'}}>Vérifiez la confirmation de votre mot de passe</span>
              )}
              <div className="form-group password-input">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirmer Mot de Passe"
                  className="password-input"
                  required
                />
                <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </span>
              </div>
               <PhoneInput
        
        placeholder="Entrez votre numéro de téléphone"
       
        value={phoneNumber}
         onChange={handlePhoneInputChange}
        defaultCountry="TN" // Tunisie comme pays par défaut
        country={country} // Prop country pour obtenir le pays sélectionné
         onCountryChange={handleCountryChange} // Gestionnaire d'événements pour le changement de pays
         
       />
       {alertPhone&&(
        <Form.Text style={{fontSize:'10px',fontWeight:'bold',color:'#B80000'}}>
        Veuiller saisir un numéro de téléphone valide
        </Form.Text>
       )}
       
              <div className="form-group mt-3 mb-0">
                                
                                <div className="checkgroup">
                                    <input type="checkbox" className="text-dark" name="notifications" id="notifications" 
                                    checked={isCheked} onChange={handelCheck}/>
                                    <label htmlFor="notifications" style={{fontSize:'12px',textDecoration:'underline'}}>J’accepte les termes et conditions et la politique des notifications</label>
                                </div>
                                </div>
              <div className="form-group">
                <button className="lab-btn" type="submit" disabled={showSpinner1} style={{opacity:`${alertPassword||alertPhone||showSpinner1?"0.5":"1"}`,cursor:`${alertPassword||alertPhone?"not-allowed":""}`}}>
                  <span>{btnText} &nbsp;
                  {showSpinner1&&(
                    <Spinner size='sm' animation='border'></Spinner>
                  )}
                  </span>
                </button>
              </div>
              
            </form>
            <div className="account-bottom">
              <span className="d-block cate">Êtes-vous membre ? <Link to="/login">Se connecter</Link></span>
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
   
   
    </Fragment>
 );
};

export default SignupPage;
