import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <section id="skills" className="section scrollspy">
      <h3 className="page-title white-text teal">Skills</h3>
      <div className="container">
      <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">Javascript</h4>
            <div className="row text-center">
              <div className="col s6 m2">
                <img alt src="static/img/skills/react.png" className="responsive-img" />React</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/javascript.png" className="responsive-img" />Javascript</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/jquery.png" className="responsive-img" />jQuery</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/nodejs.png" className="responsive-img" />Node</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/electron.png" className="responsive-img" />Electron</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/reactNative.png" className="responsive-img" />React Native</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">Back-End</h4>
            <div className="row text-center">
              <div className="col s6 m2">
                <img alt src="static/img/skills/mongodb.png" className="responsive-img" />MongoDB</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/firebase.png" className="responsive-img" />Firebase</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/mysql.png" className="responsive-img" />MySQL</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">CMS</h4>
            <div className="row text-center">
              <div className="col s6 m2">
                <img alt src="static/img/skills/gatsby.png" className="responsive-img" />Gatsby</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/netlifycms.png" className="responsive-img" />Netlify CMS</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/strapi.png" className="responsive-img" />Strapi</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/contentful.jpg" className="responsive-img" />Contentful</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/wordpress.png" className="responsive-img" />Wordpress</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">HTML</h4>
            <div className="row text-center">
              <div className="col s6 m2">
                <img alt src="static/img/skills/html5.png" className="responsive-img" />HTML5</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/react.png" className="responsive-img" />JSX</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/jade.png" className="responsive-img" />Jade</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/ejs.png" className="responsive-img" />EJS</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/handlebars.png" className="responsive-img" />Handlebars</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">CSS</h4>
            <div className="row text-center">
              <div className="col s6 m2">
                <img alt src="static/img/skills/css3.png" className="responsive-img" />CSS3</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/sass.png" className="responsive-img" />SASS</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/bootstrap.png" className="responsive-img" />Bootstrap</div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h4 className="brown-text light">Other</h4>
            <div className="row text-center">
              <div className="col s6 m2">
                <img alt src="static/img/skills/python.png" className="responsive-img" />Python</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/cpp.png" className="responsive-img" />C++</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/github.png" className="responsive-img" />Github</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/heroku.png" className="responsive-img" />Heroku</div>
              <div className="col s6 m2">
                <img alt src="static/img/skills/gulp.png" className="responsive-img" />Gulp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
