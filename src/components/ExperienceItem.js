import React, { Component } from 'react'

export default class ExperienceItem extends Component {
  render() {
    const {ExperienceContent} = this.props
    const Developments = ExperienceContent.developments.map(development => {
      return <li key={development}>{development}</li>
    })
    const Accomplishments = ExperienceContent.accomplishments.map(accomplishment => {
      return <li key={accomplishment}>{accomplishment}</li>
    })
    
    return (
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="http://wespire.com" target="_blank">
                      <img alt="WeSpire logo" src="static/img/wespire-logo.jpg" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="http://wespire.com" target="_blank" className="teal-text hoverline">{ExperienceContent.company}</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">{ExperienceContent.role}</div>
                <p>
                  <em className="grey-text">{ExperienceContent.about}</em>
                </p>
                <h6>Develop Product</h6>
                <ul>
                  {Developments}
                </ul>
                <h6>Accomplishments</h6>
                <ul>
                  {Accomplishments}
                </ul>
              </div>
              <div className="card-action">
                <span>{ExperienceContent.duration} | {ExperienceContent.place}</span>
              </div>
            </div>
    )
  }
}