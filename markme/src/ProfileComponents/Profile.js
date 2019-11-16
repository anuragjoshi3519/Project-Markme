import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from "../homePageComponent/ContactCard"
import ProfileHeader from './ProfileHeader'
import '../css/profile.css'
import Footer from '../Footer'
class Profile extends React.Component{
    state={
        name:"Joy (aka Hero)",
        userType:"Student",
        courseName:"Maa ki Bhakti (Hons)",
        contact:"9999 ..",
        email:"bhaktihishaktihai@durgamail.com",
        dob:"30-05-2005",
        semester: 4,
        profileImage:""
    }
    componentDidMount(){
        const profilePic = require('../Resources/images/hero.png');
        this.setState({profileImage:profilePic})
    }
    getUserOption(){
        return(
            this.state.userType==='Student'?
            <div className='user-options'>
                <div className="option-element ui big button">
                    <Link to='/checkattendence'>
                        <div className='button-text'>Check Attendence</div>
                    </Link>
                </div>
                <div className="option-element ui big button">
                    <Link to='/bunkassist'>
                        <div className='button-text'>Bunk Assist</div>
                    </Link>
                </div> 
                <div className="option-element ui big button">
                    <Link to='/checkattendence'>
                        <div className='button-text'>Attendence History</div>
                    </Link>    
                </div> 
                <div className="option-element ui big button">
                    <Link to='/previousattendence'>
                    <div className='button-text'>Previous Attendence</div>
                    </Link>
                </div>
            </div>
            :  
            <div className='user-options'>  
                <h2 style={{color:'gray'}}>Features :</h2>   
                <div className="option-element ui big button">
                    <Link to='/timetable'>
                        <div className='button-text'>Add New Class</div>
                    </Link>    
                </div>
                <div className="option-element ui big button">
                    <Link to='/timetable'>
                        <div className='button-text'>Add Timetable</div>
                    </Link>    
                </div> 
                <div className="option-element ui big button">
                    <Link to='/academiccalender'>
                        <div className='button-text'>Add Academic Calender</div>
                    </Link>
                </div> 
                <div className="option-element ui big button">
                    <Link to='/timetable'>
                        <div className='button-text'>Update Timetable</div>
                    </Link>
                </div>
            </div>                                                                                
            )
    }
    getUserInfo(){
        return(
            this.state.userType==='Student'?
            <div className='user-info'>
                <div>
                    <h2 className="ui header">
                        <i className="edit icon"></i>
                        Course Name : {this.state.courseName}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="phone icon"></i>
                        Contact : {this.state.contact}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="envelope icon"></i>
                        Email ID : {this.state.email}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="birthday cake icon"></i>
                        D.O.B : {this.state.dob}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="calendar alternate icon"></i>
                        Semester : {this.state.semester}
                    </h2>
                </div>                                                                                               
            </div>
            :
            <div className='user-info'>
                <div>
                    <h2 className="ui header">
                        <i className="edit icon"></i>
                        Course Name : {this.state.courseName}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="phone icon"></i>
                        Contact : {this.state.contact}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="envelope icon"></i>
                        Email ID : {this.state.email}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="birthday cake icon"></i>
                        D.O.B : {this.state.dob}
                    </h2>
                </div>
                <div>
                    <h2 className="ui header">
                        <i className="calendar alternate icon"></i>
                        Semester : {this.state.semester}
                    </h2>
                </div>                                                                                              
            </div>
        )
    }
    render(){
        return(
            <div>
                <ProfileHeader/>
                <div className='profile-div'>
                    <div className='user-profile'>
                        <div className='background-img'></div>
                        <div className="profile-img-section">
                            <img className="profile-img" src={this.state.profileImage}/>
                            <h2>{this.state.name}</h2>
                            <h2 style={{marginTop:"0.1em"}}>{this.state.userType}</h2>
                        </div>
                        {this.getUserInfo()}   
                    </div>
                    {this.getUserOption()}
                </div>
                <ContactCard />
                <Footer/>
            </div>
        )
    }
}
export default Profile