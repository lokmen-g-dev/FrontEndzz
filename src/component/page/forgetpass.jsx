import {  Fragment ,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { Spinner,Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { FiEye, FiEyeOff } from 'react-icons/fi'; 
// import Footer from "../layout/footer";
// import Header from "../layout/header";
// import PageHeader from "../layout/pageheader";



const title = "Mot de passe oublié ?";

const btnText = "Envoyer";


const ForgetPass = () => {
     useEffect(()=>{
    document.title="Arzaak-Mot de passe oublié?"
},[]);
const [email,setEmail]=useState('');
const handelEmailChange=(e)=>{
    setEmail(e.target.value);
}

const navigate=useNavigate();
const [showSpinner1,setShowSpinner1]=useState(false);

//Modal:
const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    //
    setCode('');
    setEmail('');
    setShowCode(true);
    setShowNewPassword(false);
    //
}
  const handleShow = () => setShow(true);
//
const handelSubmitEmail=(e)=>{
e.preventDefault();
setShowSpinner1(true);
axios.post('http://localhost:4000/users/forgetPassword/sendEmail',{email})
.then(response=>{
    console.log(response.data);
    setShowSpinner1(false);
    handleShow();
})
.catch(error=>{
 console.log(error.response.data.msg);   
 toast.error(`${error.response.data.msg}`);
 setShowSpinner1(false);
 //cas de adresse email non valide:
 if (error.response.status===400) {
  setEmail('');
   navigate('/signup');
 }
})
}
const ch = email;
const t = ch.split("@");
const formatEmail = t[1];
const emailCrypté =
  ch[0] +
  ch[1] +
  ch[2] +
  "*" +
  "*" +
  "*" +
  "*" +
     "*" +
      "*" +
     "*" +
     t[0][t[0].length-2]+
     t[0][t[0].length-1]+
  "@" +
  formatEmail;

  //
 const [code,setCode]=useState('');
 
 const handelCodeChange=(e)=>{
    setCode(e.target.value);
 }
 const [showSpinner2,setShowSpinner2]=useState(false);
 //states pour le cas d'une verification valide:
 const [showCode,setShowCode]=useState(true);
 const [showNewPassword,setShowNewPassword]=useState(false);
 const [showSpinner3,setShowSpinner3]=useState(false);
 //
 const handelSubmitVerificationCode=(e)=>{
   e.preventDefault();
setShowSpinner2(true);
axios.post('http://localhost:4000/users/forgetPassword/verificationCode',{email,code})
.then(response=>{
    console.log(response.data);
    setShowSpinner2(false);
    setShowCode(false);
    setShowSpinner3(true);
    setTimeout(() => {
     setShowSpinner3(false);
     setShowNewPassword(true); 
    }, 2500);
  
})
.catch(error=>{
 console.log(error.response.data.msg);   
 setShowSpinner2(false);
  toast.error(error.response.data.msg);
  //cas de code non valide:
  if (error.response.status===401) {
  setEmail('');
   setCode('');
   handleClose();
 }
})
 
 }

  //


//

  const [alertPassword,setAlertPassword]=useState(false);
   const [showPassword, setShowPassword] = useState(false); // État pour afficher/cacher le mot de passe
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    const toggleConfirmPasswordVisibility = () => {
      setShowConfirmPassword(!showConfirmPassword);
    };


  //reset password:

  const [newPassword,setNewPassword]=useState('');
  const [confirmNewPassword,setConfirmNewPassword]=useState('');
  const handelPasswordChange=(e)=>{
    setNewPassword(e.target.value);
    setAlertPassword(false);
  }
  const handelConfirmPasswordChange=(e)=>{
    setConfirmNewPassword(e.target.value);
     setAlertPassword(false);
  }

  const [showSpinner4,setShowSpinner4]=useState(false);
const handelSubmitNewPassword=(e)=>{
    e.preventDefault();
    let qualityPassword=true;
    if (newPassword!==confirmNewPassword) {
       qualityPassword=false;
       setAlertPassword(true) ;
    }
    if (qualityPassword) {
        setShowSpinner4(true);
        axios.post('http://localhost:4000/users/forgetPassword/updatePassword',{newPassword,email,code})
        .then(response=>{
        setShowSpinner4(false);
        console.log(response.data);
        toast.success(response.data.msg);
        handleClose();
        navigate(`/login?email=${email}`);
        })
        .catch(error=>{
            console.log(error);
         setShowSpinner4(false);
         toast.error(error.response.data.msg);
          if (error.response.status===402) {
           setConfirmNewPassword('');
           setNewPassword('');
             }
        })
    }
}
  //
    return (
      <Fragment>
        {/* <Header />
            <PageHeader title={'Forget Password'} curPage={'Forget Password'} /> */}
        <br></br>
        <br></br>
        <br></br> <br></br>
        <div className="login-section padding-tb section-bg">
          <div className="container">
            <div className="account-wrapper">
              <h3 className="title mb-4">{title}</h3>
              <form className="account-form" onSubmit={handelSubmitEmail}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Entrer votre Email.."
                    value={email}
                    onChange={handelEmailChange}
                    required
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    className="d-block lab-btn"
                    type="submit"
                    disabled={showSpinner1}
                    style={{ opacity: `${showSpinner1 ? "0.5" : "1"}` }}
                  >
                    <span>
                      {btnText}&nbsp;&nbsp;{" "}
                      {showSpinner1 && (
                        <Spinner size="sm" animation="border"></Spinner>
                      )}
                    </span>
                  </button>
                </div>
              </form>
              <div className="account-bottom">
                <span className="d-block cate pt-10">
                  Vous n'avez pas de compte? <Link to="/login">Login</Link>
                </span>
                <span className="or">
                  <span>ou</span>
                </span>

                <span
                  className="d-block cate pt-10"
                  style={{ backgroundColor: "white", color: "#747264" }}
                >
                  <Link to="/signup"> S'inscrire</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Arzaak-Mot de passe oublié</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showCode && (
              <>
                En raison de sécurité , nous avons envoyé une code de
                vérification à votre boite email :
                <span
                  className="fw-bold mx-1 my-2 lab-btn bg-white text-dark"
                  style={{ border: "1px solid black" }}
                >
                  {emailCrypté}
                </span>
                <form
                  className="account-form"
                  onSubmit={handelSubmitVerificationCode}
                >
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      name="code"
                      placeholder="Entrer le code de vérification ..."
                      value={code}
                      onChange={handelCodeChange}
                      required
                    />
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="d-block lab-btn"
                      type="submit"
                      disabled={showSpinner2}
                      style={{ opacity: `${showSpinner2 ? "0.5" : "1"}` }}
                    >
                      <span>
                        {btnText} &nbsp;&nbsp;{" "}
                        {showSpinner2 && (
                          <Spinner size="sm" animation="border"></Spinner>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </>
            )}
            {showSpinner3 && (
              <>
                <div className="text-center">
                  <p className="text-center mt-2" style={{ color: "#26c976" }}>
                    Authentification a été validé...
                  </p>
                  <ClipLoader
                    size={200}
                    color="#26c976"
                    cssOverride={{
                      marginTop: "40px",
                      marginBottom: "40px",
                      display: "inline-block",
                    }}
                  ></ClipLoader>
                </div>
              </>
            )}
            {showNewPassword && (
              <>
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
                <span className="fw-bold my-2 text-secondary ms-2">
                  Réinitialisation de mot de passe:
                </span>
                <form
                  className="account-form mt-4"
                  onSubmit={handelSubmitNewPassword}
                >
                  <div
                    className={
                      alertPassword
                        ? "form-group password-input mb-0"
                        : "form-group password-input"
                    }
                  >
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={newPassword}
                      onChange={handelPasswordChange}
                      placeholder="Nouveau mot de Passe ..."
                      className="password-input"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>
                  {alertPassword && (
                    <span
                      className="my-0 mx-1"
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        color: "#B80000",
                      }}
                    >
                      Vérifiez la confirmation de votre mot de passe
                    </span>
                  )}
                  <div className="form-group password-input">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={confirmNewPassword}
                      onChange={handelConfirmPasswordChange}
                      placeholder="Confirmer Votre nouveau mot de Passe ..."
                      className="password-input"
                      required
                    />
                    <span
                      className="toggle-password"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </span>
                  </div>
                  <div className="form-group text-center">
                    <button
                      className="d-block lab-btn"
                      type="submit"
                      disabled={showSpinner4}
                      style={{
                        opacity: `${
                          alertPassword || showSpinner4 ? "0.5" : "1"
                        }`,
                        cursor: `${alertPassword ? "not-allowed" : ""}`,
                      }}
                    >
                      <span>
                        {btnText} &nbsp;&nbsp;{" "}
                        {showSpinner4 && (
                          <Spinner size="sm" animation="border"></Spinner>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </Modal.Body>
        </Modal>
      </Fragment>
    );
}
 
export default ForgetPass;