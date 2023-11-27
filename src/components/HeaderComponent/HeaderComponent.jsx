import React, { useState } from 'react'
import Products from '../../products.json'
import { Link } from 'react-router-dom'
import './HeaderComponent.css'
import ShoppingcartIcon from '@material-ui/icons/Shoppingcart'
import { useStateValue } from '../../StateProvider'
import { auth } from '../../firebase'
import FavoriteIcon from '@material-ui/icons/Favorite'


function HeaderComponent(id) {
  const [{cart, user}, dispatch] = useStateValue();
  const [value, setValue] = useState("");

  const onChangeHandler = (event) =>{
    setValue(event.target.value);
  }

  const onSearchHandler = (searchTerm) =>{
    console.log("search",searchTerm);
  }

  const clearDesc = () =>{
    dispatch({
      type: 'CLEAR_DESCRIPTION',
      id: id
    })
  }

  return (
    <div className="header">
      <div className='img-logo'>
      <Link to='/' onClick={clearDesc}>
        <img
          className="logo"
          src="logo.png"
          alt='logo'
        />
      </Link>
      </div>
      
      <div className="navbar">
        <Link to='/wishlist'>
        <div className="options">
            <FavoriteIcon/>
        </div>
        </Link>

        <Link to='/checkout'>  
        <div className="cart">
            <ShoppingcartIcon />
            <span className="lineTwo cartCount">
              {cart?.length}
            </span>
        </div>
        </Link>
        <Link to={!user ? '/login' : '/logout'}>
        <div className="options">
            <span className="lineOne">Hello {!user ? 'Guest' : 'User'}</span>
            <span className="lineTwo">{!user ? 'Sign In' : 'Sign Out'}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default HeaderComponent