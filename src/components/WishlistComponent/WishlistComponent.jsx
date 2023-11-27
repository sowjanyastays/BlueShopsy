import React from 'react'
import './WishlistComponent.css'
import { useStateValue } from '../../StateProvider'
import { Link } from 'react-router-dom';

function WishlistComponent({id,pname,image,price,rating,hideButton,description}) {
    const [{wishlist}, dispatch] = useStateValue();

    const removeFromWishlist = () => {
        dispatch({
            type: 'REMOVE_FROM_WISHLIST',
            id: id
        });
    }
  return (
    <React.Fragment>
    <div className='item'>
        <img className='item_img' src={image} alt='item'/>
        <div className='item_info'>
            <p>{pname}</p>
            <p>Rs.{price}</p><br/>
            {!hideButton && (<button onClick={removeFromWishlist}>Remove from Wishlist</button>)}
        </div>
    </div>
    </React.Fragment>
  )
}

export default WishlistComponent