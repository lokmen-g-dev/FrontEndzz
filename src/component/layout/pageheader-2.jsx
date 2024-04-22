import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import Rating from "../sidebar/rating";

const PageHeaderTwo = ({
  title,
  sousTitre,
  image,
  infoSessionUrl,
  price,
  categorys = [],
  trainers = [],
  courseId,
}) => {
  const [averageRating, setAverageRating] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoId, setVideoId] = useState("");
  const fetchAverageRating = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/commentaire/comm/${courseId}/rating`
      );
      const data = await response.json();
      setAverageRating(data.averageRating);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la note moyenne :",
        error
      );
    }
  };
  useEffect(() => {
    fetchAverageRating();
  }, [courseId]);
  const formatRating = (rating) => {
    return rating % 1 === 0 ? rating.toFixed(0) : rating.toFixed(2);
  };
  const handleVideoButtonClick = () => {
    console.log("infoSessionUrl:", infoSessionUrl);
    if (infoSessionUrl) {
      const urlParams = new URLSearchParams(infoSessionUrl.split("?")[1]);
      const videoIdFromUrl = urlParams.get("v");
      if (videoIdFromUrl) {
        console.log("videoIdFromUrl:", videoIdFromUrl);
        setVideoId(videoIdFromUrl);
        setShowVideoModal(true);
      }
    }
  };
  const closeVideoModal = () => {
    console.log("Fermeture de la modal vidéo");
    setShowVideoModal(false);
  };
  return (
    <div className="pageheader-section style-2">
      <style>{`
            .category-box {
                display: inline-block;
                padding: 5px 10px;
                background-color: mediumseagreen;
                color: white;
                font-weight: bold;
                border-radius: 5px;
                margin-right: 10px;
                width: 110px;
                height: 33px;
                text-align: center;}
            .price-box {
                display: inline-block;
                padding: 5px 10px;
                background-color: #ed7f10;
                color: white;
                font-weight: bold;
                border-radius: 5px;
                margin-right: 10px;
                width: 70px;
                height: 33px;
                text-align: center;}
                .video-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;}
                .video-modal-content {
                    background-color: #fff;
                    padding: 20px;
                    max-width: 800px;
                    width: 100%;
                    text-align: center;
                    position: relative;}
                .video-modal-content button {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background-color: #333;
                    color: #fff;
                    border: none;
                    padding: 10px 15px;
                    cursor: pointer;}
            `}</style>
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-center flex-row-reverse">
          <div className="col-lg-7 col-12">
            <div className="pageheader-thumb">
              <img
                src={`http://localhost:4000/uploads/courses/${image}`}
                style={{ width: "250px", height: "360px" }}
                className="w-100"
                alt={title}
              />
              <a
                className="video-button popup"
                target="_blank"
                onClick={handleVideoButtonClick}
              >
                <i className="icofont-ui-play"></i>{" "}
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="pageheader-content">
              <div className="d-flex">
                <div className="select-item">
                  {categorys.length > 0 ? (
                    categorys.map((val, i) => (
                      <div className="category-box" key={i}>
                        {val.name}
                      </div>
                    ))
                  ) : (
                    <span>No categories available</span>
                  )}
                </div>
                <div className="price-box">{price} dt</div>
              </div>
              <br />
              <h2 className="phs-title">{title}</h2>
              <p className="phs-desc">
    {sousTitre && sousTitre.split('\n').map((block, index) => (
        <span key={index}>{block}<br /></span>
    ))}
</p>
             
              <div
                className="phs-thumb"
                style={{ display: "flex", alignItems: "center" }}
              >
                {trainers.length > 0 ? (
                  trainers.map((trainer, index) => (
                    <div
                      key={index}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginRight: "10px",
                      }}
                    >
                      {trainer.image ? (
                        <img
                          src={`http://localhost:4000/uploads/trainer/${trainer.image}`}
                          alt={trainer.name}
                          style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "5px",
                          }}
                        />
                      ) : (
                        <img
                          src="http://localhost:4000/uploads/profiles/ProfileFemale.png"
                          alt="Profile"
                          style={{
                            width: "30px",
                            height: "30px",
                            marginRight: "5px",
                          }}
                        />
                      )}
                      <span>{trainer.name}</span>
                    </div>
                  ))
                ) : (
                  <span>No trainers available</span>
                )}
                <div className="course-reiew" style={{ marginLeft: "10px" }}>
                  <Rating rating={averageRating} />
                  <span className="ratting-count">
                    {formatRating(averageRating)} avis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showVideoModal && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <YouTube
              videoId={videoId}
              opts={{ width: "100%", height: "400px" }}
            />
            <button onClick={closeVideoModal}>Fermer la vidéo</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default PageHeaderTwo;
