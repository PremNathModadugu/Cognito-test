import React, {useState, useContext} from 'react';
import {AccountContext} from './Account';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {authenticate} = useContext(AccountContext);
    const onSubmit = (e) => {
        e.preventDefault();
        authenticate(email, password).then(data => {
            console.log("logged in",data);
        }).catch(err => {
            console.error("failed to login", err);
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;