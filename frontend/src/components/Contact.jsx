/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Contact() {

  return (
    <>
    
    <Navbar/>
    <div className='flex h-screen items-center justify-center '>
    <div className="modal-box    dark:bg-slate-900 dark:text-white ">
    <form  method="dialog">
         <h1 className='text-[56px] font-extrabold'>Contact Me</h1>

        <div className='mt-4 space-y-2 '>
            <span>Name</span>
            <br />
            <input type="text" 
            placeholder='Enter your Name'
            className='sm:w-[450px] w px-3 py-1  rounded-md outline-none text-black border-[2px]'
             />
            
        </div>
        {/* Email */}
        <div className='mt-4 space-y-2 '>
            <span>Email</span>
            <br />
            <input type="email" 
            placeholder='Enter your Email'
            className='sm:w-[450px] w-auto px-3 py-1  rounded-md outline-none text-black border-[2px]' 
             />
            
        </div>
        {/* Password */}
        <div className='mt-4 space-y-2 '>
            <span>Message</span>
            <br />
            <textarea  
            placeholder='Enter Your Message'
            className=' sm:w-[450px]  w-auto px-3  py-1 h-48 rounded-sm outline-none  text-black border-[2px]' 
           
            />
            
        </div>
        
      
        </form>
      </div>
    
    </div>
     <Footer/>
        </>
  )
}

export default Contact