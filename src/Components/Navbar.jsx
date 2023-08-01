import React, {useEffect} from 'react'
import { AiFillEnvironment } from "react-icons/ai";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import logo from '../images/logo.png'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  let location = useLocation();

  useEffect(() => {
    document.title = `${location.pathname === '/'?'Welcome To Mico':location.pathname.slice(1)}`
  }, [location]);


  return (
    <>
      <header>
        <div className="container">
          <div className="row py-2">
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 center">
              <BsFillTelephoneOutboundFill className='px-2 fs-2' style={{color:'#00C6A9'}}/>
              <a href="!#" className="fs-6 text-dark text-decoration-none">
                Call:1234567890
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 text-center">
              <BsFillChatQuoteFill className='px-2 fs-2' style={{color:'#00C6A9'}}/>
              <a href="!#" className="fs-6 text-dark text-decoration-none">
                Email:Exple@gmail.com
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 right">
              <AiFillEnvironment className='px-2 fs-2' style={{color:'#00C6A9'}}/>
              <a href="!#" className="fs-6 text-dark text-decoration-none">
                Location: India
              </a>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container">
          <Link className="navbar-brand bg-light p-0" to="/">
            <img src={logo} alt="logo" title='logo' className='m-0 h-100 py-2 px-5'/>
          </Link>
          <button
            className="navbar-toggler btn-outline-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <span className='fw-bold fs-2 text-light'><BsFilter/></span>
          </button>
          <div className="collapse navbar-collapse navmenucolor" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className={`nav-link text-light px-4 ${location.pathname === '/'?'text-dark fw-bold':''}`} aria-current="page">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to='About' className={`nav-link text-light px-4 ${location.pathname === '/About'?'text-dark  fw-bold':''}`}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to='Treatment' className={`nav-link text-light px-4 ${location.pathname === '/Treatment'?'text-dark  fw-bold':''}`}>TREATMENT</Link>
              </li>
              <li className="nav-item">
                <Link to='Doctors' className={`nav-link text-light px-4 ${location.pathname === '/Doctors'?'text-dark  fw-bold':''}`}>DOCTORS</Link>
              </li>
              <li className="nav-item">
                <Link to='Testimonis' className={`nav-link text-light px-4 ${location.pathname === '/Testimonis'?'text-dark  fw-bold':''}`}>TESTIMONIAL</Link>
              </li>
              <li className="nav-item">
                <Link to='Contact' className={`nav-link text-light px-4 ${location.pathname === '/Contact'?'text-dark  fw-bold':''}`}>CONTACT US</Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link href="!#" className="px-4 py-4 text-decoration-none text-light px-4">
              <BsPersonCircle/> LOGIN
              </Link>
              <Link href="!#" className="px-4 py-4 text-decoration-none text-light px-4">
                <BsPersonCircle/> SIGN UP
              </Link>
              <button className="btn text-light">
                <BsSearch />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar
