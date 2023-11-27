import React from 'react';
import './LogoutComponent.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { useStateValue } from '../../StateProvider';

function LogoutComponent() {
  const navigate = useNavigate(); 
  const [{ user }, dispatch] = useStateValue();

  const deleteUser = () => {
    dispatch({
      type: 'REMOVE_USER',
      user: false,
    });
    alert('Successfully Logged out');
    navigate('/'); 
  };

  return (
    <React.Fragment>
      {/* <HeaderComponent /> */}
      <div className='logout'>
        <div className='logout_content'>
          <h1>Logout</h1>
          <div className='logout_message'>
            <p>Are you sure you want to logout?</p>
          </div>
          <div className='logout_buttons'>
            <button onClick={() => deleteUser()} className='logout_btn logout_confirm'>
              Logout
            </button>
            <Link to='/' className='logout_btn continue_btn'>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LogoutComponent;
