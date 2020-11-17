import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import "../css/offlineSuite.css"
class OfflineSuite extends Component{
    
    offlineSuiteContent(){
        return(
            <div className='offlineSuite-section'>
                <div className='offlineSuite-left'>
                    <p className='offlineSuite-left-message'>For students who'd like to keep track of their
                     attendence.<br/>Mark your attendence everyday using it and keep track of your 
                    leaves and attendence.</p>
                </div>
                <div className='offlineSuite-right'>
                    <h1 className='offlineSuite-right-title'>OFFLINE SUITE</h1>
                    <Link to='/login'>
                        <button className="offlineSuite-right-button ui orange big button" >
                            <i className="stopwatch icon"></i>
                            Join Now
                        </button>
                    </Link>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.offlineSuiteContent()
        )
    }
}

export default OfflineSuite