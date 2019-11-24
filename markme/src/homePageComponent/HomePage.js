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

class HomePage extends Component{
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render(){
        return(
            <div className='main-div'>
                <AddBatch/>
            </div>
        )
    }
}

export default HomePage