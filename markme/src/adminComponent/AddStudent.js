import React,{Component} from "react"
import LoggedInUserHeader from "../LoggedInUserHeader"
import Footer from '../Footer'
import "../css/addStudent.css"

class AddStudent extends Component{
    constructor(){
        super()
        this.state = {
            regNo : "",
            password : "",
            firstName : "",
            middleName : "",
            lastName : "",
            dob : "",
            phone :"",
            gender : "",
            email : "",
            joiningDate : "",
            batchID : "",
            usersInfo:[],
            batchIDOptions:[]
        }

        this.handleAddStudentChange = this.handleAddStudentChange.bind(this)
    }

    componentDidMount() {
        this.getUsersInfo()
        fetch('http://localhost:4000/loadbatch')
        .then(response => response.json())
        .then(response=>{
            this.setState({batchIDOptions:response.data})    
        })
        .catch(err=>console.error(err))
    }

    getUsersInfo = ()=>{
        fetch('http://localhost:4000/users')
        .then(response => response.json())
        .then(response=>{
            this.setState({usersInfo:response.data})    
        })
        .catch(err=>console.error(err)) 
    }

    handleAddStudentChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const {regNo,password, firstName, middleName, lastName, dob, gender, email, phone, joiningDate, batchID,usersInfo} = this.state
        
        if(regNo===''||password===''||firstName===''||lastName===''||dob===''||phone===''||gender===''||email===''||joiningDate===''||batchID===''){
            alert('Please enter missing details')
        }
        else{
            let flag=0
            let i=0
            for(i=0;i<usersInfo.length;i+=1){
                if(regNo===usersInfo[i].username){
                    flag=1
                    break
                }
            }
            if(flag===0){
                fetch(`http://localhost:4000/users/add?username=${regNo}&password=${password}`)
                .then(response=>response.json())
                .catch(err=>console.error(err))

                fetch(`http://localhost:4000/addstudent?regNo=${regNo}&firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&dob=${dob}&gender=${gender}&email=${email}&phone=${phone}&joiningDate=${joiningDate}&batchID=${batchID}`)
                .then(response => response.json())
                .catch(err=>console.error(err))

                alert('User successfully added to database')
                this.props.history.push({
                    pathname: '/userprofile/',
                    hash: `${this.props.location.state.username}`,
                    state: { username:this.props.location.state.username,account:this.props.location.state.account_type }
                })
            }
            else{
                alert('Username is already taken, try another one.')
            }
        }
    }

    addStudentContent(){
        return(
            <div className="addTeacher-section">
                
                <div className="heading">
                    <h1>Add a new Student</h1>
                </div>
                <br/>

                <main className="addTeacher-form">
                    <form className="ui form" autoComplete='off'>

                        <div className="two fields">
                            <div className="field">
                                <label>Register Number</label>
                                <div className="ui left icon input">
                                    <input 
                                        type="text"
                                        placeholder="Enter Register No"
                                        name="regNo"
                                        value={this.state.regNo}
                                        autoFocus={true}
                                        onChange = {this.handleAddStudentChange}
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
                                        onChange = {this.handleAddStudentChange}
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
                                    onChange = {this.handleAddStudentChange}
                                />
                            </div>
                            <div class="field">
                                <label>Middle name</label>
                                <input 
                                    type="text" 
                                    placeholder="Middle Name"
                                    name="middleName"
                                    value={this.state.middleName}
                                    onChange = {this.handleAddStudentChange}
                                />
                            </div>
                            <div class="field">
                                <label>Last name</label>
                                <input 
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange = {this.handleAddStudentChange}
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
                                    onChange = {this.handleAddStudentChange}
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
                                        onChange = {this.handleAddStudentChange}
                                    />
                                    <i className="phone icon"></i>
                                </div>
                            </div>
                            <div class="field">
                                <label>Gender</label>
                                <select 
                                    value={this.state.gender}
                                    name = "gender"
                                    onChange = {this.handleAddStudentChange}
                                >
                                    <option value="">Select a gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                    <option value="O">Other</option>
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div className="three fields">
                            <div className="field">
                                <label>Email ID</label>
                                <div className="ui left icon input">
                                    <input 
                                        type="email"
                                        placeholder="Enter Email ID"
                                        name="email"
                                        value={this.state.email}
                                        onChange = {this.handleAddStudentChange}
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
                                        onChange = {this.handleAddStudentChange}
                                    />
                            </div>
                            <div class="field">
                                <label>Batch ID</label>
                                <select 
                                    value={this.state.batchID}
                                    name = "batchID"
                                    onChange = {this.handleAddStudentChange}
                                >
                                    <option value="">Select a batch</option>
                                    {this.state.batchIDOptions.map(ele=><option value={ele.batch_id}>{ele.batch_id}</option>)}
                                </select>
                            </div>
                        </div>

                        <button className="ui blue submit button" type='submit' style={{marginTop:'2em',width:'40%', marginLeft:'30%', fontSize :'1.2em'}} onClick={this.handleSubmit} >Add Student</button>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type}/>
                {this.addStudentContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default AddStudent