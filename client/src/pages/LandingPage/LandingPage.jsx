import React from 'react';
import { Link } from 'react-router-dom';
import * as Components from './LandingPage';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <Components.LandingContainer>
            <Components.ContentColumn>
                <Components.HeaderTitle>WELCOME TO</Components.HeaderTitle>
                <Components.Title>Hotel Booking</Components.Title>
                <Components.Subtitle>Every booking, a memory to cherish.</Components.Subtitle>
                <Link to="/home">
                    <Components.GetStartedButton>Get Started</Components.GetStartedButton>
                </Link>
            </Components.ContentColumn>
        </Components.LandingContainer>
    );
};

export default LandingPage;
