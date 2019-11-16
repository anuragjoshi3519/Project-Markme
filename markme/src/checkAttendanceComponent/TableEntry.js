import React, {Component} from "react"
import "../css/checkAttendance.css"

function TableEntry(props)
{
    const percentage = (props.attended/props.conducted)*100;
    const roundPercentage = percentage.toFixed(2)

    return(
        <div>
            <table class="ui fixed single line celled table">
                <tr>
                    <td className="subjects">{props.subject}</td>
                    <td>{props.conducted}</td>
                    <td>{props.attended}</td>
                    <td>{roundPercentage}</td>
                </tr>
            </table>
        </div>
    )
}


export default TableEntry