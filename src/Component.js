import React from 'react'
import {BrowserRouter as Vali,Routes,Route, Navigate} from 'react-router-dom'
import LogIn from "./LogIn"
import Home from './Home'
function Component() {
  return (
    <Vali>
     <Routes>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/home'  element={<Home/>}></Route>
        <Route path='*' element={<Navigate to="/home"></Navigate>}></Route>
     </Routes>
    </Vali>
  )
}

export default Component