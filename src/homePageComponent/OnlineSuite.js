import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import "../css/onlineSuite.css"
class OnlineSuite extends Component{
    
    onlineSuiteContent(){
        return(
            <div className='onlineSuite-section'>
                <div className='onlineSuite-left'>
                    <h1 className='onlineSuite-left-title'>ONLINE SUITE</h1>
                    <Link to='/login'>
                        <button className="onlineSuite-left-button ui orange big button" >
                            <i className="hourglass half icon"></i>
                            Request Now
                        </button>
                    </Link>
                </div>
                <div className='onlineSuite-right'>
                    <p className='onlineSuite-right-message'>A full fledged suite for
                     online attendence marking and keeping. Request subscription for your institute
                     to shift the attendence system online.</p>
                </div>
            </div>
        )
    }

    render(){
        return(
            this.onlineSuiteContent()
        )
    }
}

export default OnlineSuite