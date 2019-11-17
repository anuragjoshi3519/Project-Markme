import React,{Component} from  "react"
import Header from "../homePageComponent/Header"
import Footer from '../Footer'
import logo from "../Resources/images/cal1.jpg"
import logo1 from "../Resources/images/cal2.jpg"
import '../css/academicCalendar.css'
import ModalImage from 'react-modal-image'

class AcademicCalendar extends Component{
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
                    <h1>Academic Calendar 2019-2020</h1>
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
                            <span class="caption">Odd Semester</span>
                        </label>
                    </div>
                    <div className="calendar-one-side">
                        <label>
                        <ModalImage
                                small={logo1}
                                large={logo1}
                                alt=""
                                />
                            <span class="caption">Even Semester</span>
                        </label>
                    </div>
                 </div>
            </div>
        )
    }

    render(){
        return(
            <div>
                <Header />
                {this.academicCalendarContent()}
                <Footer/>
            </div>
        )
    }
}

export default AcademicCalendar