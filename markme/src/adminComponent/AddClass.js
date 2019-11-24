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
        }

        this.handleAddClassChange = this.handleAddClassChange.bind(this)
    }

    handleAddClassChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    addClassContent(){
        return(
            <div className="addClass-section">
                
                <div className="heading">
                    <h1>Add a new Subject Class</h1>
                </div>
                <br/>

                <main className="addClass-form">
                    <form className="ui form">

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
                                    <option value="teach1">Teacher 1</option>
                                    <option value="teach2">Teacher 2</option>
                                    <option value="teach3">Teache 3</option>
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
                                    <option value="teach1">Batch 1</option>
                                    <option value="teach2">Batch 2</option>
                                    <option value="teach3">Batch 3</option>
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
                                        onChange = {this.handleAddStudentChange}
                                    />
                            </div>
                            <div class="field">
                                <label>Conduction Year</label>
                                    <input 
                                        type="number" 
                                        placeholder="Enter year of conduction"
                                        name="conductionYear"
                                        value={this.state.taughtInSem}
                                        onChange = {this.handleAddStudentChange}
                                    />
                            </div>
                        </div>
                        <br/>

                        <button className="ui blue submit button" type='submit' style={{marginTop:'2em',width:'40%', marginLeft:'30%', fontSize :'1.2em'}}>Add Class</button>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader />
                {this.addClassContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default AddClass