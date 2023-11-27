import React from 'react';
import './MainWishlistComponent.css';
import { Link } from 'react-router-dom';
import WishlistComponent from '../WishlistComponent/WishlistComponent';
import { useStateValue } from '../../StateProvider';

function MainWishlistComponent() {
  const [{ wishlist }] = useStateValue();

  return (
    <div className='main_wishlist'>
      {wishlist.length > 0 ? (
        <div className='wishlist'>
          <h1>Your Wishlist</h1>
          <br />
          {wishlist.map((product) => (
            <WishlistComponent
              key={product.id}
              id={product.id}
              pname={product.pname}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <div className='empty-wishlist'>
          <p>No items in wishlist.</p>
          <Link to='/' className='link'>
            Add items to wishlist
          </Link>
        </div>
      )}
    </div>
  );
}

export default MainWishlistComponent;
