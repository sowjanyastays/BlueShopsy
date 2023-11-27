import React from 'react'
import { Link } from 'react-router-dom'
import './OrderComponent.css'

function OrderComponent() {
  return (
    <>
    <div className='order_placed'>
        <img className='success_img' src="success.png"
         alt= 'success'/>
        <br/>
        <br/>
        <div className='success_text'>
            <h1>Your order has been placed!!</h1>
            <br/>
            <Link className='home_link' to={'/'}>Click to continue to homepage</Link>
        </div>
    </div>
    </>
  )
}

export default OrderComponent