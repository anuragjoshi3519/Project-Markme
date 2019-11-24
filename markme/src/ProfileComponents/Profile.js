import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from "../homePageComponent/ContactCard"
import ProfileHeader from './ProfileHeader'
import '../css/profile.css'
import Footer from '../Footer'
class Profile extends React.Component{
    state={
        firstName:"Abhishek",
        middleName:"",
        lastName:"Joshi",
        accountType:"Admin",
        program:"MCA",
        contact:"9902676373",
        email:"abhishekjoshi@protonmail.com",
        dob:"11-12-1997",
        semester: 4,
        profileImage:"",
        subjectTeaching:[]
    }
    componentDidMount(){
        const profilePic = require('../Resources/images/userlogo.png');
        this.setState({profileImage:profilePic})

        const {username,account} = this.props.location.state
        if(account==='s'){
            fetch(`http://localhost:4000/studentprofile?username=${username}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({
                    firstName:response.data[0].first_name,
                    middleName:response.data[0].middle_name,
                    lastName:response.data[0].last_name,
                    accountType:response.data[0].account_type=='s'?'Student':response.data[0].account_type=='t'?'Teacher':'Admin',
                    program:response.data[0].program,
                    contact:response.data[0].phone,
                    email:response.data[0].email,
                    dob:response.data[0].date_of_birth,
                    semester:response.data[0].sem
                })    
            })
            .catch(err=>console.error(err))
        }
        else if(account==='t'){
            fetch(`http://localhost:4000/teacherprofiledata?username=${username}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({
                    firstName:response.data[0].first_name,
                    middleName:response.data[0].middle_name,
                    lastName:response.data[0].last_name,
                    accountType:response.data[0].account_type=='s'?'Student':response.data[0].account_type=='t'?'Teacher':'Admin',
                    program:response.data[0].program,
                    contact:response.data[0].phone,
                    email:response.data[0].email,
                    dob:response.data[0].date_of_birth,
                })    
            })
            .catch(err=>console.error(err))
        }
    }

    getSubjects=()=>{
        const username = this.props.location.state.username
        fetch(`http://localhost:4000/teachersubjects?username=${username}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({subjectTeaching:response.data})    
            })
            .catch(err=>console.error(err))
        const subjects=this.state.subjectTeaching.map((ele)=><span>{ele.subject_name} / </span>)
        return subjects     
    }

    getUserOption(){
        const account_type = this.state.accountType=='Student'?'s':this.state.accountType=='Teacher'?'t':'a'
        return(
            this.state.accountType==='Student'?
            <div className='user-options'>
                <div className="option-element ui big button">
                    <Link to={{pathname: '/checkattendence',
                              hash: `${this.props.location.state.username}`,
                              state: { username:this.props.location.state.username,account_type}
                              }}>
                        <div className='button-text'>Check Attendence</div>
                    </Link>
                </div>
                <div className="option-element ui big button">
                    <Link to='/bunkassist'>
                        <div className='button-text'>Bunk Assist</div>
                    </Link>
                </div>
                <div className="option-element ui big button">
                    <Link to={{pathname: '/previousattendence',
                              hash: `${this.props.location.state.username}`,
                              state: { username:this.props.location.state.username,sem:this.state.semester,account_type}
                              }}>
                    <div className='button-text'>Previous Attendence</div>
                    </Link>
                </div>
            </div>
            :this.state.accountType==='Teacher'?
            <div className='user-options'>   
                <div className="option-element ui big button">
                    <Link to={{pathname: '/teachermarkattendance',
                              hash: `${this.props.location.state.username}`,
                              state: { username:this.props.location.state.username,choose:'checkattendance',account_type }
                              }}>
                        <div className='button-text'>Check Attendance</div>
                    </Link>    
                </div>
                <div className="option-element ui big button">
                    <Link to={{pathname: '/markattendence',
                              hash: `${this.props.location.state.username}`,
                              state: { username:this.props.location.state.username,account_type }
                              }}>
                        <div className='button-text'>Mark Attendance</div>
                    </Link>    
                </div> 
                <div className="option-element ui big button">
                    <Link to={{pathname: '/teachermarkattendance',
                              hash: `${this.props.location.state.username}`,
                              state: { username:this.props.location.state.username,choose:'shortattendance',account_type }
                              }}>
                        <div className='button-text'>Print Short Attendance</div>
                    </Link>
                </div> 
            </div> 
            :
            <div className='user-options' style={{height:'75%',display:"flex",justifyContent:'space-around'}}>   
                <div className="option-element ui big button">
                    <Link to={{pathname: '/addteacher',
                            hash: `${this.props.location.state.username}`,
                            state: { username:this.props.location.state.username,account_type }
                            }}>
                        <div className='button-text'>Add New Teacher</div>
                    </Link>    
                </div>
                <div className="option-element ui big button">
                    <Link to={{pathname: '/addstudent',
                            hash: `${this.props.location.state.username}`,
                            state: { username:this.props.location.state.username,account_type }
                            }}>
                        <div className='button-text'>Add New Students</div>
                    </Link>    
                </div> 
                <div className="option-element ui big button">
                    <Link to={{pathname: '/addsem',
                            hash: `${this.props.location.state.username}`,
                            state: { username:this.props.location.state.username,account_type }
                            }}>
                        <div className='button-text'>Add New Semester</div>
                    </Link>
                </div>
                <div className="option-element ui big button">
                    <Link to={{pathname: '/addbatch',
                            hash: `${this.props.location.state.username}`,
                            state: { username:this.props.location.state.username,account_type }
                            }}>
                        <div className='button-text'>Add New Batch</div>
                    </Link>
                </div>
                <div className="option-element ui big button">
                    <Link to={{pathname: '/addclass',
                            hash: `${this.props.location.state.username}`,
                            state: { username:this.props.location.state.username,account_type }
                            }}>
                        <div className='button-text'>Add New Class</div>
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
                    <h3 className="ui header">
                        <i className="edit icon"></i>
                        Course Name : {this.state.program}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="phone icon"></i>
                        Contact : {this.state.contact}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="envelope icon"></i>
                        Email ID : {this.state.email}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="birthday cake icon"></i>
                        D.O.B : {this.state.dob}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="calendar alternate icon"></i>
                        Semester : {this.state.semester}
                    </h3>
                </div>                                                                                               
            </div>
            :this.state.accountType==='Teacher'?
            <div className='user-info'>
                <div>
                    <h3 className="ui very big header">
                    <span>
                        <i className="edit big icon"></i>
                        Subjects Teaching : {this.getSubjects()}
                    </span>
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="phone icon"></i>
                        Contact : {this.state.contact}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="envelope icon"></i>
                        Email ID : {this.state.email}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="birthday cake icon"></i>
                        D.O.B : {this.state.dob}
                    </h3>
                </div>                                                                                            
            </div>
            :
            <div className='user-info'>
                <div>
                    <h3 className="ui header">
                        <i className="phone icon"></i>
                        Contact : {this.state.contact}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="envelope icon"></i>
                        Email ID : {this.state.email}
                    </h3>
                </div>
                <div>
                    <h3 className="ui header">
                        <i className="birthday cake icon"></i>
                        D.O.B : {this.state.dob}
                    </h3>
                </div>                                                                                            
            </div>
        )
    }
    render(){
        const account_type = this.state.accountType=='Student'?'s':'t'
        return(
            <div>
                <ProfileHeader username={this.props.location.state.username} account_type={account_type}/>
                <div className='profile-div'>
                    <div className='user-profile'>
                        <div className='background-img'></div>
                        <div className="profile-img-section">
                            <img className="profile-img" src={this.state.profileImage}/>
                            <h2>{this.state.firstName} {this.state.middleName} {this.state.lastName}</h2>
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