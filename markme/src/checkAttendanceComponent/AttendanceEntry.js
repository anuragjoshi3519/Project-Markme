import React, {Component} from "react"
import TableEntry from "./TableEntry"
import subjectAttendance from "./subjectAttendance" //json file with dummy data

class AttendanceEntry extends Component{
    
    getEntries=()=>{
        const {attendance}=this.props
        if(this.props.option==='checkattendance'){  
            return (attendance.map(entry => <TableEntry
                                                        subject={entry.subject_name} 
                                                        conducted={entry.number_of_classes} 
                                                        attended={entry.classes_attended}
                                                        percentage={((entry.classes_attended/entry.number_of_classes)*100).toFixed(2)}
                                                        />)
            )
        }
        else{
            return ( this.props.attendance.map(entry => <TableEntry  
                                                                    subject={entry.subject_name} 
                                                                    conducted={entry.number_of_classes} 
                                                                    attended={Math.floor((entry.percentage*entry.number_of_classes)/100)}
                                                                    percentage={entry.percentage}
                                                                    />)
            ) 
        }
    }

    render(){
        return(
            <div>
               {this.getEntries()} 
            </div>
     )
    }
 }

 export default AttendanceEntry