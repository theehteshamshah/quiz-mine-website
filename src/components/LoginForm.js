import { useState} from "react";
import { useNavigate } from "react-router-dom";


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

 

    return (
        <div className="main-container">

            <div className="left-container">
                <img src="/pic-1.jpg" className="image-login" alt="quiz-mine" />

            </div>

        <div className="right-container" >
            <form className="input-field">
               <h1 className="heading-1"> <span class="material-symbols-sharp">new_releases</span> Quiz Mine</h1>
               <p>Welcome to Login </p>

                <div className="input-section">
                  <label htmlFor="email"><i class="material-symbols-sharp">mail</i>  Email</label>
                  
                  <input className="input-email" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div className="input-section">
                  <label htmlFor="password"><i class="material-symbols-sharp">lock</i>  Password</label>
                  
                  <input className="input-password" type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                
                <button className="button-login" type="submit">Login</button>
                <button className="button-sign-up" type="submit" >Sign up</button>
                <br/>

                

                
            </form>
        </div>
        </div>

    )
}

export default LoginForm;