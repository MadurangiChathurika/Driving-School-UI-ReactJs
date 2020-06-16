import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { Button,Card,Jumbotron,Container } from 'react-bootstrap';
import './Faq.css';
import Footer from './Footer'


function Faq () {
  
    return (
    <div>    
    <div className="container">
        <div className="faq">
        
            <Jumbotron>  
        <h2>FREQUENTLY ASKED QUESTIONS</h2> 
              
            <ul class="breadcrumb"> 
            <li><a href="/components/Home">Home</a></li>
            <li>FAQS</li>
            </ul>
            </Jumbotron>
        </div> 
         <br></br>

    <Accordion>
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Can this software help me if I have a fairly small school?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body><p>Definitely. Our software will cut down on administrative tasks and customer service needs, 
             freeing up time for you and your staff, so you can focus on providing a great drivers ed. 
             experience and growing your company.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                I have large school with multiple locations?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
                <Card.Body><p>Our software is a workhorse. Driving School Software will help you manage all your locations, 
            vehicles and instructors. It offers unparelleled flexibility and scalability, adjusting easily 
            as your company grows. Our software will also let you adapt to new market conditions and new state 
            rules. If you want to offer new service we can help you.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                What if I haven't opened school yet?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
                <Card.Body><p>That's not a problem. We can help you get the software set up and customized before you open, 
            ensuring a smooth opening process and happy students and parents from day one.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                If my school grows in the future? Will the software be able to handle new students and/or locations?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
                <Card.Body><p>Absolutely. Our software will seamlessly grow with you. We don't limit the number of students or 
            locations our software will handle. And we provide training and support that makes adding students 
            and locations a simple task for you or your staff.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Can you customize reports for my school?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
                <Card.Body><p>Yes. Besides the wide array of reports built into the software, we can easily create custom reports 
            to track the data most helpful to your office.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                What if I haven't opened school yet?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
                <Card.Body><p>That's not a problem. We can help you get the software set up and customized before you open, 
            ensuring a smooth opening process and happy students and parents from day one.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                What is the setup process?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="6">
                <Card.Body><p>Once we receive terms of use, privacy policy and deposit, your account manager will contact you to 
            determine level of customization. This will include custom fields, business rules for self scheduling,
            and more. Once we get all needed information we will proceed with software setup. AFter the software 
            setup is completed accoint manager will contact you to start training process.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                What about my existing students?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="7">
                <Card.Body><p>We will gladly import your existing students free of charge. Just let your account manager that 
            you want to import existing students. We require data to be provided in electronic format 
            (preferable Excel file format). We do re quire data to be in certain format and we will provide 
            you with a sample of how we need information provided.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                How long it takes to setup software?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="8">
                <Card.Body><p>It ussually takes 5-7 business days. though we have setup systems before in as many as couple of days.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                What if i need to add new data fields after software is setup?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="9">
                <Card.Body><p>That is not a problem. Just let us know at any time if you wish to capture any additional data fields.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="10">
                How do I process credit cards?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="10">
                <Card.Body><p>We are partnering with TransNational Bank Card for credit card processing, though you can use your 
            own processor. The only thing that we require that you have an Authorize.net payment gateway 
            account. If you want to get competitive rates and save money please contact TransNational Bank Card. 
            They have exclusive pricing for our customers. Please note that we do not provide merchant accounts, and 
            that you will need to set that up if you wish to accept credit card payments online.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="11">
                What happens when credit card is processed?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="11">
                <Card.Body><p>Once the credit card is processed funds are placed directly nto your account bank account within 
            few days by your merchant account provider. Deposit of funds is dependent on your bank and 
            merchant account. We have no control over that aspect. But the processed transaction will be 
            recorded in our software and for a specific student account.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="12">
                Who do I ccontact if I have questions or need tech support?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="12">
                <Card.Body><p>We offer both phone and email support during the business hours (9am to 6pm EST) or email anytime. 
            If we are not available on the phone you can leave a voice mail and our system will automatically 
            create and transcribe your message into a ticket. We believe that customer service is very 
            important for both yours and our success, so we prioritize timely and thorough responses to your 
            questions.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="13">
                How is training done?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="13">
                <Card.Body><p>All training is done online, over the phone and through web meetings. We usualy break the training 
            into 4 sessions, though we can do more if needed at no additional cost. After each training session 
            we expect school to start using features that they were trained on.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="14">
                Is there any cost for staff training?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="14">
                <Card.Body><p>NOPE. IT IS FREE AND INCLUDED. We normaly train the owners and managers of the ins and outs of the 
            software, so that they can have full understanding of the capability and how it will help school 
            run better. Training of the schools instructors and office staff we leave up to the school. Reason 
            for that is that we do not know the technical aptitude of those employees, but more importantly 
            every school has a different way of introducing and rolling out the new software. So for those 2 
            reasons, we stay away from training office staff. However we do provide necessary support at any 
            time.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="15">
                What if something needs to be fixed?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="15">
                <Card.Body><p>We categorize service responses based on urgency levels. Since our software is "mission critical" 
            we have our developers staffed 7 days a week, including major holidays, so in case that something 
            goes wrong during the weekend, we can fix and address the issue within 24 hours. We also have 
            ticket management system that will allow you to view the status of your requests.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="16">
                How long does it take to fix any issues?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="16">
                <Card.Body><p>Usually within 24 hours or 1 business days. We also have some limited technical team availability 
            on the weekends for urgent matters.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="17">
                What is he cost of website?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="17">
                <Card.Body><p>ITS FREE ! We offer to our clients free website design services up to 15 page mobile friendly 
            website design. Additionsl pages are priced at $100 per page. We also offer FREE website hosting.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="18">
                What about website hosting and emails?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="18">
                <Card.Body><p>We also offer FREE website hosting and emails at no extra cost to our software clients.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="19">
                How is website maintained?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="19">
                <Card.Body><p>We provide website maintenance FREE of charge. We strongly oppose the concept of clients maintaining 
            their own website for several reasons: #1 School owners are ususaly not tech savy and are not proficient 
            with website design and technology. #2 Before any design or content change is requested it's always good 
            to have another pair of eyes to review. We will provide advice on industry standards regarding security, 
            integration and general ideas for better user experience. Just let us know what would you like to 
            accomplish and we will privide you with an advice. It is in our own interest for you website to look and 
            function good.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="20">
                Can my website be accessed on smartphones and tablets?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="20">
                <Card.Body><p>Yes. All our designs are mobile friendly, which means the web pages automatically adjust to the 
            device that is being viewed on. This is one of the critical distinctions between us and our 
            competitors. We always push the latest technology.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="21">
                I am new school and dont have domain name yet?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="21">
                <Card.Body><p>We can help you purchase domain name, though we would advise that you purchase that yourself. 
            One recomendation would be to purchase domain name through reputable organizations such as 
            godaddy.com or Networksolutions.com instead of some low cost domain name registry for simple 
            reason of quality of service. Those two companies are top providers in industry and offer 24/7 
            customer support. Saving few dollars is not worth the hastle dealing with some offshore entity.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="22">
                Is your software secure?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="22">
                <Card.Body><p>Yes. We apply most up to date industry wide standards regarding server, application and database 
            security. All of our pages can only be accessed over encrypted pages, so that transfer of data is 
            otected. We are also PCI DSS Level 2 Compliant.In addition we utilize McafeeSecure as our 3rd 
            party provider and auditor of our system. They check our servers and application on a daily basis 
            and probe for vulnerabilities. If one is discovered we need to make changes within 72 hours.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="23">
                Is data backed up?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="23">
                <Card.Body><p>Yes. We perform automatic nightly backups of all customer data and our infrastructure. Backups are 
            stored at a separate data storage facility.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="24">
                I dont want my staff to be able to do whatever they want. Can I limit their user rights?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="24">
                <Card.Body><p>YES. As in any organization some employees should be allowed to do or see certain things and others 
            don't. We have very detailed and extensive set of user rights thatr can control access to 
            information and functionality based on their user group. For example, if you don't want to allow 
            your instructors to edit lessons, we can prevent them from doing so.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="25">
                Was there ever a data breach?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="25">
                <Card.Body><p>No, and we work hard to keep it that way.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="26">
                What if my computer is damaged or the office experiences some kind of disaster?
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="26">
                <Card.Body><p>Your data is safely saved and accessible, even if your office location experiences a natural or an 
            accidental disaster. If your office is closed or damaged, your data is still safe and secure. 
            Clients which experienced major storms (Sandy, Katrina, and Florence) had minimal impact on their 
            business, and zero impact on data access.</p></Card.Body>
            </Accordion.Collapse>
        </Card>

    </Accordion>
    
    </div>
    <Footer/>
    </div>
    
);
}


export default Faq; 