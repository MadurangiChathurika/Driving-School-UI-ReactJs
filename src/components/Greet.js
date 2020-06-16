import React from 'react'
import { Button,Overlay,Jumbotron} from 'react-bootstrap';
import './Greet.css';
import components from './slide_1.jpg';
console.log(components);

function Greet () {
 
    return (
    
<header className="page-header header container-fluid">
		<div className="overlay"></div>
		<div className="description">
			
			<h1 className="text-uppercase font-weight-bold">Welcome to the Viraja Driving School !!</h1>
		
			<p >Bootstrap is a front-end framework that helps you build mobile responsive
			websites quickly and easily. Bootstrap was originally created by a small group of
			developers working at Twitter. They developed Bootstrap as an internal tool to help
			create consistent web interfaces. Since then it has seen several major updates
			over the years, together with the contribution of a large number of contributors. The
			last update is Bootstrap 4 in January 2018.
			</p>
			
			
		</div>
		</header>

    );
}


export default Greet;