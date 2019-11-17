import React, {Component} from "react"
import "../css/checkAttendance.css"

function TableEntry(props)
{
    return(
        <div>
            <table class="ui fixed single line celled table">
                <tr>
                    <td className="subjects">{props.subject}</td>
                    <td>{props.conducted}</td>
                    <td>{props.attended}</td>
                    <td>{props.percentage}</td>
                </tr>
            </table>
        </div>
    )
}


export default TableEntry