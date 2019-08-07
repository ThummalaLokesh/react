import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
             
              <h1 id="colorlib-logo"><a href="index.html">Lab 03</a></h1>
              <span className="email"><i className="icon-mail"></i> ananpal.sandhu@gmail.com</span>
              <span className="email"><i className="icon-mail"></i> gurkirat.singh@gmail.com</span>
              <span className="email"><i className="icon-mail"></i> sahilpreet.singh@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About Us</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Contact Us</a></li>
                </ul>
              </div>
            </nav>
            
          </aside>
        </div>
      </div>
    )
  }
}
