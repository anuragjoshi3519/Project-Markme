import React, {Component} from "react"
import AttendanceEntry from "./AttendanceEntry"
import Footer from '../Footer'
import "../css/checkAttendance.css"
import LoggedInUserHeader from "../LoggedInUserHeader"
class CheckAttendance extends Component{
    constructor(){
        super()
        this.state = {
            attendance:[],
            isLoading : false
        }
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

    checkAttendanceHeading(){
        return(
            <div>
                <table className="ui fixed single line celled table">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Classes Conducted</th>
                            <th>Classes Attended</th>
                            <th>Percentage</th>
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
                <div className="attendance-table-section" style={{marginTop:'10em'}}>
                    {this.checkAttendanceHeading()}
                    <AttendanceEntry attendance={this.state.attendance} option='checkattendance'/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default CheckAttendance