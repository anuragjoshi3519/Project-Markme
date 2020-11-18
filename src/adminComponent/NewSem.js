import React,{Component} from "react"
import LoggedInUserHeader from "../LoggedInUserHeader"
import Footer from '../Footer'
import "../css/newSem.css"

class NewSem extends Component{
    constructor(){
        super()
        this.state = {
        }
    }

    handlePositiveButton=()=>{
        fetch('http://localhost:4440/addnewsem')
        .then(response => response.json())
        .then(response=>{
            this.setState({batchIDOptions:response.data})    
        })
        .catch(err=>console.error(err))

        alert('Changes successfully saved')
        this.props.history.push({
            pathname: '/userprofile/',
            hash: `${this.props.location.state.username}`,
            state: { username:this.props.location.state.username,account:this.props.location.state.account_type }
        })
    }

    handleNegativeButton=()=>{
        this.props.history.push({
            pathname: '/userprofile/',
            hash: `${this.props.location.state.username}`,
            state: { username:this.props.location.state.username,account:this.props.location.state.account_type }
        })
    }

    newSemContent(){
        return(
            <div className="newSem-section">
                
                <div className="heading">
                    <h1>Semester Update</h1>
                </div>
                <br/>

                <main className="newSem-form">
                    <form className="ui form">
                        <div className="field">
                            <h1>Are you sure you want to update the Semester?</h1>
                        </div>
                        
                        <br/>
                        <div className="two-sided-button">
                            <button className="ui orange button" style={{marginTop:'4em',width:'50%', fontSize :'1.35em'}} onClick={this.handlePositiveButton}>Yes, go ahead</button>
                            <button className="ui primary button" style={{marginTop:'4em',width:'50%', marginLeft:'30%', fontSize :'1.35em'}} onClick={this.handleNegativeButton}>No, take me back</button>
                        </div>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type}/>
                {this.newSemContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default NewSem