import React,{Component} from "react"
import Img from 'react-image'
import logo from '../Resources/images/logo.png'
import {Link} from 'react-router-dom'
import "../css/header.css"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
class LoginHeader extends Component{
    menuContent(){
        return(
            <div className='menu-section'>
                <div className='logo'>
                    <Link to='/'><Img src={logo}/></Link>
                </div>
                <div className='menu-links'>
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/bunkassist'>Bunk Assist</Link>
                    <a className='link' href='#contact-card'>Contact Us</a>
                </div>
            </div>
        )
    }    
    headerContent(){
        return(
            <div className='header-section'>
                {this.menuContent()}
            </div>
        )
    }
    render(){
        return(
            <StickyHeader header={
            <div className='header-section'>
                {this.menuContent()}
            </div>}
            />
        )
    }
}

export default LoginHeader