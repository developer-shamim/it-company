import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from '../../../images/banner.jpg';
import "./Header.css"


const Header = () => {
    return (
        <div>
             <section className="background">
             <nav className="navbar navbar-expand-lg navbar-light mr-5 pl-5 ml-5">
                <img className="navbar-brand" src="/images/logo.png" alt=""/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                    <Link to="/home" className="nav-link active mr-5" >Home <span className="sr-only">(current)</span></Link>
                    <Link to="/" className="nav-link mr-5" >About</Link>
                    <Link to="/" className="nav-link mr-5" >Our portfolio</Link>
                    <Link to="/"className="nav-link mr-5" href="/#">Our Teams</Link>
                    <Link to="/" className="nav-link mr-5" href="/#">Contact Us</Link>
                    <button class="btn btn-success">
                    <Link to="/insertImages" className="nav-link text-white">Insert Images</Link>
                    </button>
                    
                    </div>
                </div>
             </nav>
              
                <div className="row d-flex ml-5 mt-5">
                    <div className="col-sm-4 mt-5 banner-text ml-5 ml-5 justify-content-center"> 
                        <h1> Let's Grow Your Brand To The Next Level</h1>
                        <br/>
                        <p>We can customize your marketing materials be it branding identity or websites or apps to that level untill you feel statisfied. Customers satisfaction is our ultimate goal. </p>    
                        <br/>
                        <Link to="/design">
                        <button className="btn btn-success"> Design Your T-Shirt Now </button> 
                        </Link>         
                    </div>

                    <div className="col-sm-6 ml-5">
                        <img className="img-fluid" src={Banner} alt=""/>
                    </div>

                </div>
                
                </section>  
            
        </div>
    );
};

export default Header;