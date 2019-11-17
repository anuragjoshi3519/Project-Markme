import React, {Component} from "react"
import TeacherSingleEntry from "./TeacherSingleEntry"
import "../css/checkAttendance.css"
import TabularMenu from "./TabluarMenu"
import semlist from "./semlist.js"
import Team from "./Team"
class TeacherMarkAttendance extends Component{
    constructor(){
        super()
        this.state = {
            isLoading : false,
            sem : "Semester 1"
        }
        this.handleChange = this.handleChange.bind(this)
        this.tabularCreation = this.tabularCreation.bind(this)
    }

    handleChange(event){
        const {value} = event.target
        this.setState({ sem : value })
    }
    markAttendanceHeading(){
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <thead>
                        <tr>
                            <th>Register No.</th>
                            <th>Name</th>
                            <th>class Attended</th>
                            <th>percentage</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
    tabularCreation(){
        const entries = semlist.map(entry => <TabularMenu
            key = {entry.id}
            sem = {entry.sem}               
         />)

        return(
            <div>
                {entries}
            </div>
        )
    }
    render(){
        return(
            <div>
                <div className = "selection">
                    <p className="select-text">Select Class: </p>
                    <select className="drop-down" value={this.state.sem} onChange={this.handleChange}>
                    {Team.map((team) => <option key={team.value} value={team.value}>{team.display}</option>)}
                    {this.tabularCreation()}
                    </select>
                </div>
                <div className="attendance-table-section">
                    {this.markAttendanceHeading()}
                    <TeacherSingleEntry />
                </div>
            </div>
        )
    }
}

export default TeacherMarkAttendance