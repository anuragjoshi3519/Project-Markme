import React, {Component} from "react"
import "../css/checkAttendance.css"
import ReactDOM from 'react-dom';
class TeacherMarkTableEntry extends Component
{
    constructor(props){
        super(props)
        this.state = {
            key : props.key,
            reg_no : props.reg_no,
            first_name : props.first_name,
            last_name : props.last_name,
            class_attended:props.class_attended,
            percentage:props.percentage
        }
    }
    
    render(){
    
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <tr>
                        <td>{this.state.reg_no}</td>
                        <td>{`${this.state.first_name} ${this.state.last_name}`}</td>
                        <td>{this.state.class_attended}</td>
                        <td>{this.state.percentage}</td>
                    </tr>
                </table>
            </div>
        )
    }
        
}


export default TeacherMarkTableEntry