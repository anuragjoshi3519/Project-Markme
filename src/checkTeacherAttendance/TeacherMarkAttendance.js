import React, {Component} from "react"
import "../css/checkAttendance.css"
import TabularMenu from "./TabluarMenu"
import semlist from "./semlist.js"
import Footer from '../Footer'
import LoggedInUserHeader from "../LoggedInUserHeader"
class TeacherMarkAttendance extends Component{
    constructor(){
        super()
        this.state = {
            isLoading : false,
            class_id : "class1",
            studentsData:[],
            batchesTaught:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.tabularCreation = this.tabularCreation.bind(this)
    }

    componentDidMount(){
        const username = this.props.location.state.username
        fetch(`http://localhost:4440/checkattendanceteacher?username=${username}&class_id=${this.state.class_id}`)
        .then(response => response.json())
        .then(response=>{
            this.setState({studentsData:response.data})    
        })
        .catch(err=>console.error(err))

        fetch(`http://localhost:4440/getbatches?username=${username}`)
        .then(response => response.json())
        .then(response=>{
            this.setState({batchesTaught:response.data})    
        })
        .catch(err=>console.error(err))        
    }

    handleChange(event){
        const {value} = event.target
        this.setState({ class_id : value })
    }

    markAttendanceHeading(){
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <thead>
                        <tr>
                            <th>Register No.</th>
                            <th>Name</th>
                            <th>class Attended</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
    tabularCreation(){
        const entries = semlist.map(entry => <TabularMenu
            key = {entry.id}
            sem = {entry.sem}               
         />)

        return(
            <div>
                {entries}
            </div>
        )
    }

    printClassInfo(){
        let i=0
        const {batchesTaught}=this.state
        for(i=0;i<batchesTaught.length;i+=1){
            if(this.state.class_id===batchesTaught[i].class_id){
            return (<h2>Subject : {batchesTaught[i].subject_name}  /  Program : {batchesTaught[i].program}</h2>)
            }
        }
    }

    teacherMarkTableEntry(reg_no,first_name,last_name,class_attended,number_of_classes){
        const percentage = ((class_attended/number_of_classes)*100).toFixed(2)
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <tr>
                        <td>{reg_no}</td>
                        <td>{`${first_name} ${last_name}`}</td>
                        <td>{class_attended}</td>
                        {percentage>=75?<td style={{backgroundColor:'#75bb3c'}}>{percentage}</td >:<td style={{backgroundColor:'#d44444'}}>{percentage}</td>}
                    </tr>
                </table>
            </div>
        )
    }
        

    render(){
        const username = this.props.location.state.username
        fetch(`http://localhost:4440/checkattendanceteacher?username=${username}&class_id=${this.state.class_id}`)
        .then(response => response.json())
        .then(response=>{
            this.setState({studentsData:response.data})    
        })
        .catch(err=>console.error(err))
        const choose=this.props.location.state.choose
        if(choose==='checkattendance'){
            return(
                <div>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type} />
                    <div className="check-attendance-section" style={{margin:'5em',height:"100vh"}}>
                        <div className = "selection">
                            <p className="select-text">Select Class: </p>
                            <select className="drop-down" value={this.state.class_id} onChange={this.handleChange}>
                            {this.state.batchesTaught.map((ele)=><option value={ele.class_id}>{ele.subject_name}</option>)}
                            {this.tabularCreation()}
                            </select>
                        </div>
                        <div className="attendance-table-section">
                            {this.printClassInfo()}
                            {this.markAttendanceHeading()}
                            {this.state.studentsData.map(Entry => this.teacherMarkTableEntry(Entry.reg_no,Entry.first_name,Entry.last_name,Entry.class_attended,Entry.number_of_classes))}
                        </div>
                    </div>
                <Footer/>
                </div>
            )
        }
        else{
            const shortAttendanceData = this.state.studentsData.filter((entry)=>((entry.class_attended/entry.number_of_classes)*100).toFixed(2)<75)
            return(
                <div>
                    <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type} />
                    <div className="check-attendance-section" style={{margin:'5em',height:"100vh"}}>
                        <div className = "selection">
                            <p className="select-text">Select Class: </p>
                            <select className="drop-down" value={this.state.class_id} onChange={this.handleChange}>
                            {this.state.batchesTaught.map((ele)=><option value={ele.class_id}>{ele.subject_name}</option>)}
                            {this.tabularCreation()}
                            </select>
                        </div>
                        <div className="attendance-table-section" >
                            {this.printClassInfo()}
                            {this.markAttendanceHeading()}
                            {shortAttendanceData.map(Entry => this.teacherMarkTableEntry(Entry.reg_no,Entry.first_name,Entry.last_name,Entry.class_attended,Entry.number_of_classes))}
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
        
    }
}

export default TeacherMarkAttendance