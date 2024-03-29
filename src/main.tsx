import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx'
import { NextUIProvider } from "@nextui-org/react";
import './assets/styles/index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './assets/styles/mdstyles.css'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 3600000, // 1 hour - because why not. It is a slow-moving page.
            cacheTime: 3600000, // 1 hour
        }
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <NextUIProvider>
                    <main className="dark text-foreground bg-slate-900 h-full flex flex-col items-center">
                        <App />
                    </main>
                </NextUIProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)
