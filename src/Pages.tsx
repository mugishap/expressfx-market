import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CommonContext } from './context'
import NotFound from './pages/404/NotFound'
const Contact = React.lazy(() => import('./pages/Contact/Contact'))
const About = React.lazy(() => import('./pages/AboutUs/About'))
const FAQ = React.lazy(() => import('./pages/FAQ/FAQ'))
const MarketData = React.lazy(() => import('./pages/Market/MarketData'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const Signup = React.lazy(() => import('./pages/Auth/Signup'))
const Login = React.lazy(() => import('./pages/Auth/Login'))


const Pages: React.FC<{}> = () => {

    return (
        <CommonContext.Provider
            value={{

            }}
        >
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/signup" element={<Signup />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/market-data" element={<MarketData />} />
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </CommonContext.Provider>
    )
}

export default Pages