import React,{Component} from "react"
import Img from 'react-image'
import {Link} from 'react-router-dom'
import logo from '../Resources/images/logo.png'
import "../css/header.css"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
class ProfileHeader extends Component{
    
    menuContent(){
        const {username,account_type} = this.props
        return(
            <div className='menu-section'>
                <div className='logo'>
                    <Img src={logo}/>
                </div>
                <div className='menu-links'>
                    <div className="ui compact menu" style={{ backgroundColor:"#f7f7f7",border:0}}>
                        <div className="link ui simple dropdown item" >
                            View
                            <i className="dropdown icon"></i>
                            <div className="menu">
                            <Link className="item" to={{pathname: '/viewtimetable',
                                                hash: `${username}`,
                                                state: { username,account:account_type }
                                                }}>Timetable</Link>
                            <Link className="item" to={{pathname: '/academiccalender',
                                                hash: `${username}`,
                                                state: { username,account:account_type }
                                                }}>Academic Calender</Link>
                            </div>
                        </div>
                    </div>
                    <Link className='link' to={{pathname: '/login',
                                                hash: '',
                                                state: { username:"" }
                                                }}> Logout</Link>
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