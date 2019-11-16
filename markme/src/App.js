import React from 'react'
import {BrowserRouter,Route} from "react-router-dom"
import BunkAssist from './bunkAssistComponent/BunkAssist'
import Login from './loginComponent/Login'
import AcademicCalendar from './academicCalendarComponent/AcademicCalendar'
import TimeTable from './timeTableComponent/TimeTable'
import Profile from './ProfileComponents/Profile'
import HomePage from './homePageComponent/HomePage'
import CheckAttendance from './checkAttendanceComponent/CheckAttendance'
import PreviousAttendance from './previousAttendanceComponent/PreviousAttendance'

const App = ()=>{
    return(
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/bunkassist' component={BunkAssist}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/userprofile' component={Profile}/>
                    <Route path='/checkattendence' component={CheckAttendance}/>
                    <Route path='/previousattendence' component={PreviousAttendance}/>
                    <Route path='/timetable' component={TimeTable}/>
                    <Route path='/academiccalender' component={AcademicCalendar}/>
                </div>
            </BrowserRouter>
    )
}

export default App