import React, {Component} from "react"
import TableEntry from "./TableEntry"
import subjectAttendance from "./subjectAttendance" //json file with dummy data

class AttendanceEntry extends Component{
    
    state={
        attendance:[]
    }
    
    componentDidMount(){
        const username = this.props.username
        fetch(`http://localhost:4000/checkattendancestudent?username=${username}`)
            .then(response => response.json())
            .then(response=>{
                this.setState({attendance:response.data})    
            })
            .catch(err=>console.error(err))
    }

    render(){
        //console.log(this.state.attendance)
        const entries = this.state.attendance.map(entry => <TableEntry  
                                                     subject={entry.subject_name} 
                                                     conducted={entry.number_of_classes} 
                                                     attended={entry.classes_attended}
                                                     />)

        return(
            <div>
                {entries}
            </div>
     )
    }
 }

 export default AttendanceEntry