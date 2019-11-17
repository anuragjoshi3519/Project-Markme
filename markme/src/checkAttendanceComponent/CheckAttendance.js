import React, {Component} from "react"
import AttendanceEntry from "./AttendanceEntry"
import "../css/checkAttendance.css"

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
            <div className="attendance-table-section">
                {this.checkAttendanceHeading()}
                <AttendanceEntry attendance={this.state.attendance} option='checkattendance'/>
            </div>
        )
    }
}

export default CheckAttendance