import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <section id="education" className="section scrollspy">
          <h3 className="page-title white-text teal">Education</h3>
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="http://upenn.edu" className="teal-text hoverline">University of Pennsylvania</a>
                      </span>
                    </p>
                    <p className="brown-text">Philadelphia, PA | 2011 - 2013</p>
                    <ul>
                      <li>B.A. in Psychology</li>
                      <li>Summa Cum Laude</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="http://www.gwu.edu" className="teal-text hoverline">George Washington University</a>
                      </span>
                    </p>
                    <p className="brown-text">Washington, D.C. | 2001 - 2003</p>
                    <ul>
                      <li>B.A. candidate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
  }
}
