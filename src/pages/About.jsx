import React from 'react'
import img from "../assests/Letter_Desktop_en_2x_v3.jpg"

const About = () => {
  return (
    <div>
      
    <section className="section bg-c-light border-bottom py-5">
        <div className="container">
            <h5 className="main-heading"></h5>

            <div>
            <img src= {img} alt="" width= "100%"/>
            </div>

        </div>
    </section>
    </div>
  )
}

export default About
