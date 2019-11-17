import React, {Component} from "react"
import TeacherMarkTableEntry from "./TeacherMarkTableEntry"
import TeacherAttendance from "./TeacherAttendance" //json file with dummy data
function TeacherSingleEntry(){
    const entries = TeacherAttendance.map(Entry => <TeacherMarkTableEntry 
                                                     key={Entry.id}
                                                     reg_no = {Entry.reg_no}
                                                     first_name={Entry.first_name} 
                                                     last_name={Entry.last_name}
                                                     class_attended={Entry.class_attended}
                                                     percentage={Entry.percentage}
                                                     />)

     return(
         <div>
             {entries}
         </div>
     )
 }

 export default TeacherSingleEntry