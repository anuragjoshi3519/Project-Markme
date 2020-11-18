import React, {Component} from "react"
import "../css/checkAttendance.css"
import '../css/markattendance.css'
class MarkTableEntry extends Component
{
    constructor(props){
        super(props)
        this.state = {
            key : props.key,
            reg_no : props.reg_no,
            first_name : props.first_name,
            last_name : props.last_name,
            entry : props.entry,
            no_of_hours:1,
            class_id:props.class_id
        }
    }

    handlePresentButton=()=>{
        fetch(`http://localhost:4440/markattendance?reg_no=${this.state.reg_no}&class_id=${this.state.class_id}&entry=P&no_of_hours=${this.state.no_of_hours}`)
        .then(response => response.json())
        .catch(err=>console.error(err))
    }

    render(){
    
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <tr>
                        <td>{this.state.reg_no}</td>
                        <td>{`${this.state.first_name} ${this.state.last_name}`}</td>
                        <td>
                            <h3 style={{display:'inline'}}>Present :  </h3> <input type="checkbox" className="ui big checkbox" onClick={this.handlePresentButton}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
        
}


export default MarkTableEntry