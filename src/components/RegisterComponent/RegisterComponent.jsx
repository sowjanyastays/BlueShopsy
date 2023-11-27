import React, {useState}from 'react'
import './RegisterComponent.css'
import {useNavigate, Link} from 'react-router-dom'
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import HeaderComponent from '../HeaderComponent/HeaderComponent';

function RegisterComponent() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async(e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate('/login')
        })
        .catch((error) => {
            alert(error.message);
        })
    }

  return (
    <div className='container'>
        {/* <HeaderComponent/> */}
    <div className='register'>
        <div className='register_content'>
            <h1>Register</h1>
            <br/>
            <form className='register_form'>
                <h3>E-Mail: </h3>
                <input type='text' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Username or e-mail' required/>
                <h3>Password: </h3>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
                <br/><br/>
                <button type='submit' onClick={onSubmit}>Register</button>
                <p>Already have an Account?</p>
                <button><Link to='/login' className='login_btn'>Login</Link></button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default RegisterComponent