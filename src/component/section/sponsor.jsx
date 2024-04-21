import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const sponsorList = [
    {
        text: 'Cuisine',
    },
    {
        text: 'Pâtisserie',
    },
    {
        text: 'Broderie',
    },
    {
        text: 'Macramé',
    },
    {
        text: 'Accessories',
    },
    {
        text: 'Bougies',
    },
    {
        text: 'Couffin',
    },
    {
        text: 'Decorations maison',
    },
    {
        text: 'Poterie',
    },
    {
        text: 'Savons',
    },
    {
        text: 'Cosmetiques naturels',
    },
];

const Sponsor = () => {
    const styles = `
      
        .sponsor-text {
            font-weight: bold; 
            font-size: 20px;
            color: #808080; 
        }

     
    `;

    return (
        <div>
            <style>{styles}</style>
            <div className="sponsor-section section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="sponsor-slider">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                breakpoints={{
                                    0: {
                                        width: 0,
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        width: 768,
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        width: 1200,
                                        slidesPerView: 5.5,
                                    },
                                }}
                            >
                                {sponsorList.map((val, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="sponsor-item">
                                            <div className="sponsor-text">
                                                {val.text}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
