import React, { Component } from 'react'
import EducationItem from '../components/EducationItem';
import EducationContents from '../Content/EducationData'

export default class Education extends Component {
  
  EducationItems = EducationContents.map(EducationContent => {
    return <EducationItem key={EducationContent.name} EducationContent={EducationContent}/>
  })

  render() {
    return (
        <section id="education" className="section scrollspy">
          <h3 className="page-title white-text teal">Education</h3>
          <div className="container">
            <div className="row">
              {this.EducationItems}              
            </div>
          </div>
        </section>
    )
  }
}
