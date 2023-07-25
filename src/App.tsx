import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import ProductContextProvider from './contexts/ProductContext'
import ActionContextProvider from './contexts/ActionContext'
import { GoToTop } from './components/FloatButton'
import Chat from './components/FloatButton/Chat'

function App() {
    const [showButton, setShowButton] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > window.innerHeight) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div className="App">
            <ProductContextProvider>
                <ActionContextProvider>
                    <Header />
                    <Body />
                    {showButton && <GoToTop />}
                    <Chat />
                    <Footer />
                </ActionContextProvider>
            </ProductContextProvider>
        </div>
    )
}

export default App
