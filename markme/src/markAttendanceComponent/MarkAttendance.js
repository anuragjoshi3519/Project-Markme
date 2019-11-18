import React, {Component} from "react"
import SingleEntry from "./SingleEntry"
import {Link} from 'react-router-dom'
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
            no_of_hours:0
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

    componentWillUnmount(){
        const username = this.props.location.state.username
        fetch(`http://localhost:4000/updateclasses?class_id='${this.state.class_id}'&no_of_hours=${this.state.no_of_hours}`)
        .then(response => response.json())
        .then(response=>{
            this.setState({batchesTaught:response.data})    
        })
        .catch(err=>console.error(err)) 
    }

    markTableEntry(reg_no,first_name,last_name){
        return(
            <div>
                <table class="ui fixed single line celled table">
                    <tr>
                        <td>{reg_no}</td>
                        <td>{`${first_name} ${last_name}`}</td>
                        <td>
                            <h3 style={{display:'inline'}}>Present :  </h3> <input type="checkbox" className="ui big checkbox" onClick={()=>this.handlePresentButton(reg_no)}/>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    handlePresentButton=(reg_no)=>{
        fetch(`http://localhost:4000/markattendance?reg_no=${reg_no}&class_id=${this.state.class_id}&entry=P&no_of_hours=${this.state.no_of_hours}`)
        .then(response => response.json())
        .catch(err=>console.error(err))
    }

    handleChange=(event)=>{
        const {value} = event.target
        this.setState({ class_id : value })
    }

    handleInputChange=(event)=>{
        const {value} = event.target
        this.setState({ no_of_hours : value })
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
                    <Link style={{textAlign:'center',marginBottom:'2em'}} to={{pathname: '/userprofile/',
                              hash: `${this.props.location.state.username}`,
                              state: { username:this.props.location.state.username, account:this.props.location.state.account_type }
                              }}><button className='ui big orange button'>Submit Attendance</button></Link>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MarkAttendance