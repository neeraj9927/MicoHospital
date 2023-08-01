import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { BsFillPlayFill } from "react-icons/bs";

import Abouts from './Abouts';
import Contact from './Contact';
import Test from './Doctors';
import Hospital_Traitment from './Hospital_Traitment';
import Testamonils from './Testamonils';
import slideone from '../images/slider-img.jpg'

const Home = () => {
  return (
    <>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="row px-1">
              <div className="col-md-6 my-auto py-3 py-md-0">
                <button className="play_btn my-2 mx-5">
                  <BsFillPlayFill />
                </button>
                <h1 className="mx-5">MICO</h1>
                <h1 className="mx-5">HOSPITAL</h1>
                <p className="mx-5">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to
                </p>
                <button className="btn btn-dark mx-5 px-2 py-1 px-md-4 py-md-2">
                  Contacts
                </button>
              </div>
              <div className="col-md-6">
                <img src={slideone} alt="image" className="w-100" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row px-1">
              <div className="col-md-6 my-auto py-3 py-md-0">
                <button className="play_btn my-2 mx-5">
                  <BsFillPlayFill />
                </button>
                <h1 className="mx-5">MICO</h1>
                <h1 className="mx-5">HOSPITAL</h1>
                <p className="mx-5">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to
                </p>
                <button className="btn btn-dark mx-5 px-2 py-1 px-md-4 py-md-2">
                  Contacts
                </button>
              </div>
              <div className="col-md-6">
                <img src={slideone} alt="image" className="w-100" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row px-1">
              <div className="col-md-6 my-auto py-3 py-md-0">
                <button className="play_btn my-2 mx-5">
                  <BsFillPlayFill />
                </button>
                <h1 className="mx-5">MICO</h1>
                <h1 className="mx-5">HOSPITAL</h1>
                <p className="mx-5">
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to
                </p>
                <button className="btn btn-dark mx-5 px-2 py-1 px-md-4 py-md-2">
                  Contacts
                </button>
              </div>
              <div className="col-md-6">
                <img src={slideone} alt="image" className="w-100" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="book_apoinment my-5 rounded">
        <div className="container">
          <div className="row shadows p-2 p-md-5 p-lg-5 p-xl-5 p-xxl-5">
            <h1 className="my-2">
              BOOK <span style={{ color: "#00C6A9" }}>APPOINTMENT</span>
            </h1>
            <div className="col-md-6 mb-3">
              <label>Patient Name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                placeholder="Patient Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Doctor's Name</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                placeholder="Doctor's Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Department's Name</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  placeholder="Department's Name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label>Phone Number</label>
              <input
                type="mobil"
                className="form-control"
                id="validationCustom03"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Symptoms</label>
              <input
                type="text"
                className="form-control"
                id="validationCustom04"
                placeholder="Symptoms"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <label>Choose Date</label>
              <input
                type="date"
                className="form-control"
                id="validationCustom05"
                placeholder="Choose Date"
                required
              />
            </div>

            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div className="d-flex my-3">
              <button
                className="btn btn-sm btn-dark px-2 py-1 px-md-4 py-md-2"
                type="submit"
              >
                Submit form
              </button>
            </div>
          </div>
        </div>
      </div>
      <Abouts />
      <Hospital_Traitment/>
      <Test/>
      <Testamonils/>
      <Contact/>
    </>
  );
}

export default Home
