import React from 'react'
import icon_one from '../images/t1.png'
import icon_two from '../images/t2.png'
import icon_three from '../images/t3.png'
import icon_four from '../images/t4.png'

const Hospital_Traitment = () => {
  return (
    <div className='container my-3 my-md-5'>
      <h1 className='text-center fw-bold'>Hospital <span style={{ color: "#00C6A9" }}>Treatment</span></h1>
      <div className="row text-center">
        <div className="col-md-6 col-lg-3 my-2 my-md-5">
            <div className="pb-3">
            <img src={icon_one} alt="icon" />
            </div>            
            <h2>Nephrologist Care</h2>
            <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
            <button className='btncolor'>READ MORE</button>
        </div>
        <div className="col-md-6 col-lg-3 my-2 my-md-5">
        <div className="pb-3">
            <img src={icon_two} alt="icon" />
            </div> 
            <h2>Eye Care</h2>
            <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
            <button className='btncolor'>READ MORE</button>
        </div>
        <div className="col-md-6 col-lg-3 my-2 my-md-5">
        <div className="pb-3">
            <img src={icon_three} alt="icon" />
            </div>
        <h2>Pediatrician Clinic</h2>
            <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
            <button className='btncolor'>READ MORE</button>
        </div>
        <div className="col-md-6 col-lg-3 my-2 my-md-5">
        <div className="pb-3">
            <img src={icon_four} alt="icon" />
            </div>
        <h2>Parental Care</h2>
            <p>alteration in some form, by injected humour, or randomised words which don't look even slightly e sure there isn't anything</p>
            <button className='btncolor'>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Hospital_Traitment
