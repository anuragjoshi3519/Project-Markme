import React,{Component} from 'react'
import LoginHeader from './LoginHeader'
import Footer from '../Footer'
import "../css/login.css"
import ContactCard from '../homePageComponent/ContactCard'
import { userInfo } from 'os'
class Login extends Component{
    constructor(){
        super()
        this.state = {
            usersInfo:[],
            emailSignup : "",
            usernameLogin : "",
            passwordLogin : "",
            usernameSignup : "",
            passwordSignup : "",
            choose : "login"     
        }

        this.handleLoginChange = this.handleLoginChange.bind(this)   
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this) 
        this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
        this.handleSignupChange = this.handleSignupChange.bind(this)    
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getUsersInfo()
    }

    getUsersInfo = ()=>{
        fetch('http://localhost:4000/users')
        .then(response => response.json())
        .then(response=>{
            this.setState({usersInfo:response.data})    
        })
        .catch(err=>console.error(err)) 
    }

    handleLoginChange(event){
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    handleSignupChange(event){
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    handleSignupSubmit(event){
        event.preventDefault()
        const username=event.target[1].value
        const password=event.target[2].value
        let i,flag=0
        const {usersInfo} = this.state
        for(i=0;i<usersInfo.length;i+=1){
            if(username===usersInfo[i].username){
                flag=1
                break
            }
        }
        if(flag===0){
            fetch(`http://localhost:4000/users/add?username=${username}&password=${password}`)
            .then(response=>response.json())
            .catch(err=>console.error(err))

            alert('User successfully added to database')
        }
        else{
            alert('Username is already taken, try another one.')
        }
    }
    handleLoginSubmit(event){
        event.preventDefault()
        const username=event.target[0].value
        const password=event.target[1].value
        
        let i,flag=0
        const {usersInfo} = this.state
        for(i=0;i<usersInfo.length;i+=1){
            if( (username===usersInfo[i].username && password===usersInfo[i].password)){
                this.props.history.push({
                pathname: '/userprofile/',
                hash: `${username}`,
                state: { username:usersInfo[i].username,account:usersInfo[i].account_type }
            })
                flag=1
            }
        }
        if(flag===0){
            alert('Incorrect Credentials')
        }
    }

    buttonHandler(event){
        const value = event.target.value
        this.setState({ choose : value })
    }
    
    loginContent(){
        return(
        <div className="content ui placeholder segment">
            <div className="main-content ui two column very relaxed stackable grid">
                <div className="login-column column">
                <form className="login-section ui form" onSubmit={this.handleLoginSubmit} autoComplete='off'>
                    <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                        <input 
                            type="text" 
                            name="usernameLogin" 
                            value={this.state.usernameLogin} 
                            placeholder="Enter Username"
                            autoFocus={true}
                            onChange = {this.handleLoginChange}
                        />
                        <i className="user icon"></i>
                    </div>
                    </div>
                    <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                        <input 
                            type="password"
                            name="passwordLogin" 
                            value={this.state.passwordLogin} 
                            placeholder="Enter Password"
                            onChange = {this.handleLoginChange}
                        />
                        <i className="lock icon"></i>
                    </div>
                    </div>
                    <button className="ui blue submit button" type='submit' style={{marginTop:'3em',width:'100%'}}>Log In</button>
                </form>
                </div>
                <div className="signup-button-div middle aligned column">
                <div className='signup-button-div-div signup-button'>
                    <p className='message1'>Don't have an acount yet?</p>
                    <p className='message2'>Get Started with a free account and start managing yout attendence today.</p>
                    <button className="signup-button ui green big button" value="signup" onClick={this.buttonHandler}>
                        <i className="signup icon"></i>
                        Sign Up
                    </button>
                </div>
                </div>
            </div>
        </div>
        )
    }

    signupContent(){
        return(
        <div className="content ui placeholder segment">
            <div className="main-content ui two column very relaxed stackable grid">
                <div className="login-button-div column">
                <div className='login-button-div-div'>
                <p className='message1'>Already have an account?</p>
                <p className='message2'>Log in to your attendence portal here</p>
                    <button className="login-button ui blue big button" value="login" onClick={this.buttonHandler}>
                        <i className="sign-in icon"></i>
                        Log In
                    </button>
                </div>
                </div>
                <div className="signup-column middle aligned column">
                <form className="signup-section ui form" onSubmit={this.handleSignupSubmit} autoComplete='off'>
                    <div className="field">
                        <label>Email</label>
                        <div className="ui left icon input">
                            <input
                                type="text" 
                                name="emailSignup" 
                                value={this.state.emailSignup} 
                                placeholder="Enter Email"
                                autoFocus={true}
                                onChange = {this.handleSignupChange}
                            />
                            <i className="envelope icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <div className="ui left icon input">
                            <input 
                                type="text" 
                                placeholder="Username"
                                name="usernameSignup" 
                                value={this.state.usernameSignup} 
                                placeholder="Enter Username"
                                onChange = {this.handleSignupChange}
                            />
                            <i className="user icon"></i>
                        </div>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <div className="ui left icon input">
                            <input
                                type="password"
                                name="passwordSignup" 
                                value={this.state.passwordSignup} 
                                placeholder="Enter Password"
                                onChange = {this.handleSignupChange} 
                            />
                            <i className="lock icon"></i>
                        </div>
                    </div>
                    <button className="ui green submit button" type='submit' style={{marginTop:'3em',width:'100%'}}>Sign Up</button>
                </form>
                </div>
            </div>
        </div>
        )
    }

    render(){ 
        return(
            <div>
                <LoginHeader />
                {this.state.choose==="signup"?this.signupContent():this.loginContent()}
                <ContactCard/>
                <Footer/>
            </div>
        )      
    }
}

export default Login
