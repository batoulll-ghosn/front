import React, { useState } from 'react';
import Content from './Content'; // Import the MenuAndContent component

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // In a real application, you would send a request to your backend for authentication.
        // For this example, we'll simply check if email and password match a hardcoded value.
        if (email === 'user@example.com' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    if (isLoggedIn) {
        // If the user is logged in, render the MenuAndContent component.
        return <Content />;
    }

    return (
        <div className="login-page">
            <h2>Login Page</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
