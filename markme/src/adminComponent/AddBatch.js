import React,{Component} from "react"
import LoggedInUserHeader from "../LoggedInUserHeader"
import Footer from '../Footer'
import "../css/addClass.css"

class AddBatch extends Component{
    constructor(){
        super()
        this.state = {
            batchID : "",
            program : ""
        }

        this.handleAddBatchChange = this.handleAddBatchChange.bind(this)
    }

    handleAddBatchChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    addBatchContent(){
        return(
            <div className="addBatch-section">
                
                <div className="heading">
                    <h1>Add a new Batch</h1>
                </div>
                <br/>

                <main className="addBatch-form">
                    <form className="ui form">
                    <div className="field">
                    <label>Batch ID</label>
                    <div className="ui left icon input">
                        <input 
                            type="text" 
                            name="batchID" 
                            value={this.state.batchID} 
                            placeholder="Enter Batch ID"
                            autoFocus={true}
                            onChange = {this.handleAddBatchChange}
                        />
                        <i className="address card icon"></i>
                    </div>
                    </div>
                    <div className="field">
                    <label>Program</label>
                    <div className="ui left icon input">
                        <input 
                            type="text"
                            name="program" 
                            value={this.state.program} 
                            placeholder="Enter Program"
                            onChange = {this.handleAddBatchChange}
                        />
                        <i className="pencil alternate icon"></i>
                    </div>
                    </div>
                        
                        <br/>

                        <button className="ui blue submit button" type='submit' style={{marginTop:'2em',width:'40%', marginLeft:'30%', fontSize :'1.2em'}}>Add Batch</button>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader />
                {this.addBatchContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default AddBatch