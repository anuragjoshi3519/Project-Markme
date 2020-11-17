import React, {Component} from "react"
import TeacherMarkTableEntry from "./TeacherMarkTableEntry"
import TeacherAttendance from "./TeacherAttendance" //json file with dummy data
class TeacherSingleEntry extends Component{
    render(){
        const entries = this.props.studentsData.map(Entry => <TeacherMarkTableEntry 
                                                     key={Entry.reg_no}
                                                     reg_no = {Entry.reg_no}
                                                     first_name={Entry.first_name} 
                                                     last_name={Entry.last_name}
                                                     class_attended={Entry.class_attended}
                                                     percentage={((Entry.class_attended/Entry.number_of_classes)*100).toFixed(2)}
                                                     />)

        return(
            <div>
                {entries}
            </div>
        )
    }
 }

 export default TeacherSingleEntry