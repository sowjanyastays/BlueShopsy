import './DetailsComponent.css';
import { useStateValue } from '../../StateProvider';
import { useState } from 'react';

function DetailsComponent({ id, pname, price, image, rating, description }) {
  const [{ details }, dispatch] = useStateValue();
  const [cartMessageVisible, setCartMessageVisible] = useState(false);
  const [wishlistMessageVisible, setWishlistMessageVisible] = useState(false);

  const addToCart = () => {
   
    dispatch({
      type: 'ADD_TO_CART',
      product: {
        id: id,
        pname: pname,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
    setCartMessageVisible(true);
    setTimeout(() => {
        setCartMessageVisible(false);
    }, 3000);
  };

  const addToWishlist = () => {
    dispatch({
      type: 'ADD_TO_WISHLIST',
      product: {
        id: id,
        pname: pname,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
    setWishlistMessageVisible(true);
    setTimeout(() => {
        setWishlistMessageVisible(false);
    }, 3000);
  };

  return (
    <div className='details'>
      <div className='details_left'>
        <img className='details_img' src={image} alt='product' />
      </div>
      <div className='details_info'>
        <div className='details_header'>
          <h2 className='details_name'>{pname}</h2>
        </div>
        <p className='details_price'>Rs.{price}</p>
        <div className='details_rating'>
          Rating:
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>⭐</span>
            ))}
        </div>
        <p className='details_desc'>{description}</p>
        <div className='details_buttons'>
          <button onClick={addToCart}>Add to Cart</button>
          <button onClick={addToWishlist}>Add to Wishlist</button>
          <p className='cart-message' style={{ display: cartMessageVisible ? 'block' : 'none' }}>
                        The product is added to cart
            </p>
            <p className='cart-message' style={{ display: wishlistMessageVisible ? 'block' : 'none' }}>
                        The product is added to wishlist
            </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsComponent;
