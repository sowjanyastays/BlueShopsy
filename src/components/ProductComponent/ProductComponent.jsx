import React, { useState } from 'react'
import './ProductComponent.css'
import {useStateValue} from '../../StateProvider';
import { Link } from 'react-router-dom';

function ProductComponent({id,pname,image,price,rating,description}) {

    const [{cart},dispatch] = useStateValue();
    const [cartMessageVisible, setCartMessageVisible] = useState(false);


    const showDesc = (pname) =>{
        dispatch({
            type: 'SHOW_DESCRIPTION',
            product: {
                id: id,
                pname: pname,
                image: image,
                price: price,
                rating: rating,
                description: description
            },
        });
    };
    const addTocart = (pname) => { 
        dispatch({
            type: 'ADD_TO_CART',
            product: {
                id: id,
                pname: pname,
                image: image,
                price: price,
                rating: rating,
                description: description
            },
        });
        setCartMessageVisible(true);
        setTimeout(() => {
            setCartMessageVisible(false);
        }, 3000);
    };
  return (
    <React.Fragment>
    <div className='product'>
            <img src={image}
            alt='product'/>
            <div className='product_inf'>
                <Link className='product_desc'>{pname}</Link>
                <p className='product_price'>
                <strong>Rs.{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>
                    ))}
                </div>
            </div><br/>
            <div>
            <button onClick={() => showDesc(pname)}><Link className='product_link' to={'/details'}>View Details</Link></button>
            <button onClick={() => addTocart (pname)}>Add to Cart</button></div>
            <p className='cart-message' style={{ display: cartMessageVisible ? 'block' : 'none' }}>
                        The product is added to cart
            </p>
    </div>
    </React.Fragment>
  )
}

export default ProductComponent