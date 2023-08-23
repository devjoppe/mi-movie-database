import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.tsx'
import {NextUIProvider} from "@nextui-org/react";
import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <NextUIProvider>
                <main className="dark text-foreground bg-background">
                    <App />
                </main>
            </NextUIProvider>
        </BrowserRouter>
    </React.StrictMode>
)
