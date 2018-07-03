import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
        <section id="intro" className="section scrollspy full-height">
          <div className="overlay">
            <img alt="Aayush Dutt" className="mainImage" src="static/img/mainImage/5.jpg"/> 
          </div>
          <div className="container">
            <h2>I <span className="teal">Develop</span></h2>
          </div>
        </section>
    )
  }
}
