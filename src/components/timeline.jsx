import React, { Component } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody } from 'reactstrap';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Contact Us</h2>
              </div>
            </div>

            
            <CardGroup>
              <Card>
                <CardImg  src="http://i66.tinypic.com/2drv15h.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Ananpal Sandhu</CardTitle>
                  <CardSubtitle>705-555-5555</CardSubtitle>
                  <CardSubtitle>ananpal.sandhu@gmail.com</CardSubtitle>
                  <CardText>Please follow me on fb by clicking button below</CardText>
                  <p><a className="btn btn-primary btn-learn" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></p>
                </CardBody>
              </Card>
              <Card>
                <CardImg  src="http://i66.tinypic.com/2drv15h.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Gurkirat Singh</CardTitle>
                  <CardSubtitle>705-455-4445</CardSubtitle>
                  <CardSubtitle>gurkirat.singh@gmail.com</CardSubtitle>
                  <CardText>Please follow me on fb by clicking button below</CardText>
                  <p><a className="btn btn-primary btn-learn" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></p>
                </CardBody>
              </Card>
              <Card>
                <CardImg src="http://i66.tinypic.com/2drv15h.png" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Sahilpreet Singh</CardTitle>
                  <CardSubtitle>705-435-4999</CardSubtitle>
                  <CardSubtitle>sahilpreet.singh@gmail.com</CardSubtitle>
                  <CardText>Please follow me on fb by clicking button below</CardText>
                  <p><a className="btn btn-primary btn-learn" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></p>
                </CardBody>
              </Card>
            </CardGroup>
          
            
          </div>
        </section>
      </div>
      
    )
  }
}
