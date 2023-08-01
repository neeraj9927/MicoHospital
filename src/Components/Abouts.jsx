import React from 'react'
import aboutsimages from '../images/about-img.jpg'

const Abouts = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-md-6">
            <img src={aboutsimages} alt="aboutsimages" className='w-100 height' />
        </div>
        <div className="col-md-6 py-5">
            <h1>About <span style={{ color: "#00C6A9" }}>Hospital</span></h1>
            <p className='line my-3'>has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</p>
            <button className='btn btn-dark my-1 my-md-3 px-2 py-1 px-md-4 py-md-2'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Abouts
