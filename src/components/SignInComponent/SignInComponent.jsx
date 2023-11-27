import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './LoginComponent.css'
import {useNavigate} from 'react-router-dom'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useStateValue } from '../../StateProvider';


function SignInComponent() {
    const [{user}, dispatch] = useStateValue();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const set_user = () => {
        dispatch({
            type: 'CREATE_USER',
            user : true
        })
    }
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            let user_email = userCredential.user.email;
            alert('Logged in successfully');    
            set_user();
            navigate('/')
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

  return (
    <div className='container'>
    <div className='login'>
        <div className='login_content'>
            <h1>Login</h1>
            <br/>
            <form className='login_form'>
                <h3>E-Mail: </h3>
                <input type='text' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Username or e-mail' required/>
                <h3>Password: </h3>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required/>
                <br/><br/>
                <button type='submit' onClick={onLogin}>Login</button>
                <p>Don't have an account?</p>
                <button><Link to='/register' className='reg_btn'>Register Now</Link></button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SignInComponent