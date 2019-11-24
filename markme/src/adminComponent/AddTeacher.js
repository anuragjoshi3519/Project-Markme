import React,{Component} from "react"
import LoggedInUserHeader from "../LoggedInUserHeader"
import Footer from '../Footer'
import "../css/addTeacher.css"

class AddTeacher extends Component{
    constructor(){
        super()
        this.state = {
            teacherID : "",
            password : "",
            firstName : "",
            middleName : "",
            lastName : "",
            dob : "",
            phone :"",
            gender : "",
            email : "",
            joiningDate : ""
        }

        this.handleAddTeacherChange = this.handleAddTeacherChange.bind(this)
    }

    handleAddTeacherChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    addTeacherContent(){
        return(
            <div className="addTeacher-section">
                
                <div className="heading">
                    <h1>Add a new Teacher</h1>
                </div>
                <br/>

                <main className="addTeacher-form">
                    <form className="ui form">

                        <div className="two fields">
                            <div className="field">
                                <label>Teacher ID</label>
                                <div className="ui left icon input">
                                    <input 
                                        type="text"
                                        placeholder="Enter Teacher ID"
                                        name="teacherID"
                                        value={this.state.teacherID}
                                        autoFocus={true}
                                        onChange = {this.handleAddTeacherChange}
                                    />
                                    <i className="user icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <div className="ui left icon input">
                                    <input 
                                        type="text"
                                        placeholder="Enter Initial Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange = {this.handleAddTeacherChange}
                                    />
                                    <i className="lock icon"></i>
                                </div>
                            </div>
                        </div>
                        <br/>

                        <div class="three fields">
                            <div class="field">
                                <label>First name</label>
                                <input 
                                    type="text" 
                                    placeholder="First Name"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange = {this.handleAddTeacherChange}
                                />
                            </div>
                            <div class="field">
                                <label>Middle name</label>
                                <input 
                                    type="text" 
                                    placeholder="Middle Name"
                                    name="middleName"
                                    value={this.state.middleName}
                                    onChange = {this.handleAddTeacherChange}
                                />
                            </div>
                            <div class="field">
                                <label>Last name</label>
                                <input 
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange = {this.handleAddTeacherChange}
                                />
                            </div>
                        </div>
                        <br/>

                        <div class="three fields">
                            <div class="field">
                                <label>Date of Birth</label>
                                <input 
                                    type="date" 
                                    name="dob"
                                    value={this.state.dob}
                                    onChange = {this.handleAddTeacherChange}
                                />
                            </div>
                            <div class="field">
                                <label>Contact Number</label>
                                <div className="ui left icon input">
                                    <input 
                                        type="text" 
                                        placeholder="Enter Contact Number"
                                        name="phone"
                                        value={this.state.phone}
                                        onChange = {this.handleAddTeacherChange}
                                    />
                                    <i className="phone icon"></i>
                                </div>
                            </div>
                            <div class="field">
                                <label>Gender</label>
                                <select 
                                    value={this.state.gender}
                                    name = "gender"
                                    onChange = {this.handleAddTeacherChange}
                                >
                                    <option value="">Select a gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div className="two fields">
                            <div className="field">
                                <label>Email ID</label>
                                <div className="ui left icon input">
                                    <input 
                                        type="email"
                                        placeholder="Enter Email ID"
                                        name="email"
                                        value={this.state.email}
                                        onChange = {this.handleAddTeacherChange}
                                    />
                                    <i className="mail icon"></i>
                                </div>
                            </div>
                            <div className="field">
                                <label>Joining Date</label>
                                    <input 
                                        type="date"
                                        name="joiningDate"
                                        value={this.state.joiningDate}
                                        onChange = {this.handleAddTeacherChange}
                                    />
                            </div>
                        </div>

                        <button className="ui blue submit button" type='submit' style={{marginTop:'2em',width:'40%', marginLeft:'30%', fontSize :'1.2em'}}>Add Teacher</button>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader />
                {this.addTeacherContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default AddTeacher