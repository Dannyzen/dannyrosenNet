import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <img src={avatar} className="image avatar" alt="FaFacece" />
                    <h1><strong>Hi there, I'm Danny</strong><br /></h1>
                    <br />
                    <h4>I seek to make the world better by enabling creativity within others.</h4>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
