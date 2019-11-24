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
                            <button className="ui button" type='submit' style={{marginTop:'4em',width:'50%', fontSize :'1.35em'}}>Yes, go ahead</button>
                            <button className="ui primary button" type='submit' style={{marginTop:'4em',width:'50%', marginLeft:'30%', fontSize :'1.35em'}}>No, take me back</button>
                        </div>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader />
                {this.newSemContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default NewSem