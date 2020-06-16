import React from 'react'
import './Why.css';
import Footer from './Footer'

function Why () {

    return (
      
      <div> 
      <div className="headimage">  
      <div className="overlay"></div>
      </div>
<br></br>
<div className="container">      
<div className="row">
  <div className="col-md-4">
     <h5>WHY CHOOSE US</h5> 
    <p>As a #1 driving school management system, we have created the most comprehensive management 
    system in the country.This did not come over night. With over 10 years of experience we have been 
    able to adapt and evolve our software as the technology, state laws and industry changed over time.
    We have learned from hundreds of our customers and helped them expand their business, stay compliant 
    and provide better experience to parents and students.</p>
  </div> 

  <div className="col-md-4">
     <h5>OUR MISSION</h5> 
    <p>Help schools focus on what matters. When we started it was clear that many drivng schools had very 
    little understanding how to utilize technology to operate their business more efficiently. We have also 
    realized that future is not desktop software but internet based delivery of information. We have heavily 
    invested and still do in bringing the latest technology to our clients so that they can stay competitive 
    in an ever changing world.</p>
  </div> 

  <div className="col-md-4">
     <h5>WHAT WE DO</h5> 
    <p>Our web based driving school management software has helped hundreds of schools achieve higher 
    standard of education by being able to focus on the education. Our software is a tool that can enable 
    school to expend, maintain profitability and improve student and parent experience during the program. 
    We deliver a custom solution that is tailered for each school. We are the support mechanism behind each 
    client school.</p>
  </div> 
</div>
</div>
<Footer/>
</div>
    );
}


export default Why; 
