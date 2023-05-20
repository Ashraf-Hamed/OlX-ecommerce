import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='footer text-white bg-dark '>

       <div className="container  py-5 py-md-5 ">
    
        <div className="row d-flex justify-content-between">

            <div className="col-md-4">
                <h5>Contact Information</h5>
                <div className='py-5 fs-6'>
                    <p className='test-white mb-2'>
                    <i class='bx bxl-whatsapp fs-4' ></i>
                    <span className='ms-4 '>+20 1014894481</span>
                    </p>
                    <p className='test-white mb-2'>
                    <i class='bx bx-envelope-open fs-4' ></i>
                    <span className='ms-4 '>ashrafMhmd@gmail.com</span>
                    </p>
                    <p className='test-white mb-2'>
                    <i class='bx bx-map fs-4'></i>
                    <span className='ms-4 '>Egypt,Elmansoura</span>
                    </p>

                    <p className='test-white mb-1'></p>
                </div>
            </div>

            <div className="col-md-4">
             <h5>Shop owners</h5>
             <div className="py-5">
                    <div> 
                    <i class='bx bx-chevrons-left me-3 mb-3'></i>
                    <span >How to register</span>
                    </div>
                    <div> 
                    <i class='bx bx-chevrons-left me-3 mb-3'></i>
                    <span>Enter store information</span>
                    </div>
                    <div> 
                    <i class='bx bx-chevrons-left me-3 mb-3'></i>
                    <span>How to register</span>
                    </div>

               
               
             </div>
            
            </div>



            <div className="col-md-4 text-center">
            <h5>Quick Links</h5>

                <div className="buttons  d-flex flex-column  align-items-center  mb-5">
                
            
                <span><NavLink to="https://www.facebook.com/" className="btn btn-outline-primary  my-2 me-2"> <i class='bx bxl-facebook fs-5 text align-middle'></i></NavLink>
                <NavLink to="https://twitter.com/i/flow/login" className="btn btn-outline-primary  my-2 me-2"><i class='bx bxl-twitter fs-5 align-middle' ></i></NavLink></span>
               <span>
               <NavLink to="https://www.instagram.com/" className="btn btn-outline-primary  my-2 me-2"><i class='bx bxl-instagram-alt fs-5 align-middle' ></i></NavLink>
               <NavLink to="https://www.linkedin.com/feed/" className="btn btn-outline-primary  my-2 me-2"><i class='bx bxl-linkedin fs-5 align-middle' ></i></NavLink>
               </span>
               <NavLink to="/" className="btn btn-outline-primary me-2 my-2">Home</NavLink>
                </div>
               

            </div>

            
        </div>
    </div>
      
    </section>
  )
}

export default Footer
