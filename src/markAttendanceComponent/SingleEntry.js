import React, {Component} from "react"
import MarkTableEntry from "./MarkTableEntry"
import attendance from "./attendance" //json file with dummy data
class SingleEntry extends Component{
    render(){
        
        const entries = this.props.studentsData.map(Entry => <MarkTableEntry 
                                                        key={Entry.reg_no}
                                                        reg_no = {Entry.reg_no}
                                                        first_name={Entry.first_name} 
                                                        last_name={Entry.last_name}
                                                        class_id={this.props.class_id}
                                                        />)

        return(
            <div>
                {entries}
            </div>
        )
    }
 }

 export default SingleEntry