import React,{Component} from "react"
import LoggedInUserHeader from "../LoggedInUserHeader"
import Footer from '../Footer'
import "../css/addBatch.css"

class AddBatch extends Component{
    constructor(){
        super()
        this.state = {
            batchID : "",
            program : "",
            batchIDOptions:[]
        }

        this.handleAddBatchChange = this.handleAddBatchChange.bind(this)
    }

    componentDidMount(){

        fetch('http://localhost:4440/loadbatch')
        .then(response => response.json())
        .then(response=>{
            this.setState({batchIDOptions:response.data})    
        })
        .catch(err=>console.error(err))
    }

    handleAddBatchChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const {batchID, program, batchIDOptions} = this.state
        if(batchID===''||program===''){
            alert('Please enter missing details')
        }
        else{
            let flag=0
            let i=0
            for(i=0;i<batchIDOptions.length;i+=1){
                if(batchID===batchIDOptions[i].batch_id){
                    flag=1
                    break
                }
            }
            if(flag===0){
                fetch(`http://localhost:4440/addbatch?batchID=${batchID}&program=${program}`)
                .then(response=>response.json())
                .catch(err=>console.error(err))

                alert('Batch successfully added to database')
                this.props.history.push({
                    pathname: '/userprofile/',
                    hash: `${this.props.location.state.username}`,
                    state: { username:this.props.location.state.username,account:this.props.location.state.account_type }
                })
            }
            else{
                alert('Same batch ID is already present, try another one.')
            }
        }
    }

    addBatchContent(){
        return(
            <div className="addBatch-section">
                
                <div className="heading">
                    <h1>Add a new Batch</h1>
                </div>
                <br/>

                <main className="addBatch-form">
                    <form className="ui form" autoComplete='off'>
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

                        <button className="ui blue submit button" type='submit' style={{marginTop:'2em',width:'40%', marginLeft:'30%', fontSize :'1.2em'}} onClick={this.handleSubmit}>Add Batch</button>
                    </form>
                </main>
            </div>
        )
    }

    render(){
        return(
            <diV>
                <LoggedInUserHeader username={this.props.location.state.username} account_type={this.props.location.state.account_type}/>
                {this.addBatchContent()}
                <Footer/>
            </diV>
        )
    }
    
}

export default AddBatch