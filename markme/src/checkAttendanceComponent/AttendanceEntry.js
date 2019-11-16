import React, {Component} from "react"
import TableEntry from "./TableEntry"
import subjectAttendance from "./subjectAttendance" //json file with dummy data

function AttendanceEntry(){
    const entries = subjectAttendance.map(entry => <TableEntry 
                                                     key={entry.id} 
                                                     subject={entry.subject} 
                                                     conducted={entry.conducted} 
                                                     attended={entry.attended}
                                                     />)

     return(
         <div>
             {entries}
         </div>
     )
 }

 export default AttendanceEntry