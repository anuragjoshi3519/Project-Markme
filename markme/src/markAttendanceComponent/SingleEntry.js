import React, {Component} from "react"
import MarkTableEntry from "./MarkTableEntry"
import attendance from "./attendance" //json file with dummy data
function SingleEntry(){
    const entries = attendance.map(Entry => <MarkTableEntry 
                                                     key={Entry.id}
                                                     reg_no = {Entry.reg_no}
                                                     first_name={Entry.first_name} 
                                                     last_name={Entry.last_name}
                                                     entry={Entry.entry}
                                                     />)

     return(
         <div>
             {entries}
         </div>
     )
 }

 export default SingleEntry