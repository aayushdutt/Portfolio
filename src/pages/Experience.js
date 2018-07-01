import React, { Component } from 'react'
import ExperienceItem from '../components/ExperienceItem'
import ExperienceContents from '../Content/ExperienceData'

export default class Experience extends Component {
  
  ExperienceItems = ExperienceContents.map(ExperienceContent => {
    return <ExperienceItem key={ExperienceContent.company} ExperienceContent={ExperienceContent} />
  })

  render() {
    return (
        <section id="experience" className="section scrollspy">
          <h3 className="page-title white-text teal">Experience</h3>
          <div className="container">
            {this.ExperienceItems}
          </div>
        </section>
    )
  }
}
