import React, { useState } from 'react';
import "./section.css"
import google from "../assets/google.svg"
import apple from "../assets/Apple.svg"
import facebook from "../assets/Facebook.svg"
import paypal from "../assets/paypal.svg"
const Section1 = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  return (
    <div className='container  ' style={{
      borderRight:" 1px solid #EEEEEE"
    }}>
      <form className=''>
        <h1>Welcome to U buy</h1>
        <div className='d-flex w-100 mt-5'>
          <div
            className={`w-50 border btnlayout d-flex justify-content-center align-items-center p-3 ${isLogin ? "activetoggle" : ""}`}
            onClick={() => setIsLogin(true)}
          >
            <div className='fs-6 fw-bold'>Log in</div>
          </div>
          <div
            className={`w-50 border btnlayout d-flex justify-content-center align-items-center p-3 ${!isLogin ? "activetoggle" : ""}`}
            onClick={() => setIsLogin(false)}
          >
            <div className='text-secondary fs-6 fw-bold'>Sign up</div>
          </div>
        </div>
        <div className='d-flex w-100 mt-3'>
          <input
            className='emailInput w-100 py-2 px-1 rounded'
            type='email'
            name='email'
            placeholder='Email Address *'
          />
        </div>
        <div className=' mt-3 row '>
          <div className='col-4 row ms-0'>
            <div
              className={`col-7 border btnlayout d-flex justify-content-center align-items-center  ${isPassword ? "activetoggle" : ""}`}
              onClick={() => setIsPassword(true)}
            >
              <div className='font12  fw-bold'>Log in</div>
            </div>
            <div
              className={`col-5 border btnlayout d-flex justify-content-center align-items-center  ${!isPassword ? "activetoggle" : ""}`}
              onClick={() => setIsPassword(false)}
            >
              <div className='text-secondary font12 fw-bold'>OTP</div>
            </div>
          </div>
          <div className='col-8'>
            <input
              className='emailInput py-2 px-1 rounded '
              style={{width:"23.3rem"}}
              type='password'
              name='password'
              placeholder='password *'
            /></div>
          <div className='d-flex justify-content-end mt-1'><a>forgot password?</a></div>
        </div>
        <div className='w-100 mt-2'>
          <button type='submit ' className='activetoggle rounded w-100 py-2'>Log in</button>
        </div>
        <div className='w-100 mt-2'>
          <div  className='btnlayout rounded  py-2 d-flex justify-content-center'>
          <img src={google} alt="Logo" width="30" height="30" />
          <img src={facebook} alt="Logo" width="30" height="30" />
          <img src={apple} alt="Logo" width="30" height="30" />
          <img src={paypal} alt="Logo" width="30" height="30" />
          <span className='fw-bold fs-6 text-dark'>Login with Social Accounts</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Section1;
