import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import doctor from '../images/team1.jpg'
import doctor_two from '../images/team2.jpg'
import doctor_three from '../images/team3.jpg'


const Doctors = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="slider py-5 my-4" style={{background:'#00C6A9'}}>
      <div className='container'>
        <h1 className='text-center py-4'>OUR <span className='text-light'>DOCTORS</span></h1>
      <Carousel
       responsive={responsive}        
        swipeable={true}  
        draggable={true}
        showDots={true}
        customTransition="2s"
        transitionDuration={500}
        ssr={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet"]}              
        >
      <div className="card mx-2">
        <img src={doctor} className="card-img-top"/>
        <div className="card-body text-center">
          <h2 className="card-title">Mocro</h2>
          <strong style={{color:'#00C6A9',fontSize:'22px'}}>MBBS</strong>
        </div>
        <div className="icon d-flex bg-light justify-content-center align-items-center">
          <i className='px-3 py-3 fs-4'><BsInstagram/></i>
          <i className='px-3 py-3 fs-4'><BsTwitter/></i>
          <i className='px-3 py-3 fs-4'><BsFacebook/></i>
          <i className='px-3 py-3 fs-4'><BsLinkedin/></i>
        </div>
      </div>
      <div className="card mx-2">
        <img src={doctor_two} className="card-img-top"/>
        <div className="card-body text-center">
          <h2 className="card-title">Zean Flip</h2>
          <strong style={{color:'#00C6A9',fontSize:'22px'}}>MBBS</strong>
        </div>
        <div className="icon d-flex bg-light justify-content-center align-items-center">
          <i className='px-3 py-3 fs-4'><BsInstagram/></i>
          <i className='px-3 py-3 fs-4'><BsTwitter/></i>
          <i className='px-3 py-3 fs-4'><BsFacebook/></i>
          <i className='px-3 py-3 fs-4'><BsLinkedin/></i>
        </div>
      </div>
      <div className="card mx-2">
        <img src={doctor_three} className="card-img-top"/>
        <div className="card-body text-center">
          <h2 className="card-title">Jenni</h2>
          <strong style={{color:'#00C6A9',fontSize:'22px'}}>MBBS</strong>
        </div>
        <div className="icon d-flex bg-light justify-content-center align-items-center">
          <i className='px-3 py-3 fs-4'><BsInstagram/></i>
          <i className='px-3 py-3 fs-4'><BsTwitter/></i>
          <i className='px-3 py-3 fs-4'><BsFacebook/></i>
          <i className='px-3 py-3 fs-4'><BsLinkedin/></i>
        </div>
      </div>
      <div className="card mx-2">
        <img src={doctor} className="card-img-top"/>
        <div className="card-body text-center">
          <h2 className="card-title">Micro</h2>
          <strong style={{color:'#00C6A9',fontSize:'22px'}}>MBBS</strong>
        </div>
        <div className="icon d-flex bg-light justify-content-center align-items-center">
          <i className='px-3 py-3 fs-4'><BsInstagram/></i>
          <i className='px-3 py-3 fs-4'><BsTwitter/></i>
          <i className='px-3 py-3 fs-4'><BsFacebook/></i>
          <i className='px-3 py-3 fs-4'><BsLinkedin/></i>
        </div>
      </div>
      <div className="card mx-2">
        <img src={doctor_two} className="card-img-top"/>
        <div className="card-body text-center">
          <h2 className="card-title">Hennry</h2>
          <strong style={{color:'#00C6A9',fontSize:'22px'}}>MBBS</strong>
        </div>
        <div className="icon d-flex bg-light justify-content-center align-items-center">
          <i className='px-3 py-3 fs-4'><BsInstagram/></i>
          <i className='px-3 py-3 fs-4'><BsTwitter/></i>
          <i className='px-3 py-3 fs-4'><BsFacebook/></i>
          <i className='px-3 py-3 fs-4'><BsLinkedin/></i>
        </div>
      </div>
      <div className="card mx-2">
        <img src={doctor} className="card-img-top"/>
        <div className="card-body text-center">
          <h2 className="card-title">Jinni</h2>
          <strong style={{color:'#00C6A9',fontSize:'22px'}}>MBBS</strong>
        </div>
        <div className="icon d-flex bg-light justify-content-center align-items-center">
          <i className='px-3 py-3 fs-4'><BsInstagram/></i>
          <i className='px-3 py-3 fs-4'><BsTwitter/></i>
          <i className='px-3 py-3 fs-4'><BsFacebook/></i>
          <i className='px-3 py-3 fs-4'><BsLinkedin/></i>
        </div>
      </div>
      
      </Carousel>
    </div>
  </div>
  )
}

export default Doctors
