import React, {Component} from "react"
import "../css/timetable.css"
class TimeTable extends Component{
    constructor(){
        super()
        this.state = {
            monday : {
                eight : "subject",
                nine : "subject",
                ten : "subject",
                eleven : "subject",
                twelve : "subject",
                thirteen : "Lunch Break",
                fourteen : "subject",
                fifteen : "subject",
                sixteen : "subject",
                seventeen : "subject"
            },
            tuesday : {
                eight : "subject",
                nine : "subject",
                ten : "subject",
                eleven : "subject",
                twelve : "subject",
                thirteen : "Lunch Break",
                fourteen : "subject",
                fifteen : "subject",
                sixteen : "subject",
                seventeen : "subject"
            },
            wednesday : {
                eight : "subject",
                nine : "subject",
                ten : "subject",
                eleven : "subject",
                twelve : "subject",
                thirteen : "Lunch Break",
                fourteen : "subject",
                fifteen : "subject",
                sixteen : "subject",
                seventeen : "subject"
            },
            thursday : {
                eight : "subject",
                nine : "subject",
                ten : "subject",
                eleven : "subject",
                twelve : "subject",
                thirteen : "Lunch Break",
                fourteen : "subject",
                fifteen : "subject",
                sixteen : "subject",
                seventeen : "subject"
            },
            friday : {
                eight : "subject",
                nine : "subject",
                ten : "subject",
                eleven : "subject",
                twelve : "subject",
                thirteen : "Lunch Break",
                fourteen : "subject",
                fifteen : "subject",
                sixteen : "subject",
                seventeen : "subject"
            },
            isLoading : false,
            typeOfUser : "t",
            class : "noneSelected"
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    componentDidMount(){
        //this.setState({ isLoading : true })
        //add code to fetch timetable, based on user
        //this.setState({ isLoading : false, typeOfUser : "a/s/t" })
    }

    handleChange(event){
        const {value} = event.target
        this.setState({ class : value })
    }

    timeTableContent(){
        return(
                <table id="table-show" class="ui fixed single line celled table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>8 - 9 AM</th>
                            <th>9 - 10 AM</th>
                            <th>10 - 11 AM</th>
                            <th>11 AM - 12 PM</th>
                            <th>12 - 1 PM</th>
                            <th>1 - 2 PM</th>
                            <th>2 - 3 PM</th>
                            <th>3 - 4 PM</th>
                            <th>4 - 5 PM</th>
                            <th>5 - 6 PM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="days">MONDAY</td>
                            <td>{this.state.monday.eight}</td>
                            <td>{this.state.monday.nine}</td>
                            <td>{this.state.monday.ten}</td>
                            <td>{this.state.monday.eleven}</td>
                            <td>{this.state.monday.twelve}</td>
                            <td className="lunchbreak">{this.state.monday.thirteen}</td>
                            <td>{this.state.monday.fourteen}</td>
                            <td>{this.state.monday.fifteen}</td>
                            <td>{this.state.monday.sixteen}</td>
                            <td>{this.state.monday.seventeen}</td>
                        </tr>
                        <tr>
                            <td className="days">TUESDAY</td>
                            <td>{this.state.tuesday.eight}</td>
                            <td>{this.state.tuesday.nine}</td>
                            <td>{this.state.tuesday.ten}</td>
                            <td>{this.state.tuesday.eleven}</td>
                            <td>{this.state.tuesday.twelve}</td>
                            <td className="lunchbreak">{this.state.tuesday.thirteen}</td>
                            <td>{this.state.tuesday.fourteen}</td>
                            <td>{this.state.tuesday.fifteen}</td>
                            <td>{this.state.tuesday.sixteen}</td>
                            <td>{this.state.tuesday.seventeen}</td>
                        </tr>
                        <tr>
                            <td className="days">WEDNESDAY</td>
                            <td>{this.state.wednesday.eight}</td>
                            <td>{this.state.wednesday.nine}</td>
                            <td>{this.state.wednesday.ten}</td>
                            <td>{this.state.wednesday.eleven}</td>
                            <td>{this.state.wednesday.twelve}</td>
                            <td className="lunchbreak">{this.state.wednesday.thirteen}</td>
                            <td>{this.state.wednesday.fourteen}</td>
                            <td>{this.state.wednesday.fifteen}</td>
                            <td>{this.state.wednesday.sixteen}</td>
                            <td>{this.state.wednesday.seventeen}</td>
                        </tr>
                        <tr>
                            <td className="days">THURSDAY</td>
                            <td>{this.state.thursday.eight}</td>
                            <td>{this.state.thursday.nine}</td>
                            <td>{this.state.thursday.ten}</td>
                            <td>{this.state.thursday.eleven}</td>
                            <td>{this.state.thursday.twelve}</td>
                            <td className="lunchbreak">{this.state.thursday.thirteen}</td>
                            <td>{this.state.thursday.fourteen}</td>
                            <td>{this.state.thursday.fifteen}</td>
                            <td>{this.state.thursday.sixteen}</td>
                            <td>{this.state.thursday.seventeen}</td>
                        </tr>
                        <tr>
                            <td className="days">FRIDAY</td>
                            <td>{this.state.friday.eight}</td>
                            <td>{this.state.friday.nine}</td>
                            <td>{this.state.friday.ten}</td>
                            <td>{this.state.friday.eleven}</td>
                            <td>{this.state.friday.twelve}</td>
                            <td className="lunchbreak">{this.state.friday.thirteen}</td>
                            <td>{this.state.friday.fourteen}</td>
                            <td>{this.state.friday.fifteen}</td>
                            <td>{this.state.friday.sixteen}</td>
                            <td>{this.state.friday.seventeen}</td>
                        </tr>
                    </tbody>
                </table>
        )
    }

    generalTimeTableContent(){ //for student and teacher account
        return(
            <div className="timetable-section">
                {this.timeTableContent()}
            </div>
        )
    }

    adminTimeTableContent(){
        return(
                <div className = "selection">
                    <p className="select-text">Select Class to show timetable  : </p>
                    <select className="drop-down" value={this.state.class} onChange={this.handleChange}>
                        <option value="ClassA">ClassA</option>
                        <option value="ClassB">ClassB</option>
                        <option value="ClassC">ClassC</option>
                        <option value="ClassD">ClassD</option>
                    </select>
                </div>
        )
    }

    render(){
        if(this.state.typeOfUser==="t")
        {
            if(this.state.class === "noneSelected")
            {
                return (this.adminTimeTableContent())   
            }       

            return (
                <div className="render-for-admin">
                    {this.adminTimeTableContent()}
                    {this.timeTableContent()}
                </div>
            )
        }   
        
        return (this.generalTimeTableContent())
    }
}

export default TimeTable