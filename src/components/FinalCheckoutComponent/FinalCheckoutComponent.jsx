import React from 'react';
import './FinalCheckoutComponent.css';
import CartComponent from '../CartComponent/CartComponent';
import CurrencyFormat from 'react-currency-format';
import { getcartTotal } from '../../reducer';
import { useStateValue } from '../../StateProvider';
import { Link } from 'react-router-dom';

function FinalCheckoutComponent() {
  const [{ cart }] = useStateValue();

  return (
    <div className='main_checkout'>
      {cart.length > 0 ? (
        <>
          <div className='check_left'>
            <h1>Your Cart</h1>
            <br />
            {cart.map(product => (
              <CartComponent
                key={product.id} 
                id={product.id}
                pname={product.pname}
                price={product.price}
                image={product.image}
                quantity={product.quantity} 
              />
            ))}
          </div>
          <div className='subtotal'>
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>Subtotal({cart.length} product) : {value}</p>
                </>
              )}
              decimalScale={2}
              value={getcartTotal(cart)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rs.'}
            />
            <button><Link to={'/shipping'} className='confirm_btn'> Confirm Order </Link></button>
          </div>
        </>
      ) : (
        <div className='empty-cart'>
          <p>Your cart is empty</p>
          <Link to="/" className='back-to-shopping'>Go back to shopping</Link>
        </div>
      )}
    </div>
  );
}

export default FinalCheckoutComponent;
