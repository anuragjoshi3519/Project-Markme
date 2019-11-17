import React, {Component} from "react"
import AttendanceEntry from "../checkAttendanceComponent/AttendanceEntry"
import TabularMenu from "./TabluarMenu.js"
import semlist from "./semlist.js"
import "../css/checkPreviousAttendance.css"

class PreviousAttendance extends Component{
    constructor(){
        super()
        this.state = {
            sem:2,
            attendance:[]
        }

        this.handleChange = this.handleChange.bind(this)
        this.tabularCreation = this.tabularCreation.bind(this)
    }

    componentDidMount(){
        const username = this.props.location.state.username
        fetch(`http://localhost:4000/previousattendance?username=${username}&sem=${this.state.sem}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({attendance:response.data})    
            })
            .catch(err=>console.error(err))
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
        console.log(this.state.attendance)
        return(
            <div className="check-previous-attendance-section">
                <div className = "selection">
                    <p className="select-text">Select Class to show timetable  : </p>
                    <select className="ui drop-down" value={this.state.sem} onChange={this.handleChange}>
                    {this.tabularCreation()}
                    </select>
                </div>
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
                <AttendanceEntry attendance={this.state.attendance} option='previousattendance'/>
            </div>
        )
    }

}

export default PreviousAttendance