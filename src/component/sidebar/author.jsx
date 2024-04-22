import React from 'react';

const name = "Rajib Raj";
const degi = "Assistant Teacher";
const desc = "I'm an Afro-Latina digital artist originally from Long Island, NY. I love to paint design and photo manipulate in Adobe Photoshop while helping others learn too. Follow me on Instagram or tweet me.";

const socialList = [
    {
        link: '#',
        iconName: 'icofont-facebook',
        className: 'facebook',
    },
    {
        link: '#',
        iconName: 'icofont-twitter',
        className: 'twitter',
    },
    {
        link: '#',
        iconName: 'icofont-linkedin',
        className: 'linkedin',
    },
    {
        link: '#',
        iconName: 'icofont-instagram',
        className: 'instagram',
    },
    {
        link: '#',
        iconName: 'icofont-pinterest',
        className: 'pinterest',
    },
];

const Author = ({ trainers = [] }) => {
    return (
        <div className="authors">
            {trainers.length > 0 ? (
                trainers.map((trainer, index) => (
                    <div key={index} className="author-item" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="author-thumb">
                            {trainer.image ? (
                                <img src={`http://localhost:4000/uploads/trainer/${trainer.image}`} alt={trainer.name} />
                            ) : (
                                <img src="http://localhost:4000/uploads/profiles/ProfileFemale.png" alt="Profile" style={{ width: '30px', height: '30px' }} />
                            )}
                        </div>
                        <br></br>
                        <div className="author-content" style={{ marginLeft: '35px' }}>
                            
                            <h5>{trainer.name}</h5>
                            <span>{trainer.formation}</span>
                           
                            <p>
    {trainer.experience && trainer.experience.split('\n').map((block, index) => (
        <span key={index}>{block}<br /></span>
    ))}
</p>
                        </div>
                    </div>
                ))
            ) : (
                <span>No trainers available</span>
            )}
        </div>
    );
};

export default Author;
