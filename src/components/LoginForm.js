import { useState} from "react";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('login');
    }
    return (
        <div className="main-container">

            <div className="left-container">
                <img src="/public" />
            </div>

        <div className="right-container">
            <form>
               <h1>Login</h1>
               <p>Welcome to Login </p>

                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" value={password} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
        </div>
    )
}

export default LoginForm;