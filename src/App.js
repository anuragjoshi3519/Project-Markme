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
import MarkAtendance from './markAttendanceComponent/MarkAttendance'
import ViewTimeTable from './viewTimeTableComponent/ViewTimeTable'
import TeacherMarkAttendance from './checkTeacherAttendance/TeacherMarkAttendance'
import AddTeacher from './adminComponent/AddTeacher'
import AddStudent from './adminComponent/AddStudent'
import AddClass from './adminComponent/AddClass'
import AddBatch from './adminComponent/AddBatch'
import NewSem from './adminComponent/NewSem'

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
                    <Route path='/checkattendence' component={CheckAttendance}/>
                    <Route path='/markattendence' component={MarkAtendance}/>
                    <Route path='/viewtimetable' component={ViewTimeTable}/>
                    <Route path='/teachermarkattendance' component={TeacherMarkAttendance}/>
                    <Route path='/addteacher' component={AddTeacher}/>
                    <Route path='/addstudent' component={AddStudent}/>
                    <Route path='/addClass' component={AddClass}/>
                    <Route path='/addbatch' component={AddBatch}/>
                    <Route path='/addnewsem' component={NewSem}/>
                </div>
            </BrowserRouter>
    )
}

export default App