import React, {Component} from "react"
import "../css/checkAttendance.css"
import ReactDOM from 'react-dom';
class MarkTableEntry extends Component
{
    constructor(props){
        super(props)
        this.state = {
            key : props.key,
            reg_no : props.reg_no,
            first_name : props.first_name,
            last_name : props.last_name,
            entry : props.entry
        }
    }
    
    render(){
    
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <tr>
                        <td>{this.state.reg_no}</td>
                        <td>{`${this.state.first_name} ${this.state.last_name}`}</td>
                        <td><button >Block Button</button></td>
                    </tr>
                </table>
            </div>
        )
    }
        
}


export default MarkTableEntry