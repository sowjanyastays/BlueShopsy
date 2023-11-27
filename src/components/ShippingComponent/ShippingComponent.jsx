import React, { useState } from 'react';
import './ShippingComponent.css';
import CurrencyFormat from 'react-currency-format';
import { getcartTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import { Link, useNavigate } from 'react-router-dom';

function ShippingComponent() {
    const [{ cart }] = useStateValue();
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        if (address.trim() !== '' && phoneNumber.trim() !== '') {
            navigate('/order');
        } else {
            alert('Please enter address and phone number.');
        }
    };

    return (
        <React.Fragment>
            <h1 className='heading'>Shipping and Payment Details</h1>
            <div className='shipping_payment_container'>
                <div className="shipping_details">
                    <h3>Shipping Details</h3>
                    <br />
                    <label>Address :</label><br />
                    <textarea
                        className="address"
                        placeholder='Enter your address ...'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    /><br /><br />
                    <label>Phone Number :</label><br />
                    <input
                        type="text"
                        className="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    /><br /><br /><br />
                </div>
                <div className='payment_details'>
                    <h3>Payment Details</h3><br />
                    <input type="radio" className="cod" required />
                    <label>   Cash on Delivery</label><br />
                    <CurrencyFormat
                        className='payment_amt'
                        renderText={(value) => (
                            <>
                                <h2>Total({cart.length} product) : {value}</h2>
                            </>
                        )}
                        decimalScale={2}
                        value={getcartTotal(cart)}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Rs.'}
                    /><br /><br />
                    <button onClick={handlePlaceOrder} className='order_btn'>Place Order</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ShippingComponent;
