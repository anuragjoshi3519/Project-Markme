import React,{Component} from "react"
import LoggedInUserHeader from "../LoggedInUserHeader"
import Footer from '../Footer'
import "../css/addClass.css"

class AddClass extends Component{
    constructor(){
        super()
        this.state = {
            classID : "",
            subjectName : "",
            teacherID : "",
            batchID : "",
            program : "",
            taughtInSem : "",
            conductionYear : "",
            batchIDOptions:[],
            teacherIDOptions:[],
            classIDOptions:[]
        }

        this.handleAddClassChange = this.handleAddClassChange.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:4440/loadteacher')
        .then(response => response.json())
        .then(response=>{
            this.setState({teacherIDOptions:response.data})    
        })
        .catch(err=>console.error(err))

        fetch('http://localhost:4440/loadbatch')
        .then(response => response.json())
        .then(response=>{
            this.setState({batchIDOptions:response.data})    
        })
        .catch(err=>console.error(err))

        fetch('http://localhost:4440/loadclass')
        .then(response => response.json())
        .then(response=>{
            this.setState({classIDOptions:response.data})    
        })
        .catch(err=>console.error(err))
    }

    handleAddClassChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const {classID, subjectName, teacherID,batchID, program, taughtInSem, conductionYear,classIDOptions} = this.state
        
        if(classID===''||subjectName===''||teacherID===''||batchID===''||program===''||taughtInSem===''||conductionYear===''){
            alert('Please enter missing details')
        }
        else{
            let flag=0
            let i=0
            for(i=0;i<classIDOptions.length;i+=1){
                if(classID===classIDOptions[i].class_id){
                    flag=1
                    break
                }
            }
            if(flag===0){
                fetch(`http://localhost:4440/addclass?classID=${classID}&subjectName=${subjectName}&teacherID=${teacherID}&program=${program}&taughtInSem=${taughtInSem}&conductionYear=${conductionYear}`)
                .then(response=>response.json())
                .catch(err=>console.error(err))

                fetch(`http://localhost:4440/addbatchtoclass?classID=${classID}&batchID=${batchID}`)
                .then(response => response.json())
                .catch(err=>console.error(err))

                alert('Class successfully added to database')
                this.props.history.push({
                    pathname: '/userprofile/',
                    hash: `${this.props.location.state.username}`,
                    state: { username:this.props.location.state.username,account:this.props.location.state.account_type }
                })
            }
            else{
                alert('Same class ID is already present, try another one.')
            }
        }
    }

    addClassContent(){
        return(
            <div className="addClass-section">
                
                <div className="heading">
                    <h1>Add a new Subject Class</h1>
                </div>
                <br/>

                <main className="addClass-form">
                    <form className="ui form" autoComplete="off">

                        <div className="two fields">
                            <div className="field">
                                <label>Class ID</label>
                                    <input 
                                        type="text"
                                        placeholder="Enter Class ID"
                                        name="classID"
                                        value={this.state.classID}
                                        autoFocus={true}
                                        onChange = {this.handleAddClassChange}
                                    />
                            </div>
                            <div className="field">
                                <label>Subject Name</label>
                                <div className="ui left icon input">
                                    <input 
                                        type="text"
                                        placeholder="Enter Subject Name"
                                        name="subjectName"
                                        value={this.state.subjectName}
                                        onChange = {this.handleAddClassChange}
                                    />
                                    <i className="name icon"></i>
                                </div>
                            </div>
                        </div>
                        <br/>

                        <div class="two fields">
                            <div class="field">
                                <label>Teacher ID</label>
                                <select 
                                    value={this.state.teacherID}
                                    name = "teacherID"
                                    onChange = {this.handleAddClassChange}
                                >
                                    <option value="">Select a teacher</option>
                                    {this.state.teacherIDOptions.map(ele=><option value={ele.teacher_id}>{ele.teacher_id}</option>)}
                                </select>
                            </div>
                            <div class="field">
                                <label>Batch ID</label>
                                <select 
                                    value={this.state.batchID}
                                    name = "batchID"
                                    onChange = {this.handleAddClassChange}
                                >
                                    <option value="">Select a batch</option>
                                    {this.state.batchIDOptions.map(ele=><option value={ele.batch_id}>{ele.batch_id}</option>)}
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div class="three fields">
                            <div class="field">
                                <label>Program</label>
                                <input 
                                    type="text" 
                                    placeholder = "Enter Program"
                                    name="program"
                                    value={this.state.program}
                                    onChange = {this.handleAddClassChange}
                                />
                            </div>
                            <div class="field">
                                <label>Taught In Sem</label>
                                    <input 
                                        type="number" 
                                        placeholder="Enter Semester when taught"
                                        name="taughtInSem"
                                        value={this.state.taughtInSem}
                                        onChange = {this.handleAddClassChange}
                                    />
                            </div>
                            <div class="field">
                                <label>Conduction Year</label>
                                    <input 
                                        type="number" 
                                        placeholder="Enter year of conduction"
                                        name="conductionYear"
                                        value={this.state.conductionYear}
                                        onChange = {this.handleAddClassChange}
                                    />
                            </div>
                        </div>
                        <br/>

                        <button className="ui blue submit button" type='submit' style={{marginTop:'2em',width:'40%', marginLeft:'30%', fontSize :'1.2em'}} onClick={this.handleSubmit} >Add Class</button>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type}/>
                {this.addClassContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default AddClass