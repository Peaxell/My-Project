import React from 'react';
import { useEffect } from 'react';
import './footer.css';
import video6 from '../../media/video6.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faPlane, faPlaneDeparture, faMask, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (

        <section className="footer">
            <div className="video">
                <video src={video6} muted autoPlay loop type="video/mp4"></video>
            </div>

            <div className="setContent container">
                <div className="contact flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>

                    </div>

                    <div className="input flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
                        <button data-aos="fade-up" type='submit' className='btn flex' >
                            Send <FontAwesomeIcon icon={faLocationArrow} className='icon' />
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="" className='logo flex'>
                                <FontAwesomeIcon icon={faPlaneDeparture} className='icon' />
                                <span>Travel.</span>
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerParagraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Qui iure sapiente voluptas! Modi recusandae voluptates aspernatur.
                            Voluptatibus, animi earum qui consequuntur illum,
                            labore deleniti architecto alias repudiandae est ut nesciunt!
                        </div>

                        <div data-aos="fade-up" className="footerSocial">
                            <FontAwesomeIcon icon={faTwitter} className='icon' />
                            <FontAwesomeIcon icon={faYoutube} className='icon' />
                            <FontAwesomeIcon icon={faInstagram} className='icon' />
                            <FontAwesomeIcon icon={faMask} className='icon' />
                        </div>


                        <div className="footerLinks grid">
                            <div data-aos="fade-up" className="linkGroup">
                                <div data-aos-duration="4000" className="groupTitle">
                                    <span>OUR AGENCY</span>

                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Services
                                    </li>
                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Insurance
                                    </li>
                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Agency
                                    </li>
                                    <li className="footerList flex">

                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Tourism
                                    </li>

                                    <li className="footerList flex">

                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Payment
                                    </li>
                                </div>

                                <div data-aos-duration="5000" className="groupTitle">
                                    <span>PATRNERS</span>

                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Bookings
                                    </li>
                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Rentcars
                                    </li>
                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Hostelworld
                                    </li>
                                    <li className="footerList flex">

                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Trivago
                                    </li>

                                    <li className="footerList flex">

                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        TripAdvisor
                                    </li>
                                </div>
                                <div data-aos-duration="6000" className="groupTitle">
                                    <span>LAST MINUTE</span>

                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        London
                                    </li>
                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Carlifonia
                                    </li>
                                    <li className="footerList flex">
                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Indonesia
                                    </li>
                                    <li className="footerList flex">

                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Nigeria
                                    </li>

                                    <li className="footerList flex">

                                        <FontAwesomeIcon icon={faChevronRight} className='icon' />
                                        Korea
                                    </li>
                                </div>

                            </div>
                        </div>

                        <div className="footerDiv  flex">
                            <small>BEST TRAVEL WEBSITE THEME</small>
                            <small>COPYRIGHTS RESERVED - PEAXEMAYER 2024</small>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Footer;
