import React from 'react'

import customerimg from '../images/contact-img.jpg'

const Contact = () => {
  return (
    <div className="container">
      <h1 className='pt-5'>GET IN TOUCH</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="input-box w-100 my-4">
            <input type="text" className='w-100 px-2 py-2' placeholder='Full Name' style={{border:'2px solid #00C6A9',outline:'#00C6A9'}}/>
          </div>
          <div className="input-box w-100 my-4">
            <input type="email" className='w-100 px-2 py-2' placeholder='Email' style={{border:'2px solid #00C6A9',outline:'#00C6A9'}}/>
          </div>
          <div className="input-box w-100 my-4">
            <input type="mobil" className='w-100 px-2 py-2' placeholder='Phone Number' style={{border:'2px solid #00C6A9',outline:'#00C6A9'}}/>
          </div>
          <div className="input-box w-100 my-4">
            <textarea type="textarea" className='w-100 px-2 py-2' placeholder='Message'height={10} style={{border:'2px solid #00C6A9',outline:'#00C6A9'}}/>
          </div>
          <button type='btn' className='px-4 py-1 fs-4 text-light fw-bold' style={{border:'none', background:'#00C6A9'}}>Send</button>
        </div>
        <div className="col-md-6 text-center">
            <img src={customerimg} alt="images" className='w-100'/>
        </div>
      </div>
    </div>
  );
}

export default Contact
