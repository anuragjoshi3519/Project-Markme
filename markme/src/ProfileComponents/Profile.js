import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from "../homePageComponent/ContactCard"
import ProfileHeader from './ProfileHeader'
import '../css/profile.css'
import Footer from '../Footer'
class Profile extends React.Component{
    state={
        firstName:"Joy",
        lastName:"(aka Hero)",
        accountType:"Student",
        program:"Maa ki Bhakti (Hons)",
        contact:"9999 ..",
        email:"bhaktihishaktihai@durgamail.com",
        dob:"30-05-2005",
        semester: 4,
        profileImage:""
    }
    componentDidMount(){
        const profilePic = require('../Resources/images/userlogo.png');
        this.setState({profileImage:profilePic})

        const {username,account} = this.props.location.state
        if(account==='s'){
            fetch(`http://localhost:4000/userprofile?username=${username}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({
                    firstName:response.data[0].first_name,
                    lastName:response.data[0].last_name,
                    accountType:response.data[0].account_type=='s'?'Student':'Teacher',
                    program:response.data[0].program,
                    contact:response.data[0].phone,
                    email:response.data[0].email,
                    dob:response.data[0].date_of_birth,
                    semester:response.data[0].sem
                })    
            })
            .catch(err=>console.error(err))
        }
        else{
            fetch(`http://localhost:4000/userprofile?username=${username}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({
                    firstName:response.data[0].first_name,
                    lastName:response.data[0].last_name,
                    accountType:response.data[0].account_type=='s'?'Student':'Teacher',
                    program:response.data[0].program,
                    contact:response.data[0].phone,
                    email:response.data[0].email,
                    dob:response.data[0].date_of_birth,
                    semester:response.data[0].sem
                })    
            })
            .catch(err=>console.error(err))
        }
    }
    getUserOption(){
        return(
            this.state.accountType==='Student'?
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
            this.state.accountType==='Student'?
            <div className='user-info'>
                <div>
                    <h2 className="ui header">
                        <i className="edit icon"></i>
                        Course Name : {this.state.program}
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
                        Course Name : {this.state.program}
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
                            <h2>{this.state.firstName} {this.state.lastName}</h2>
                            <h2 style={{marginTop:"0.1em"}}>{this.state.accountType}</h2>
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