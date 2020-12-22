import React from 'react'
import LoginPage from './login/LoginPage';
import { BrowserRouter } from "react-router-dom";
export default function Page() {
    return (
        <BrowserRouter>
            <div>
                <LoginPage />
            </div>
        </BrowserRouter>
    )
}
