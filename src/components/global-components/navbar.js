import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

   componentDidMount() {

     const $ = window.$;

     $( 'body' ).removeClass( 'home-3' );

   }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div className="navbar-area">
            {/* navbar top start */}
            {/* <div className="navbar-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 text-md-left text-center">
                    <ul>
                      <li><p><i className="fa fa-map-marker" /> 2072 Pinnickinick Street, WA 98370</p></li>
                      <li><p><i className="fa fa-envelope-o" />  info@website.com</p></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="topbar-right text-md-right text-center">
                      <li className="social-area">
                        <a href=""><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href=""><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href=""><i className="fa fa-instagram" aria-hidden="true" /></a>
                        <a href=""><i className="fa fa-pinterest" aria-hidden="true" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <nav className="navbar navbar-area-1 navbar-area navbar-expand-lg">
              <div className="container nav-container">
                <div className="responsive-mobile-menu">
                  <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="icon-left" />
                    <span className="icon-right" />
                  </button>
                </div>
                <div className="logo">
                  <Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="img" /></Link>
                </div>
                <div className="nav-right-part nav-right-part-mobile">
                  <a className="signin-btn" href="signin.html">Sign In</a>
                  <a className="btn btn-base" href="blog.html">Sign Up</a>
                  {/* <a className="search-bar" href=""><i className="fa fa-search" /></a> */}
                </div>
                <div className="collapse navbar-collapse go-top" id="edumint_main_menu">
                  <ul className="navbar-nav menu-open">
                    <li className="menu-item-has-children current-menu-item">
                      <Link to="/">Home</Link>
                      <ul className="sub-menu">
                        <li><Link to="/">Home 01</Link></li>
                        <li><Link to="/home-v2">Home 02</Link></li>
                        <li><Link to="/home-v3">Home 03</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/course">Course</Link>
                      <ul className="sub-menu">
                        <li><Link to="/course">Course</Link></li>
                        <li><Link to="/course-details">Course Single</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="">Pages</a>
                      <ul className="sub-menu">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/event">Event</Link></li>
                        <li><Link to="/event-details">Event Details</Link></li>
                        <li><Link to="/instructor">Instructor</Link></li>
                        <li><Link to="/instructor-details">Instructor Details</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/sign-in">Sign In</Link></li>
                        <li><Link to="/sign-up">Sign Up</Link></li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/blog">Blog</Link>
                      <ul className="sub-menu">
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/blog-details">Blog Details</Link></li>
                      </ul>
                    </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
                <div className="nav-right-part nav-right-part-desktop">
                  <Link className="signin-btn" to="/sign-in">Sign In</Link>
                  <Link className="btn btn-base" to="/sign-up">Sign Up</Link>
                  {/* <a className="search-bar" href=""><i className="fa fa-search" /></a> */}
                </div>
              </div>
            </nav>
          </div>


        )
    }
}


export default Navbar