import React from 'react'
import logo from "../assets/logo.svg"
import vector from "../assets/Vector.svg"
import appstore from "../assets/appstore.svg"
import playstore from "../assets/playstore.svg"
import qrcode from "../assets/qrcode.svg"

const Section2 = () => {
  return (
    <div className='container '>
      <div className='row'>
     
          <div className='w-100 text-end'>
            <img src={logo} alt='logo' width="60" height="60" />
          </div>
        
        <div className=' pt-5 mt-5' ><ul style={{
          listStyle: "none",paddingLeft: "1px"
        }}>
          <li className='py-0'> <img src={vector} alt='logo' width="20" height="20" /><span className='ms-1 fs-6 fw-bold'>Delivering in 20000+ Cities</span></li>
          <li className='py-0'> <img src={vector} alt='logo' width="20" height="20" /><span className='ms-1 fs-6 fw-bold'>Presence in 6 Continents</span></li>
          <li className='py-0'> <img src={vector} alt='logo' width="20" height="20" /><span className='ms-1 fs-6 fw-bold'>300 Million Products</span></li>
          <li className='py-0'> <img src={vector} alt='logo' width="20" height="20" /><span className='ms-1 fs-6 fw-bold'>20 Million Happy Customers & Counting</span></li>
          <li className='py-0'> <img src={vector} alt='logo' width="20" height="20" /><span className='ms-1 fs-6 fw-bold'>Ubuy Wins Best Cross Border Brand Award in 2023</span></li>
        </ul></div>
        
      </div>
      <div className="d-flex ">
        <div><img src={qrcode} alt='barcode' width={120} height={120}/></div>
        <div className='mx-2'>
          <div className='d-block '><h4>DON'T HAVE UBUY APP?</h4>
          <p className='fs-6 fw-bold'>Download it here!</p>
          </div>
        <div className='d-flex '><img src={appstore} alt='barcode' width={100} height={30}/><img src={playstore} alt='barcode' width={100} height={30}/></div></div>
      </div>
    </div>
  )
}

export default Section2