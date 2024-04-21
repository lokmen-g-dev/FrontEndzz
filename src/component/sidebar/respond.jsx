import React, { useState,useContext } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify';
import myContext from "../ContextUser/Context";
import {Spinner} from 'react-bootstrap'
const title = "Laissez un commentaire";
const btnText = "Envoyer";

const Respond = ({ courseId }) => {
  const [content, setContent] = useState("");
  const { context } = useContext(myContext);
  const navigate=useNavigate();
  const [showSpinner1, setShowSpinner1] = useState(false);
  const [notAllowed,setNotAllowed]=useState(false);
  const [rating, setRating] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //cas d'un connected user :
    if (Object.keys(context.connectedUser).length !== 0) {
try {
  setShowSpinner1(true);
  const response = await axios.post(
    "http://localhost:4000/commentaire/createcommentaire",
    {
      course: courseId,
      user: context.connectedUser._id,
      content: content,
    }
  );
  console.log("Comment created:", response.data);
  toast.success(`${response.data.message}`);
  setContent("");
    setShowSpinner1(false);
  // ici logique temporaire car il met trop de charge  au coté serveur et à l'application front à la fois il faut éviter location.reload sauf au pire des cas ;i l faut penser à setState pour le commentListe pour faire l'update de commentaires en réél time juste aprés la réponse de l'api addComment...  :
  setTimeout(() => {
    window.location.reload();  
  }, 2000);

 
 //
} catch (error) {
  console.error("Error creating comment:", error);
  setContent("");
   setShowSpinner1(false);
  window.location.reload();
}
    } else {
setContent('');
setNotAllowed(true);
toast.error(`Veillez se connecter pour laisser un commentaire !`);
setTimeout(() => {
  navigate('/login');
}, 3000);

    }
    
    
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div id="respond" className="comment-respond mb-lg-0">
      <h4 className="title-border">{title}</h4>
      <div className="add-comment">
        <form onSubmit={handleSubmit} className="comment-form">
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={rating >= star ? "filled" : "empty"}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
          <textarea
            rows="7"
            type="text"
            name="message"
            placeholder="Votre message"
            value={content}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="lab-btn"
            disabled={showSpinner1}
            style={{ opacity: `${showSpinner1||notAllowed ? "0.5" : "1"}`,cursor:`${notAllowed?"not-allowed":"pointer"}` }}
          >
            <span>
              {btnText} &nbsp;
              {showSpinner1 && <Spinner size="sm" animation="border"></Spinner>}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Respond;

const styles = `
.star-rating {
  display: inline-block;
  font-size: 30px;
}

.star-rating span {
  cursor: pointer;
  color: #ccc;
}

.star-rating span.filled {
  color: #ED7F10;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);