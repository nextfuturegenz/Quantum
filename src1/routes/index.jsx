import { createBrowserRouter } from "react-router-dom";
import {
    LoginPage,
    RegisterPage,
    ForgotPasswordPage,
    Dashboard
} from '../pages';

const Router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
    },
    {
        path: "/",
        element: <Dashboard />,
    },
]);

export default Router