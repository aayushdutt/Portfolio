import React, { Component } from 'react'
import mobile from 'is-mobile'

export default class Landing extends Component {
  mainImage = mobile() ? <img alt="Aayush Dutt" className="mainImage" src="static/img/mainImage/6.jpg"/>
                        : <img alt="Aayush Dutt" className="mainImage" src="static/img/mainImage/5.jpg"/> 
  render() {
    return (
        <section id="intro" className="section scrollspy full-height">
          <div className="overlay">
            {this.mainImage}
          </div>
          <div className="container">
            <h2>I <span className="teal">Develop</span></h2>
          </div>
        </section>
    )
  }
}
