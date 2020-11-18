import React, {Component} from "react"
import AttendanceEntry from "../checkAttendanceComponent/AttendanceEntry"
import TabularMenu from "./TabluarMenu.js"
import semlist from "./semlist.js"
import "../css/checkPreviousAttendance.css"
import Footer from '../Footer'
import LoggedInUserHeader from "../LoggedInUserHeader"
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
        fetch(`http://localhost:4440/previousattendance?username=${username}&sem=${this.state.sem}`)
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
        const username = this.props.location.state.username
        fetch(`http://localhost:4440/previousattendance?username=${username}&sem=${this.state.sem}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({attendance:response.data})    
            })
            .catch(err=>console.error(err))
        return(
            <div>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type} />
                <div className="check-previous-attendance-section">
                    <div className = "selection">
                        <p className="select-text">Select semester : </p>
                        <select className="drop-down" value={this.state.sem} onChange={this.handleChange}>
                            <option value={1}>Sem-1</option>
                            <option value={2}>Sem-2</option>
                            <option value={3}>Sem-3</option>
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
                <Footer/>
            </div>
        )
    }

}

export default PreviousAttendance