import React, { Component } from 'react'

export default class EducationItem extends Component {
  render() {
    
    const {EducationContent} = this.props
    const majors = EducationContent.major.map(major => {
      return <li>{major}</li>
    })

    return (
          <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <p>
                <span className="card-title">
                  <a href="http://upenn.edu" className="teal-text hoverline">{EducationContent.name}</a>
                </span>
              </p>
              <p className="brown-text">{EducationContent.place} | {EducationContent.duration}</p>
              <ul>
                {majors}
              </ul>
            </div>
          </div>
        </div>
    )
  }
}
