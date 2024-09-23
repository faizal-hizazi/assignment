import React from 'react'
import Section1 from '../componants/Section1'
import Section2 from '../componants/Section2'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="container">
           
        <div className='row m-5'>
            <div className='col-md-6'><Section1 /></div>
            <div className='col-md-6'><Section2 /></div>
        </div>
        <Link to="/product" className="btn btn-primary">Go back to product</Link>
        </div>
    )
}

export default Login