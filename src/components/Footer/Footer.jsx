import React from 'react'
import   './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <span className="footerItem">&copy; 2023 House Technologies.</span>
     <span className="footerItem">All rights reserved.</span>
     <span className="footerItem">Privacy Policy</span>
     <span className="footerItem">Terms Of  Service</span>
     <span className="footerItem">Cookie Settings</span>
     {/* <span className="footerItem">Phone: 085953 40682</span> */}
    </div>
  )
}

export default Footer