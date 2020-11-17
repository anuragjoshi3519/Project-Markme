import React,{Component} from "react"
import Img from 'react-image'
import {Link} from 'react-router-dom'
import logo from '../Resources/images/logo.png'
import "../css/header.css"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
class Header extends Component{
    
    menuContent(){
        return(
            <div className='menu-section'>
                <div className='logo'>
                    <Link to='/'><Img src={logo}/></Link>
                </div>
                <div className='menu-links'>
                    <a className='link' href='#contact-card'>Contact Us</a>
                    <Link className='link' to='/login'>Log In/Sign Up</Link>
                </div>
            </div>
        )
    }    
    headerContent(){
        return(
            <StickyHeader header={
            <div className='header-section'>
                {this.menuContent()}
            </div>}
            />
        )
    }
    render(){
        return(
            this.headerContent()
        )
    }
}

export default Header