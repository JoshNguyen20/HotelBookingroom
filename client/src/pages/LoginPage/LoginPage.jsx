// src/pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { login, register } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import * as Components from './LoginPageStyles';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [signIn, toggle] = React.useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            console.log('Login successful:', data);
            // Lưu token vào localStorage hoặc state
            // localStorage.setItem('token', data.token);
            navigate('/home');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = await register(username, email, password);
            console.log('Registration successful:', data);
            toggle(true); // Chuyển sang chế độ đăng nhập
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <Components.Background>
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleRegister}>
                        <Components.Title1>Create Account</Components.Title1>
                        <Components.Retitle href='#'>or use your Phone number/Email for registration</Components.Retitle>
                        <Components.Input
                            type='text'
                            placeholder='Name'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <Components.Input
                            type='email'
                            placeholder='Phone number or Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Components.Input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Components.Button type="submit">Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>
                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form onSubmit={handleSubmit}>
                        <Components.Title1>Sign In</Components.Title1>
                        <Components.Retitle href='#'>or use your Phone number/Email and password</Components.Retitle>
                        <Components.Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Components.Input
                            type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Components.Anchor href='/forgot-password'>Forgot your password?</Components.Anchor>
                        <Components.Button type="submit">Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>
                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title2>Welcome Back!</Components.Title2>
                            <Components.Paragraph>Enter your personal details to use all site features</Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>Sign In</Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title2>Hello, Friend!</Components.Title2>
                            <Components.Paragraph>Register to use all site features</Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>Sign Up</Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </Components.Background>
    );
};

export default LoginPage;