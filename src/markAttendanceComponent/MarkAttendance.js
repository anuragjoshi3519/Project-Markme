import React, {Component} from "react"
import "../css/checkAttendance.css"
import LoggedInUserHeader from "../LoggedInUserHeader"
import Footer from '../Footer'
class MarkAttendance extends Component{
    constructor(){
        super()
        this.state = {
            isLoading : false,
            studentsData:[],
            class_id:'class1',
            batchesTaught:[],
            no_of_hours:1,
            presentStudents:[]
        }
    }

    componentDidMount(){
        const username = this.props.location.state.username
        fetch(`http://localhost:4000/getbatches?username=${username}`)
        .then(response => response.json())
        .then(response=>{
            this.setState({batchesTaught:response.data})    
        })
        .catch(err=>console.error(err)) 

        fetch(`http://localhost:4000/studentlistforattendance?class_id='${this.state.class_id}'`)
        .then(response => response.json())
        .then(response=>{
            this.setState({studentsData:response.data})    
        })
        .catch(err=>console.error(err))
    }

    handleSubmitButton=()=>{
        const username = this.props.location.state.username

        for(let i=0;i<this.state.presentStudents.length;i+=1){
            fetch(`http://localhost:4000/markattendance?reg_no=${this.state.presentStudents[i]}&class_id=${this.state.class_id}&entry=P&no_of_hours=${this.state.no_of_hours}`)
            .then(response => response.json())
            .catch(err=>console.error(err))      
        }

        fetch(`http://localhost:4000/updateclasses?class_id='${this.state.class_id}'&no_of_hours=${this.state.no_of_hours}`)
        .then(response => response.json())
        .catch(err=>console.error(err))

        alert('Attendence Submitted Successfully.')
        this.setState({no_of_hours:0})
        this.props.history.push({
            pathname: '/userprofile/',
            hash: `${username}`,
            state: { username,account:this.props.location.state.account_type }
        })

    }

    handlePresentButton=(presentId,absentId,reg_no)=>{
        document.getElementById(presentId).style.backgroundColor='green'
        document.getElementById(absentId).style.backgroundColor=''
        this.setState(state=>{
            if(state.presentStudents.includes(reg_no)===false){
                const presentStudents=state.presentStudents.concat(reg_no)
                return{presentStudents}
            }
        })
    }

    handleAbsentButton=(presentId,absentId,reg_no)=>{
        document.getElementById(absentId).style.backgroundColor='red'
        document.getElementById(presentId).style.backgroundColor=''
        this.setState(state=>{
            if(state.presentStudents.includes(reg_no)){
                const presentStudents=state.presentStudents.filter(item=>item!=reg_no)
                return{presentStudents}
            }
        })
    }

    markTableEntry(reg_no,first_name,last_name){
        const presentId = reg_no + '1'
        const absentId = reg_no + '2'
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <tr>
                        <td>{reg_no}</td>
                        <td>{`${first_name} ${last_name}`}</td>
                        <td>
                            <button id={presentId} className="present-button ui big button" onClick={()=>this.handlePresentButton(presentId,absentId,reg_no)}>Present</button>
                            <button id={absentId} className="absent-button ui big button" onClick={()=>this.handleAbsentButton(presentId,absentId,reg_no)}>Absent</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    handleChange=(event)=>{
        const {value} = event.target
        this.setState({ class_id : value })
    }

    handleInputChange=(event)=>{
        const {value} = event.target
        this.setState({ no_of_hours : value })
    }

    markAttendanceHeading(){
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <thead>
                        <tr>
                            <th>Register No.</th>
                            <th>Name</th>
                            <th>Entry</th>
                        </tr>
                    </thead>
                </table>
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

    render(){
        fetch(`http://localhost:4000/studentlistforattendance?class_id='${this.state.class_id}'`)
        .then(response => response.json())
        .then(response=>{
            this.setState({studentsData:response.data})    
        })
        .catch(err=>console.error(err))
        return(
            <div>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type} />
                <div className="check-attendance-section">
                    <div className = "selection">
                            <p className="select-text">Select Class: </p>
                            <select className="drop-down" value={this.state.class_id} onChange={this.handleChange}>
                                {this.state.batchesTaught.map((ele)=><option value={ele.class_id}>{ele.subject_name}</option>)}
                            </select>
                    </div>
                    <div class="ui middle labeled input" style={{width:'30%'}}>
                        <input type="text" placeholder="Enter duration of this class.." value={this.state.no_of_hours} onChange={this.handleInputChange}/>
                        <div class="ui basic label">
                            Hrs
                        </div>
                    </div>
                    <div className="attendance-table-section">
                        {this.printClassInfo()}
                        {this.markAttendanceHeading()}
                        {this.state.studentsData.map(Entry => this.markTableEntry(Entry.reg_no,Entry.first_name,Entry.last_name,this.state.class_id)) }
                    </div>
                    <button className='ui big orange button' style={{textAlign:'center',marginBottom:'3em'}} onClick={this.handleSubmitButton}>Submit Attendance</button>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MarkAttendance