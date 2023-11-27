import React from 'react'
import './CartComponent.css'
import { useStateValue } from '../../StateProvider'
import { useNavigate } from 'react-router-dom';

function CartComponent({ id, pname, price, image, hideButton }) {
  const navigate = useNavigate();
  const [{ cart }, dispatch] = useStateValue();
  const product = cart.find(item => item.id === id);

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id: id
    })
  }

  return (
    <div className='checkout'>
      <img className='product_img' src={image} alt='product' />
      <div className='product_info'>
        <strong>{pname}</strong>
        <p><strong>Price:</strong> Rs.{price}</p>
        <p className='checkout_quantity'>
          <strong>Quantity:</strong> {product?.quantity}
        </p>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  )
}

export default CartComponent
