import React from 'react'
import './header.css'

class Header extends React.Component {
    constructor(){
        super()
    }

    render(){
        return(
            <div class="header">
                <div class="name">Perfected</div>
                <div class="extra">Optimize Your Schedule</div>
                <div class="navigation">
                    <div id="home" class="navbut">Home</div>
                    <div id="about" class="navbut">About Us</div>
                    <div id="contact" class="navbut">Contact Us</div>
                </div>
            </div>
        )
    }
};

export default Header