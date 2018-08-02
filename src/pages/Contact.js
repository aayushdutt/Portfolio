import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section id="about" className="section scrollspy">
          <h3 className="page-title white-text teal">Contact Me</h3>
          <div className="container flow-text">
            <blockquote>
              <h2>Email: <a href="mailto:311yush@gmail.com" target="_blank">311yush@gmail.com</a> <i className="fas fa-external-link-alt"></i></h2>
              <h2>Github: <a href="https://www.github.com/aayushdutt" target="_blank">github.com/aayushdutt</a></h2>
              <h2>LinkedIn: <a href="https://www.linkedin.com/in/aayush-dutt/" target="_blank">linkedin.com/in/aayush-dutt/</a></h2>
            </blockquote>
          </div>
        </section>
    )
  }
}
