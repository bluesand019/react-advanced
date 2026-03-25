import React from 'react'
import "../App.css"
import bellIcon from "../assets/Container.png"
import accountIcon from "../assets/Button.png"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <h1>Ledger</h1>
      <ul>
        <li>DASHBOARD</li>
        <li>ANALYTICS</li>
        <li>REPORTS</li>
        <li>SETTINGS</li>
      </ul>
      <div className="icons">
        <img id='bellIcon' src={bellIcon} alt="" />
        <img src={accountIcon} alt="" />
      </div>
    </div>
 
    </>
  )
}

export default Navbar
