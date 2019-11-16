import React, {Component} from "react"
import AttendanceEntry from "./AttendanceEntry"
import "../css/checkAttendance.css"

class CheckAttendance extends Component{
    constructor(){
        super()
        this.state = {
            isLoading : false
        }
    }


    checkAttendanceHeading(){
        return(
            <div>
                <table class="ui fixed single line celled table">
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
                <AttendanceEntry />
            </div>
        )
    }
}

export default CheckAttendance