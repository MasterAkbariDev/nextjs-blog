import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const MainLayout = ({ children }) => {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout