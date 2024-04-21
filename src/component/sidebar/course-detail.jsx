import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import axios from "axios";

const excenge = "Offre d'une durée limitée";
const paymentTitle = "Paiement sécurisé :";
const shareTitle = "Partagez ce cours :";
const btnText = "Acheter Ce Cours";
const btnText2 = "valider";
const socialList = [
  {
    siteLink: "#",
    iconName: "icofont-linkedin",
    className: "twitter",
  },
  {
    siteLink: "#",
    iconName: "icofont-facebook",
    className: "vimeo",
  },
 
];

const CourseSideDetail = ({ price, level, modules, courseId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnClicked, setBtnClicked] = useState(false);

  const resetLocalStorage = () => {
    localStorage.removeItem("disabledCourseIds");
  };

  useEffect(() => {
    const disabledCourseIds = JSON.parse(localStorage.getItem("disabledCourseIds")) || [];
    if (disabledCourseIds.includes(courseId)) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [courseId]);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPayment) {
      toast.error("Veuillez choisir un mode de paiement.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/paiement/addPaiement", {
        method: selectedPayment,
        price: price,
        userId: "660dc41c71dff68d55fa0255", 
        courseId: courseId, 
      });

      setBtnClicked(true);

      const disabledCourseIds = JSON.parse(localStorage.getItem("disabledCourseIds")) || [];
      if (!disabledCourseIds.includes(courseId)) {
        localStorage.setItem("disabledCourseIds", JSON.stringify([...disabledCourseIds, courseId]));
      }

      togglePopup();
      toast.success("Votre demande a été envoyée avec succès.");
    } catch (error) {
      console.error("Erreur lors de l'ajout du paiement :", error.message);
      toast.error("Erreur lors de l'ajout du paiement.");
    }
  };

  const totalModules = modules.length;
  let totalLecons = 0;
  modules.forEach((module) => {
    totalLecons += module.lecons.length;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/courses/getCourses");
        if (response.data.length === 0) {
          resetLocalStorage();
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div className="course-side-detail">
        <div className="course-enroll">
          <button onClick={togglePopup} className={`lab-btn ${btnDisabled ? 'disabled' : ''}`} disabled={btnDisabled}><span>{btnText}</span></button>

          {showPopup && (
            <div className="popup-dialog">
              <div className="dialog-content">
                <br />
                <p><strong>Choisir le mode de paiement</strong></p>
                <form onSubmit={handleSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="radio"
                            name="payment"
                            value="Espèces"
                            checked={selectedPayment === "Espèces"}
                            onChange={handlePaymentChange}
                          />
                        </td>
                        <td></td>
                        <td>
                          <label>Espèces</label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="radio"
                            name="payment"
                            value="EnLigne"
                            checked={selectedPayment === "EnLigne"}
                            onChange={handlePaymentChange}
                          />
                        </td>
                        <td>&nbsp;&nbsp;&nbsp; </td>
                        <td>
                          <label>En ligne</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                  <button type="submit" className="lab-btn"><span>{btnText2}</span></button>
                </form>
              </div>
            </div>
          )}
        </div> <br></br>
      <div className="csd-title">
        <div className="csdt-left">
          <h4 className="mb-0">{price}<sup>dt</sup></h4>
        </div>
        <div className="csdt-right">
          <p className="mb-0"><i className="icofont-clock-time"></i>{excenge}</p>
        </div>
      </div>
      <div className="csd-content">
        <div className="csdc-lists">
        <ul className="lab-ul">
          <li>
              <div className="csdc-left"><i className="icofont-ui-alarm"></i>Niveau du cours</div>
              <div className="csdc-right">{level}</div>
            </li>
            <li>
              <div className="csdc-left"><i className="icofont-signal"></i>Cours en ligne</div>
              <div className="csdc-right">Oui</div>
            </li>
            <li>
              <div className="csdc-left"><i className="icofont-book-alt"></i>Modules</div>
              <div className="csdc-right">{totalModules}</div>
            </li>
            <li>
              <div className="csdc-left"><i className="icofont-video-alt"></i>Leçons</div>
              <div className="csdc-right">{totalLecons}</div>
            </li>
            <li>
              <div className="csdc-left"><i className="icofont-abacus-alt"></i>Quiz</div>
              <div className="csdc-right">Oui</div>
            </li>
            <li>
              <div className="csdc-left"><i className="icofont-certificate"></i>Certificat</div>
              <div className="csdc-right">Oui</div>
            </li>
            <li>
              <div className="csdc-left"><i className="icofont-globe"></i>Langue</div>
              <div className="csdc-right">Arabe</div>
            </li>
          
          </ul>
        </div>
        <div className="sidebar-payment">
        <div className="sp-title">
            <h6>{paymentTitle}</h6>
          </div>
          <div className="sp-thumb">
            <img src={`http://localhost:4000/uploads/pyment/01.jpg`} alt="CodexCoder" />
          </div>
        </div>
        <div className="sidebar-social">
        <div className="ss-title">
            <h6>{shareTitle}</h6>
          </div>
          <div className="ss-content">
            <ul className="lab-ul">
              {socialList.map((val, i) => (
                <li key={i}><a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a></li>
              ))}
            </ul>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default CourseSideDetail;
