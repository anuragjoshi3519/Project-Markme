import React from "react"
import "../css/checkAttendance.css"

function TableEntry(props)
{
    return(
        <div>
            <table className="ui fixed single line celled table">
                <tbody>
                    <tr>
                        <td className="subjects">{props.subject}</td>
                        <td>{props.conducted}</td>
                        <td>{props.attended}</td>
                        <td>{props.percentage}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default TableEntry