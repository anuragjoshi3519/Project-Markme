import React, {Component} from "react"
import CheckAttendance from "../checkAttendanceComponent/CheckAttendance"
import TabularMenu from "./TabluarMenu.js"
import semlist from "./semlist.js"
import "../css/checkPreviousAttendance.css"

class PreviousAttendance extends Component{
    constructor(){
        super()
        this.state = { 
            sem : "Semester 1"
        }

        this.handleChange = this.handleChange.bind(this)
        this.tabularCreation = this.tabularCreation.bind(this)
    }

    handleChange(event){
        const {value} = event.target
        this.setState({ sem : value })
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
            <div className="check-previous-attendance-section">
                <div className = "selection">
                    <p className="select-text">Select Class to show timetable  : </p>
                    <select className="drop-down" value={this.state.sem} onChange={this.handleChange}>
                    {this.tabularCreation()}
                    </select>
                </div>
                <CheckAttendance />
            </div>
        )
    }

}

export default PreviousAttendance