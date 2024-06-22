import React from 'react';
import { useEffect } from 'react';
import './home.css';
import video from '../../media/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faFilter, faList, faMapMarkerAlt, faMask, faTractor } from '@fortawesome/free-solid-svg-icons';
import { faAppStore, faAppStoreIos, faApper, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);


    return (

        <section className='home'>
            <div className="overlay">    </div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="text">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className='homeTitle'>
                        Search your Holidays
                    </h1>
                </div>

                <div data-aos="fade-up" className="card grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination
                        </label>
                        <div className="input flex">
                            <input type="text" placeholder='Enter name here.......' />
                            <FontAwesomeIcon icon={faMapMarkerAlt} className='icon' />
                        </div>
                    </div>

                    <div className="destinationInput">
                        <label htmlFor="date">Select your date
                        </label>
                        <div className="input flex">
                            <input type="date" placeholder='Enter name here.......' />

                        </div>
                    </div>

                    <div className="priceInput">

                        <div className="label_total flex">
                            <label htmlFor="price">Max price</label>
                            <h3 className='total'>$5000</h3>
                        </div>

                        <div className="input flex">
                            <input className='range' type="range" max={5000} min={1000} />
                        </div>


                    </div>

                    <div className="searchOptions flex">
                        <FontAwesomeIcon icon={faFilter} className='icon' />
                        <span>MORE FILTERS</span>
                    </div>

                </div>


                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="leftIcons">
                        <FontAwesomeIcon icon={faFacebook} className='icon' />
                        <FontAwesomeIcon icon={faInstagram} className='icon' />
                        <FontAwesomeIcon icon={faMask} className='icon' />
                    </div>
                    <div className="rightIcons">
                        <FontAwesomeIcon icon={faList} className='icon' />
                        <FontAwesomeIcon icon={faAppleAlt} className='icon' />

                    </div>
                </div>


            </div>

        </section>
    );
}

export default Home;
