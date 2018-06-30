import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav ng-class="hide-on-small-only">
          <ul class="side-nav fixed section table-of-contents">
            <li class="logo"><a id="logo-container" aria-label="Navigate to the beginning of the page" href="#intro" class="brand-logo teal-text">
                <h1>Andrew Borstein<span class="brown-text light">Full Stack Developer</span></h1></a></li>
            <li class="bold"><a aria-label="Navigate to the About section" href="#about" class="waves-effect waves-dark teal-text"><i class="mdi-social-person small"></i><span>About</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Experience section" href="#experience" class="waves-effect waves-dark cyan-text"><i class="mdi-action-trending-up small"></i><span>Experience</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Projects section" href="#projects" class="waves-effect waves-dark indigo-text"><i class="mdi-av-web small"></i><span>Projects</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Skills section" href="#skills" class="waves-effect waves-dark purple-text"><i class="mdi-av-equalizer small"></i><span>Skills</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Awards section" href="#awards" class="waves-effect waves-dark red-text"><i class="mdi-action-grade small"></i><span>Awards</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Education section" href="#education" class="waves-effect waves-dark orange-text"><i class="mdi-social-school small"></i><span>Education</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Contact section" href="#contact" class="waves-effect waves-dark brown-text"><i class="mdi-content-mail small"></i><span>Contact</span></a></li>
            <li class="bold"><a aria-label="Open Andrew's resume in a new tab" href="https://docs.google.com/document/d/1evlvmAcOmPTttl1isyX_UcQbLO5pK8OwB4Rs2Sv4riY" target="_blank" class="waves-effect waves-dark grey-text text-darken-3"><i class="mdi-action-description small"></i><span>Resume</span></a></li>
          </ul>
        </nav>
        <nav class="hide-on-large only trigger z-depth-1"><a aria-label="Toggle visibility of the mobile navbar" href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i></a>
          <div class="name-title"><a id="name" aria-label="Navigate to the beginning of the page" href="#main" class="teal-text">Andrew Borstein</a><span class="brown-text light">Full Stack Developer</span></div>
        </nav>
        <nav class="hide-on-large only">
          <ul id="slide-out" class="side-nav">
            <li class="bold"><a aria-label="Navigate to the About section" href="#about" class="waves-effect waves-dark teal-text"><i class="mdi-social-person small"></i><span>About</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Experience section" href="#experience" class="waves-effect waves-dark cyan-text"><i class="mdi-action-trending-up small"></i><span>Experience</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Projects section" href="#projects" class="waves-effect waves-dark indigo-text"><i class="mdi-av-web small"></i><span>Projects</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Skills section" href="#skills" class="waves-effect waves-dark purple-text"><i class="mdi-av-equalizer small"></i><span>Skills</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Awards section" href="#awards" class="waves-effect waves-dark red-text"><i class="mdi-action-grade small"></i><span>Awards</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Education section" href="#education" class="waves-effect waves-dark orange-text"><i class="mdi-social-school small"></i><span>Education</span></a></li>
            <li class="bold"><a aria-label="Navigate to the Contact section" href="#contact" class="waves-effect waves-dark brown-text"><i class="mdi-content-mail small"></i><span>Contact</span></a></li>
            <li class="bold"><a aria-label="Open Andrew's Resume in a new tab" href="https://docs.google.com/document/d/1evlvmAcOmPTttl1isyX_UcQbLO5pK8OwB4Rs2Sv4riY" target="_blank" class="waves-effect waves-dark grey-text text-darken-3"><i class="mdi-action-description small"></i><span>Resume</span></a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
