import React from 'react'
import {Link,useNavigate} from "react-router-dom"
function Home() {
    const Valikaati=useNavigate();
    let gotoLog= ()=>{Valikaati('/login')}
  return (
    <>
    <div>Home</div>
    <Link to='/login'>Login</Link>
    <button onClick={()=>gotoLog()}>LogIn button</button>
    </>
  )
}

export default Home