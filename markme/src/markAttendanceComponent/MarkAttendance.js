import React, {Component} from "react"
import SingleEntry from "./SingleEntry"
import "../css/checkAttendance.css"

class MarkAttendance extends Component{
    constructor(){
        super()
        this.state = {
            isLoading : false
        }
    }


    markAttendanceHeading(){
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <thead>
                        <tr>
                            <th>Register No.</th>
                            <th>Name</th>
                            <th>Entry</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }

    render(){
        return(
            <div className="attendance-table-section">
                {this.markAttendanceHeading()}
                <SingleEntry />
            </div>
        )
    }
}

export default MarkAttendance