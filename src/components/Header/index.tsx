import React from 'react'
import TopNavbar from './Navbar/TopNavbar'
import BottomNavbar from './Navbar/BottomNavbar'

const Header = () => {
    return (
        <>
            <div className="bg-white">
                <div className="bg-white w-full z-[9] relative">
                    <div className="top-header">
                        <TopNavbar />
                    </div>
                </div>
            </div>
            <div className="bottom-header sticky top-0 z-50">
                <BottomNavbar />
            </div>
        </>
    )
}

export default Header
