import React, {Component} from "react"
import AttendanceEntry from "./AttendanceEntry"
import Footer from '../Footer'
import "../css/checkAttendance.css"
import LoggedInUserHeader from "../LoggedInUserHeader"
class CheckAttendance extends Component{
    state = {
        attendance:[]
    }

    componentDidMount(){
        const username = this.props.location.state.username
        fetch(`http://localhost:4000/checkattendancestudent?username=${username}`)
        .then(response => response.json())
        .then(response=>{
            this.setState({attendance:response.data})    
        })
        .catch(err=>console.error(err))  
    }

    checkAttendanceHeading=()=>{
        return(
            <div>
                
                <table className="ui fixed single line celled table">
                
                    <thead>
                            <tr>
                                <th key='1'>Subject</th>
                                <th key='2'>Classes Conducted</th>
                                <th key='3'>Classes Attended</th>
                                <th key='4'>Percentage</th>
                            </tr>
                           
                    </thead>
                </table>
            </div>
        )
    }

    render(){
        return(
            <div>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type} />
                <h2 style={{textAlign:'center',marginTop:'6em'}}>ATTENDANCE IN ALL SUBJECTS</h2>
                <div className="attendance-table-section" style={{marginTop:'3em'}}>
                    {this.checkAttendanceHeading()}
                    <AttendanceEntry attendance={this.state.attendance} option='checkattendance'/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CheckAttendance