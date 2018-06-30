import React, { Component } from 'react'

export default class Landing extends Component {
  render() {
    return (
        <section id="intro" className="section scrollspy full-height">
          <div className="overlay" />
          <div className="container">
            <h2>I want to
              <span className="teal">make things</span>
              <br />that <span className="underline">make a difference</span>.</h2>
          </div>
        </section>
    )
  }
}
