import React from 'react'

const Footer = () => {
  return (
    <div className=' text-gray-500 py-6 '>
      <div className=' flex gap-10  text-center px-[510px] m-5'>
        <div>
        <p>About Us</p>
      </div>
      <div>
        <p>Contact</p>
      </div>
      <div>
        <p>Terms of Service</p>
      </div>
      <div>
        <p>Privacy Policy</p>
      </div>
      </div>

      <div className='container mx-auto text-center'>
        <p>&copy; {new Date().getFullYear()} RentNest. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
