import { useState} from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div className="main-container">

            <div className="left-container">
                <img src="/picture-1.jpg" className="image-login" alt="quiz-mine" />

            </div>

        <div className="right-container" >
            <form className="input-field" >
               <h1>Login</h1>
               <p>Welcome to Login </p>

                <div className="input-section">
                  <label htmlFor="email">Email</label>
                  <input className="input-email" type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div className="input-section">
                  <label htmlFor="password">Password</label>
                  <input className="input-password" type="password" id="password" name="password" value={password} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <button className="button-login" type="submit">Login</button>
                <button className="button-sign-up" type="submit" >Sign up</button>

                
            </form>
        </div>
        </div>

    )
}

export default LoginForm;