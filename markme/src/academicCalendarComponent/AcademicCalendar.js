import React,{Component} from  "react"

class AcademicCalendar extends Component{
    constructor(){
        super()
        this.state = {
            src : "",
            loading : false
        }
    }

    componentDidMount(){
       // this.setState({ loading : true })
        //extract academic calendar from DB and set it to src
        //set loading false when image loaded
    }


    academicCalendarContent(){
        return(
            <div className="academicCalendar-section">
                <img src={this.state.src} width="600px" height="400px" />
            </div>
        )
    }

    render(){
        return(
            this.academicCalendarContent()
        )
    }


}

export default AcademicCalendar