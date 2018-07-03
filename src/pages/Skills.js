import React, { Component } from 'react'
import SkillData from '../Content/SkillData'

export default class Skills extends Component {
  render() {
    
        const javascriptSkills = SkillData.javascript.map(javascriptSkill => {
          return (
            <div key={javascriptSkill.name} className="col s6 m2">
            <img alt={javascriptSkill.name} src={"static/img/skills/" + javascriptSkill.image} className="responsive-img" />{javascriptSkill.name}</div>
          )
        })
        const backendSkills = SkillData.backend.map(backendSkill => {
          return (
            <div key={backendSkill.name} className="col s6 m2">
            <img alt={backendSkill.name} src={"static/img/skills/" + backendSkill.image} className="responsive-img" />{backendSkill.name}</div>
          )
        })
        const cmsSkills = SkillData.cms.map(cmsSkill => {
          return (
            <div key={cmsSkill.name} className="col s6 m2">
            <img alt={cmsSkill.name} src={"static/img/skills/" + cmsSkill.image} className="responsive-img" />{cmsSkill.name}</div>
          )
        })
        const htmlSkills = SkillData.html.map(htmlSkill => {
          return (
            <div key={htmlSkill.name} className="col s6 m2">
            <img alt={htmlSkill.name} src={"static/img/skills/" + htmlSkill.image} className="responsive-img" />{htmlSkill.name}</div>
          )
        })
        const cssSkills = SkillData.css.map(cssSkill => {
          return (
            <div key={cssSkill.name} className="col s6 m2">
            <img alt={cssSkill.name} src={"static/img/skills/" + cssSkill.image} className="responsive-img" />{cssSkill.name}</div>
          )
        })
        const otherSkills = SkillData.other.map(otherSkill => {
          return (
            <div key={otherSkill.name} className="col s6 m2">
            <img alt={otherSkill.name} src={"static/img/skills/" + otherSkill.image} className="responsive-img" />{otherSkill.name}</div>
          )
        })
    

  return (
      <section id="skills" className="section scrollspy">
        <h3 className="page-title white-text teal">Skills</h3>
        <div className="container">

        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">Javascript</h4>
            <div className="row text-center">
              {javascriptSkills}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">Back-End</h4>
            <div className="row text-center">
              {backendSkills}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">CMS</h4>
            <div className="row text-center">
              {cmsSkills}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">HTML</h4>
            <div className="row text-center">
              {htmlSkills}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">CSS</h4>
            <div className="row text-center">
              {cssSkills}
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">Other</h4>
            <div className="row text-center">
              {otherSkills}
            </div>
          </div>
        </div>

      </div>
    </section>
    )
  }
}
