import React from 'react'
import imgSrc from "../assests/contact.svg";


const Contact = () => {
  return (
    <div>
    <div className="contact d-flex">
    <div className="container contact_container">
        <aside className="contact_aside">
            <div className="aside_image">
                <img src={imgSrc} alt="" />
            </div>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deleniti modi qui in? Cumque, eveniet.</p>
            <ul className="contact_details">
                <li>
                <i class='bx bx-phone align-middle fs-3'></i>
                    <h5 >+20 1026760747</h5>
                </li>
                <li>
                <i class='bx bx-envelope  align-middle fs-3' ></i>
                    <h5>ashrafmhmd83@gmail.com</h5>
                </li>
                <li>
                <i class='bx bx-map align-middle fs-3' ></i>
                    <h5>Egypt, Dakahlia Governorate, Minya Al-Nasr Center, Al-Draksha</h5>
                </li>
            </ul>

            <ul className="contact_social">
                <li><a href="https://www.facebook.com/"><i class='bx bxl-facebook text-white fs-5 text-center align-middle' ></i></a></li>
                <li><a href="#"><i class='bx bxl-instagram text-white fs-5 text-center align-middle' ></i></a></li>
                <li><a href="#"><i class='bx bxl-twitter text-white fs-5 text-center align-middle' ></i></a></li>
                <li><a href="#"><i class='bx bxl-linkedin text-white fs-5 text-center align-middle' ></i></a></li>
            </ul>
        </aside>

        <form  className = "contact_form" action="">
            <div className="form_name">
                <input type="text" name="First Name" placeholder="First Name" required />
                <input type="text" name="Last Name" placeholder=" Last Name" required />
            </div>
            <input type="email" name="Email Address" placeholder="Your Email Address" required />
            <textarea name="Message"  rows="7" placeholder="Message" required />
                <button type="submit" className="btn btn-primary">Send Message</button> 
        </form>
    </div>
</div>

    </div>
  )
}

export default Contact



/*

 <div className="contact">
        <div className="container contact_container">
            <aside className="contact_aside">
                <div className="aside_image">
                    <img src="./images/contact.svg" alt="">
                </div>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis deleniti modi qui in? Cumque, eveniet.</p>
                <ul className="contact_details">
                    <li>
                        <i className="fa-solid fa-phone"></i>
                        <h5>+20 1026760747</h5>
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope"></i>
                        <h5>ashrafmhmd83@gmail.com</h5>
                    </li>
                    <li>
                        <i className="fa-solid fa-location-dot"></i>
                        <h5>Egypt, Dakahlia Governorate, Minya Al-Nasr Center, Al-Draksha</h5>
                    </li>
                </ul>

                <ul className="contact_social">
                    <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </aside>

            <form  className = "contact_form" action="">
                <div className="form_name">
                    <input type="text" name="First Name" placeholder="First Name" required>
                    <input type="text" name="Last Name" placeholder=" Last Name" required>
                </div>
                <input type="email" name="Email Address" placeholder="Your Email Address" required>
                <textarea name="Message"  rows="7" placeholder="Message" required></textarea >
                    <button type="submit" className="btn btn_primary">Send Message</button> 
            </form>
        </div>
    </div>
    
*/