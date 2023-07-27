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

    return (
        <div className="App">
            <ProductContextProvider>
                <ActionContextProvider>
                    <Header />
                    <Body />
                    <GoToTop />
                    <Chat />
                    <Footer />
                </ActionContextProvider>
            </ProductContextProvider>
        </div>
    )
}

export default App
