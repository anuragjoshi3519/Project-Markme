import React,{Component} from 'react'
import Header from './Header'
import OnlineSuite from './OnlineSuite'
import OfflineSuite from './OfflineSuite'
import BunkAssistDetails from './BunkAssistDetails'
import ContactCard from './ContactCard'
import Footer from '../Footer'
import "../css/homePage.css"
import AddTeacher from '../adminComponent/AddTeacher'
import AddStudent from '../adminComponent/AddStudent'
import AddClass from '../adminComponent/AddClass'
import AddBatch from '../adminComponent/AddBatch'
import NewSem from '../adminComponent/NewSem'

class HomePage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <div className='main-div'>
                <Header/>
                <div className='intro-section'>
                    <h1 className='intro-title'>WHAT DO WE DO?</h1>
                    <p className='intro-message'>Mark Me is an attendence management system for schools and colleges.
                        It lets users track their attendence on the fly. Check out our features below.</p>
                </div>
                <OnlineSuite/>
                <OfflineSuite/>
                <BunkAssistDetails/>
                <ContactCard/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage