import React from 'react'



function Footer() {
  return (
    <footer  className='footer mt-5 pt-5 '>
       <div className='container'>
        <div className=' row '>
          <div className='col-md-3 mb-4'><h6> BRAND</h6></div>
          <section className='col-lg-3'>
          <h5>Contact Us</h5>
          <ul>
          <li>+2348149166806</li>
          <li>bankolefemi09@gmail.com</li>
          </ul>
          </section>
          
          <section className='col-lg-3'>
          <h5>Our Services</h5>
          <ul>
          <li>Web Development</li>
          <li>Graphics Design</li>
          <li>Product Design</li>
          </ul>
          </section>

        </div>
        </div>
    </footer>
  )
}

export default Footer