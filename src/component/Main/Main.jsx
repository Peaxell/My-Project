import React from 'react';

import { useEffect } from 'react';
import './main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../media/hawaii.jpg';
import img2 from '../../media/kyoto.jpg';
import img3 from '../../media/ken-cheung-KonWFWUaAuk-unsplash.jpg';
import img4 from '../../media/victoria falls.jpg';
import img5 from '../../media/maldives.gif';
import img6 from '../../media/dubronik.jpg';
import img7 from '../../media/almafi.jpg';
import img8 from '../../media/cape.jpg';
import img9 from '../../media/canada.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

const data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Maui, Hawaii',
        location: ' United States',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        decsription: 'It offers a diverse range of landscapes, from lush rainforests and cascading waterfalls to golden beaches and volcanic craters. Visitors can enjoy activities such as snorkeling, whale watching, hiking in Haleakalā National Park, and driving the scenic Road to Hana.'

    },


    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Kyoto',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        decsription: '  With its centuries-old temples, traditional tea houses, and beautiful gardens, Kyoto is a cultural treasure trove. Visitors can immerse themselves in Japanese history and culture by exploring UNESCO World Heritage sites, attending tea ceremonies, and experiencing the beauty of cherry blossom season.'

    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        decsription: ' A crucial ecosystem that supports a vast array of marine life and contributes to the health of the oceans. It serves as a reminder of the importance of conservation and sustainable management of our planets marine resources.'

    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Victoria Falls',
        location: 'Zimbabwe Border',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        decsription: '0ne of the largest and most spectacular waterfalls in the world. Known as the "Smoke that Thunders," the falls cascade over a width of nearly 2 kilometers and plunge into a deep gorge below. Victoria Falls is a UNESCO World Heritage site and a popular destination for adventure activities such as bungee jumping and whitewater rafting.'

    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'The Maldives',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        decsription: ' A tropical paradise consisting of over 1,000 coral islands, known for their pristine beaches, crystal-clear lagoons, and vibrant marine life. Visitors can stay in luxurious overwater bungalows, indulge in water sports such as snorkeling and diving, and relax on secluded sandbanks.'

    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Dubrovnik',
        location: 'Croatia',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        decsription: ' A charming coastal city known for its well-preserved medieval architecture, fortified walls, and scenic waterfront. Visitors can wander through the narrow cobblestone streets of the Old Town, walk along the city walls for panoramic views, and enjoy the pristine beaches of the Adriatic coast. '

    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Amalfi Coast',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        decsription: ' A stunning stretch of coastline along the southern edge of Italy-s Sorrentine Peninsula. Known for its dramatic cliffs, colorful villages, and Mediterranean charm, it offers visitors the opportunity to explore charming towns like Positano, Ravello, and Amalfi, as well as enjoy delicious Italian cuisine and breathtaking coastal views. '

    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Western Cape',
        location: 'South Africa',
        grade: 'CULTURAL RELAX',
        fees: '$400',
        decsription: ' A vibrant city situated between the majestic Table Mountain and the Atlantic Ocean. Visitors can explore iconic landmarks such as Table Mountain and Robben Island, enjoy beautiful beaches, and indulge in world-class cuisine and wine. '

    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        decsription: ' An Indonesia isalnd and one of the best holiday destinations in the indonesian archipelago. Alao known for its volcanic mountains, history, arts and culture, food, templates, and beautiful sandy beaches '

    }




]


const Main = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (

        <section className='main container section'>

            <div data-aos="fade-right" className="secTitle">

                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>
            <div className="setContent  grid">


                {
                    data.map(({ id, imgSrc, destTitle, location, grade, fees, decsription }) => {
                        return (
                            <div data-aos="fade-up" key={id} className="singleDestination" >

                                <div className="image">
                                    <img src={imgSrc} alt="" />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>

                                    <span className='continent flex'>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
                                        <div className="name">{location} </div>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h4>{fees}</h4>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{decsription}</p>
                                    </div>
                                </div>

                                <button className='btn'>
                                    DETAILS <FontAwesomeIcon icon={faClipboardCheck} className='icon' />
                                </button>

                            </div>
                        )

                    })
                }

            </div>

        </section >
    );
}

export default Main;