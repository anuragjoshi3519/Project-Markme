import React,{Component} from "react"
import Img from 'react-image'
import {Link} from 'react-router-dom'
import logo from '../Resources/images/logo.png'
import "../css/header.css"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
class ProfileHeader extends Component{
    
    menuContent(){
        return(
            <div className='menu-section'>
                <div className='logo'>
                    <Link to='/'><Img src={logo}/></Link>
                </div>
                <div className='menu-links'>
                    <a className='link' href='#contact-card'>Contact Us</a>
                    <div className="ui compact menu" style={{ backgroundColor:"#f7f7f7",border:0}}>
                        <div className="link ui simple dropdown item" >
                            View
                            <i className="dropdown icon"></i>
                            <div className="menu">
                            <Link className="item" to='/timetable'>Timetable</Link>
                            <Link className="item" to='/academiccalender'>Acedemic Calender</Link>
                            </div>
                        </div>
                    </div>
                    <Link className='link' to='/login'>Logout</Link>
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

export default ProfileHeader