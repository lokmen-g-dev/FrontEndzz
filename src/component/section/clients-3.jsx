
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


const subTitle = "TÉMOIGNAGES";
const title = "Les avis de nos clients";
const absTitle = "TÉMOIGNAGES";


const clientSliderList = [
   
    {
        imgUrl: 'assets/images/clients/01.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        iconNane: 'icofont-quote-left',
        desc: 'Grace à cette plateforme , j"ai eu l"opportunité d"apprendre à faire des accessoires sans  avoir à me déplacer de chez moi. ',
        name: 'Anthony McGuffog',
        degi: 'Payroll bookkeeper',
    },
    {
        imgUrl: 'assets/images/clients/03.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        iconNane: 'icofont-quote-left',
        desc: 'Les cours en ligne  m"ont offert la chance  de rafraîchir ma mémoire et de réapprendre les techniques transmises par ma grand mère, que j"avais oubliées avec le temps.',
        name: 'Isabel Blaubaum',
        degi: 'College instructor',
    },
]

const ClientsThree = () => {
    return (
        <div className="clients-section style-3 padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle orange-color">{subTitle}</span>
                    <h2 className="title">{title}</h2>
                    <h2 className="abs-title">{absTitle}</h2>
                </div>
                <div className="section-wrapper">
                    <div className="clients-slider2 overflow-hidden">
                        <Swiper
                            loop={'true'}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            navigation={{
                                prevEl: '.clients-slider2-prev',
                                nextEl: '.clients-slider2-next',
                            }}
                            modules={[Autoplay, Navigation]}
                        >
                            {clientSliderList.map((val, i) => (
                                <SwiperSlide key={i}>
                                    <div className="client-item">
                                        <div className="client-inner">
                                            <div className="client-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                                <div className="quote">
                                                    <i className={val.iconNane}></i>
                                                </div>
                                            </div>
                                            <div className="client-content">
                                                <p>{val.desc}</p>
                                                <div className="client-info">
                                                    <h6 className="client-name">{val.name}</h6>
                                                    <span className="client-degi">{val.degi}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="clients-slider-nav clients-slider2-next"><i className="icofont-double-left"></i></div>
                        <div className="clients-slider-nav clients-slider2-prev"><i className="icofont-double-right"></i></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ClientsThree;