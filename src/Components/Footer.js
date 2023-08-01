import React from 'react'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <div>
<footer className="text-center text-lg-start bg-dark text-muted py-4">
  <section className="text-light">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">

        <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">
            <div>
            <img src={logo} className='bg-light px-5 py-3'/>    
            </div>    
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          ADDRESS
          </h6>
          <p>
            <a href="#!" className="text-reset">Location</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Call +01 1234567890</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Demo@gmail.com</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>


        <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-4">

          <h6 className="text-uppercase fw-bold mb-4">
          USEFUL LINK
          </h6>
          <p>
            <a href="#!" className="text-reset">Home</a>
          </p>
          <p>
            <a href="#!" className="text-reset">About</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Treatment</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Doctors</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Testamonils</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Contacts</a>
          </p>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">LATEST POSTS</h6>
          <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
</footer>
    </div>
  )
}

export default Footer
