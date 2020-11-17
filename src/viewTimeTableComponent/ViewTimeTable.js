import React,{Component} from  "react"
import Footer from '../Footer'
import logo from "../Resources/images/time.jpg"
import '../css/viewTimeTable.css'
import ModalImage from 'react-modal-image'
import LoggedInUserHeader from "../LoggedInUserHeader"
class ViewTimeTable extends Component{
    constructor(){
        super()
        this.state = {
            src : "../Resources/images/abc2.jpg",
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
                <div className="heading">
                    <h1>Time Table Semester 3</h1>
                </div>
                <br/>
                <div className="calendars">
                    <div className="calendar-one-side">
                        <label>
                        <ModalImage 
                                small={logo}
                                large={logo}
                                alt=""
                                />
                            <span class="caption">Semester 3</span>
                        </label>
                    </div>
                 </div>
            </div>
        )
    }

    render(){
        const {username,account} = this.props.location.state
        return(
            <div>
                <LoggedInUserHeader username={username} account_type={account} />
                {this.academicCalendarContent()}
                <Footer/>
            </div>
        )
    }


}

export default ViewTimeTable