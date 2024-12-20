import LoginPage from "../pages/LoginPage/LoginPage.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import HomePage from "../pages/HomePage/HomePage.jsx";
import ForgotPassword from "../pages/AuthPage/ForgotPasswordPage.jsx";
import VerifyOtpPage from "../pages/AuthPage/VerifyOtpPage.jsx";
import UpdatePasswordPage from "../pages/AuthPage/UpdatePasswordPage.jsx";
import LandingPage from "../pages/LandingPage/LandingPage.jsx";
import ReceptionInterface from "../pages/ReceptionPage/ReceptionInterface.js";

export const routes = [
    {   
        id: 0,
        path: '/',
        page: LandingPage,
    },
    {   
        id: 1,
        path: '/home',
        page: HomePage,
    },
    {   
        id: 2,
        path: '/login',
        page: LoginPage,
    },
    {   
        id: 3,
        path: '/forgot-password',
        page: ForgotPassword,
    },
    {   
        id: 4,
        path: '/forgot-password/verify-otp',
        page: VerifyOtpPage,
    },
    {   
        id: 5,
        path: '/forgot-password/verify-otp/update-password',
        page: UpdatePasswordPage,
    },
    {   
        id: 6,
        path: '*',
        page: ErrorPage,
    },
    {   
        id: 7,
        path: '/reception',
        page: ReceptionInterface,
    },

];
