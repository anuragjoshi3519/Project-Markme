import React,{Component} from 'react'
import "./css/footer.css"
class Footer extends Component{
    
    footerContent(){
        return(
            <div className='footer-section'>
                <h2 className='footer-text'>Created with &#10084; by Team Five<br/>_________________________________</h2>
            </div>
        )
    }

    render(){
        return(
            this.footerContent()
        )
    }
}

export default Footer