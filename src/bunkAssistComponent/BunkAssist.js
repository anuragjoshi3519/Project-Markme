import React,{Component} from 'react'
import "../css/bunkAssist.css"
import BunkAssistHeader from "./BunkAssistHeader.js"
import "../css/header.css"
import ContactCard from '../homePageComponent/ContactCard'
import Footer from '../Footer'
class BunkAssist extends Component{

    constructor(){
        super()
        this.state = {
            conducted : null,
            attended : null,
            requiredPercent : null,
            assistText : "",
            choose: "",
        }

        this.handleChange = this.handleChange.bind(this)    
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    onCloseHandler=()=>{ 
        this.setState({ choose : "" })  
    }

    handleSubmit(event){
        if(isNaN(this.state.conducted)||isNaN(this.state.attended)||isNaN(this.state.requiredPercent))
            this.setState({
                choose : "error"
            })
        else if(this.state.conducted===null && this.state.attended===null && this.state.requiredPercent===null)
            this.setState({
                choose: "error"
            })
        else if( (this.state.conducted<0 || this.state.attended<0) || this.state.requiredPercent<0 || this.state.requiredPercent>100)
            this.setState({
                choose: "error"
            })
        else if((this.state.conducted-this.state.attended)<0)
            this.setState({
                choose: "error"
            }) 
        else
        {
            const attendance = (this.state.attended/this.state.conducted)*100
            if(attendance > this.state.requiredPercent){
                console.log(attendance)
                const getToBunk=Math.floor((100*this.state.attended-this.state.conducted*this.state.requiredPercent)/this.state.requiredPercent)
                this.setState({
                   assistText : "You can bunk next " + getToBunk + " classes.    ",
                   choose:"bunk"
                })
            }
            else if(attendance < this.state.requiredPercent){

                const remainingPercent = this.state.requiredPercent - attendance
                console.log(attendance)
                console.log(remainingPercent)
                const short = Math.round((remainingPercent/100)*this.state.conducted)   
                const needToAttend = Math.ceil((this.state.conducted*this.state.requiredPercent - 100*this.state.attended)/(100-this.state.requiredPercent)) 
                this.setState({
                   assistText : "You are "+short+" classes short. You need to attend next " + needToAttend + " number of classes. ",
                   choose: "short"
                })
            }
            else{
                this.setState({
                    assistText : "Your attendance is exactly " + this.state.requiredPercent + "%.  ",
                    choose : "exact"
                })
            }

            
        }
        event.preventDefault()
    }
    
    bunkMessage(){
        return(
            <div class="can-bunk ui positive message">
                <i class="close icon" onClick={this.onCloseHandler}></i>
                <div class="header">
                    {this.state.assistText}
                </div>
            </div>
        )
    }

    shortAttendenceMessage(){
        return(
            <div class="short-attendence ui warning message">
                <i class="close icon" onClick={this.onCloseHandler}></i>
                <div class="header">
                    Short Attendence!
                </div>
                {this.state.assistText}
            </div>
        )
    }

    exactAttendenceMessage(){
        return(
            <div class="exact ui positive message">
                <i class="close icon" onClick={this.onCloseHandler}></i>
                <div class="header">
                    Well done!
                </div>
                <p>{this.state.assistText}</p>
            </div>
        )
    }

    errorMessage(){
        return(
            <div class="invalid-input ui negative message">
                <i class="close icon" onClick={this.onCloseHandler}></i>
                <div class="header">
                    Err! That doesn't seem to be the correct input values.
                </div>
                <p>Please input values again.</p>
            </div>
        )
    }

    bunkAssistContent(){
        return(
            <div className='bunkAssist-section'>
                
                <form className="bunk-assist-form ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label style={{ color: 'black',fontSize: '1.1em' }}>Number of classes conducted</label>
                        <input 
                            name="conducted" 
                            value={this.state.conducted} 
                            placeholder="Enter Classes Conducted"
                            onChange = {this.handleChange}
                            autoComplete='off'
                        />
                    </div>
                    <div className="field">
                        <label style={{ color: 'black',fontSize: '1.1em' }}>Number of classes attended</label>
                        <input 
                            name="attended" 
                            value={this.state.attended} 
                            placeholder="Enter Classes Attended"
                            onChange = {this.handleChange}
                            autoComplete='off'
                         />
                    </div>
                    <div className="field">
                        <label style={{ color: 'black',fontSize: '1.1em' }}>Required Percentage</label>
                        <input 
                            name="requiredPercent" 
                            value={this.state.requiredPercent} 
                            placeholder="Enter Required Percentage"
                            onChange = {this.handleChange}
                            autoComplete='off'
                         />
                    </div>
                    <button type="submit" className="ui orange button" style={{ marginLeft:'35%'}} >Submit</button>
                </form>
                {this.state.choose==='error'?this.errorMessage():
                        this.state.choose==='bunk'?this.bunkMessage():
                            this.state.choose==='short'?this.shortAttendenceMessage():
                                this.state.choose==='exact'?this.exactAttendenceMessage():' '}
            </div>
        )
    }

    render(){
        return(
            <div className='bunkAssist-div'>
                <BunkAssistHeader/>
                {this.bunkAssistContent()}
                <ContactCard/>
                <Footer/>
            </div>
        )
    }
}

export default BunkAssist