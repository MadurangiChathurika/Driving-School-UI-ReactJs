import React from 'react'
import './Footer.css';

function Footer(){
    return (
        <footer className="page-footer">
	        <div className="container">
		        <div className="row">
			        <div className="col-lg-8 col-md-8 col-sm-12">
				          <h6 className="text-uppercase font-weight-bold">
				           Viraja Driving School</h6>
				          <h5>QUICK LINKS</h5>
						  	<a href="#home">HOME</a><br></br>
							<a href="why">WHY</a><br></br>
							<a href="faq">FAQ</a><br></br>
							<a href="contact">CONTACT</a><br></br>
							<a href="about">ABOUT</a>
							
			        </div>
			
			        <div className="col-lg-4 col-md-4 col-sm-12">
				          <h6 className="text-uppercase font-weight-bold">Contact</h6>
				          <p>35, UCSC, Reid Avenue, Colombo 7
				          <br/>info@Group39website.com
				          <br/>+ 01 234 567 88
				          <br/>+ 01 234 567 89</p>
			        </div>
		        </div>
        	<div className="footer-copyright text-center">© 2019 Copyright:
	            Group39Website.com</div>
	        </div>
        </footer>
    );
}

export default Footer;



        