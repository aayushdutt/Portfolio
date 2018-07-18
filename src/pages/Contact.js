import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section id="about" className="section scrollspy">
          <h3 className="page-title white-text teal">Contact Me</h3>
          <div className="container flow-text">
            <blockquote>
              <h2>Email: <a href="mailto:aayushd100@gmail.com">aayushd100@gmail.com</a></h2>
              <h2>Github: <a href="https://www.github.com/aayushdutt">github.com/aayushdutt</a></h2>
              <h2>LinkedIn: <a href="https://www.linkedin.com/in/aayush-dutt/">linkedin.com/in/aayush-dutt/</a></h2>
            </blockquote>
          </div>
        </section>
    )
  }
}
