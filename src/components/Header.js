import { useState } from "react"

const Header = () => {
   // let btn = 'login'
     
   const [btn, setBtnName] = useState('login')
     

    return <div className='header'>
       <div className='logo-container'>
          <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' />
       </div>
       <div className='nav-items'>
          <ul>
             <li>Home</li>
             <li>Contact Us</li>
             <li> About Us</li>
             <li>Cart</li>
             <button className="login-btn" onClick={() => {
                  btn==='login'? setBtnName('logout'):setBtnName('login')
             }}>{btn} </button>
          </ul>
       </div>
    </div>
  }
 

  export default Header;