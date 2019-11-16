import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import "../css/bunkAssistDetails.css"
class BunkAssistDetails extends Component{
    
    bunkAssistDetailsContent(){
        return(
            <div className='bunkAssistDetails-section'>
                <div className='bunkAssistDetails-left'>
                    <h1 className='bunkAssistDetails-left-title'>Bunk Assist</h1>
                    <Link to="/bunkassist">
                        <button className="bunkAssistDetails-left-button ui orange big button">
                            <i className="check icon"></i>
                            Use Now
                        </button>
                    </Link>
                </div>
                <div className='bunkAssistDetails-right'>
                    <p className='bunkAssistDetails-right-message'>Based on the total number of classes conducted 
                    and the total number of classes you attended, get to know if you can bunk or not.</p>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.bunkAssistDetailsContent()
        )
    }
}

export default BunkAssistDetails