import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <section id="projects" className="section scrollspy">
      <h3 className="page-title white-text teal">Projects</h3>
      <div className="container">
        <div className="row">
          {/* BlogSpire*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of BlogSpire web app" src="static/img/blogspire.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">BlogSpire
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Blogging web app created for the Engineering team at WeSpire.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>
                    <strong>Ruby on Rails</strong> backend</li>
                  <li>
                    <strong>Materialize CSS</strong> frontend</li>
                  <li>User
                    <strong>authentication</strong> via Devise</li>
                  <li>Implemented
                    <strong>liking functionality</strong>
                  </li>
                  <li>
                    <strong>Client-side rendering</strong> via AJAX</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Code Island website" href="https://blogspire.herokuapp.com/" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for Code Island project" href="https://github.com/andrewborstein/blogspire" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Code Island*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Code Island logo" src="static/img/code-island.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Code Island
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Online headquarters for the local Code for America brigade in Rhode Island.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Integrated “Next Meeting” via
                    <strong>Meetup API</strong>
                  </li>
                  <li>Developed
                    <strong>CSS and JS</strong> responsive menu</li>
                  <li>Created member list via
                    <strong>GitHub API</strong>
                  </li>
                  <li>Refreshed branding and layout</li>
                  <li>Refactored all existing code (
                    <strong>Jekyll</strong>)</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Code Island website" href="http://code-island.org" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for Code Island project" href="http://github.com/andrewborstein/code-island.org" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Saved By the Text*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Zach Morris from Saved by the Bell, on his clunky cell phone" src="static/img/saved-by-the-text.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Saved By the Text
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Fun, TV nostalgia-themed app that sends an MMS to a user's phone number.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Built with Ruby on
                    <strong>Rails</strong>
                  </li>
                  <li>Integrated
                    <strong>Twilio API</strong>
                  </li>
                  <li>Designed in
                    <strong>Bootstrap</strong>
                  </li>
                  <li>
                    <strong>Javascript</strong> input validation</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Saved By The Test web app" href="http://savedbythetext.herokuapp.com" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for Saved By the Text project" href="http://github.com/andrewborstein/saved-by-the-text" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Skate Something*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Skate boarder catching air on a half pipe" src="static/img/skate-something.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Skate Something
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Mobile-focused web app where users can explore, collect, and share skate spots.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Front-end development in
                    <strong>Bootstrap</strong>
                  </li>
                  <li>Contributed creative strategy and UX</li>
                  <li>Built dynamic templates using
                    <strong>Jade</strong>
                  </li>
                  <li>Worked with
                    <strong>MVC</strong> framework,
                    <strong>Node</strong> server</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Skate Something web app" href="http://skatesomething.com" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for Skate Something project" href="#" data-position="top" data-tooltip="Source is Private" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* RI WiFi*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="RI WiFi logo" src="static/img/ri-wifi.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">RI WiFi
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Sortable database of WiFi-enabled spots with details for laptop users.
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Ruby on
                    <strong>Rails</strong> &amp;
                    <strong>Bootstrap</strong>
                  </li>
                  <li>
                    <strong>Google Maps API</strong>
                  </li>
                  <li>Native Javascript
                    <strong>geolocation</strong>
                  </li>
                  <li>
                    <strong>Dynamic CSS</strong> color coding</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit RI WiFi web app" href="http://ri-wifi.herokuapp.com" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for RI WiFi project" href="http://github.com/andrewborstein/ri-wifi" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Pinterest*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Cute kitten" src="static/img/pinteresting.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Pinteresting
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Lite Pinterest clone, where users can 'pin' photos, especially those of cats.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Ruby on
                    <strong>Rails</strong> &amp;
                    <strong>Bootstrap</strong>
                  </li>
                  <li>Image upload with
                    <strong>AWS</strong>
                  </li>
                  <li>
                    <strong>jQuery</strong> Masonry effect</li>
                  <li>User Authentication with
                    <strong>Devise</strong>
                  </li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Pinteresting web app" href="http://asb-pinteresting.herokuapp.com" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for Pinteresting project" href="http://github.com/andrewborstein/pinteresting" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Shelter Finder*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Screenshot of Google map with pins on it" src="static/img/shelter-finder.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Shelter Finder
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Web app that helps Boston teens find the nearest available short-term housing.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Ruby on
                    <strong>Rails</strong> backend API</li>
                  <li>
                    <strong>AJAX</strong> query of Rails
                    <strong>JSON</strong>
                  </li>
                  <li>Custom
                    <strong>Google Maps API</strong> integration</li>
                  <li>Automatic location/distance calculation</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Sehlter Finder website" href="http://shelterfinder.herokuapp.com" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for Shelter Finder project" href="http://github.com/andrewborstein/youth-shelter-finder" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Custom Social Feed*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Chandon logo" src="static/img/chandon.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Custom Social Feed
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>AJAX Twitter and Instagram feed of specific #hashtag posts.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Fully customized
                    <strong>jQuery</strong> plugin</li>
                  <li>Integrates
                    <strong>Twitter and Instagram API</strong>
                  </li>
                  <li>Matches Chandon's exact branding</li>
                  <li>Built into custom
                    <strong>Tumblr</strong> theme</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Chandon Tumblr website" href="http://chandonusa.tumblr.com/pour-on-the-fun" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Guestlist Generator*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Header typography for Ryan and Christie wedding site" src="static/img/guest-list.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Guestlist Generator
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Automatically converts RSVP submissions into wedding guestlist.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Simple
                    <strong>Wordpress</strong> shortcode</li>
                  <li>Pulls data from a customized form</li>
                  <li>Displays styled results on any page</li>
                  <li>Built with
                    <strong>PHP</strong> and
                    <strong>Wordpress</strong> functions</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Wedding Guestlist website" href="http://ryanandchristieswedding.com/guest-list/" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Madlibs*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Andrew playfully posing with face half covered by laptop" src="static/img/madlibs.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Portfolio MadLibs
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Have fun with my personal profile by replacing random words.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Custom
                    <strong>jQuery</strong> script</li>
                  <li>Hover and click actions</li>
                  <li>Pulls from random word array</li>
                  <li>Hours of fun!</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Portfolio Madlibs website" href="http://andrewborstein.github.io/portfolio-madlibs/andrew.html" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                  <a aria-label="Visit the GitHub repo for the Portfolio Madlibs project" href="http://github.com/andrewborstein/portfolio-madlibs" target="_blank" data-position="top" data-tooltip="View Source" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Cidewalk for Etsy*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Cidewalk logo" src="static/img/cidewalk.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Cidewalk for Etsy
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>UI redeisgn of the popular mobile ad platform, styled for Etsy users.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>Restyled UI, design, and branding</li>
                  <li>Reorganized user process and flow</li>
                  <li>Built with
                    <strong>Angular</strong> and
                    <strong>Bootstrap</strong>
                  </li>
                  <li>
                    <a aria-label href="http://app.cidewalk.com">Original &amp;&nbsp;</a>
                    <a aria-label href="http://etsy.cidewalk.com">Redesign</a>
                  </li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Cidewalk web app" href="https://etsy.cidewalk.com" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Brownborg Studios*/}
          <div className="col s12 m6 l4">
            <div className="card medium">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="Brownborg Studios logo" src="static/img/brownborg-studios.jpg" className="activator" />
              </div>
              <div className="card-content">
                <span className="card-title activator teal-text hoverline">Website Portfolio
                  <i className="mdi-navigation-more-vert right" />
                </span>
                <p>Over a dozen powerful, easy-to-use CMS websites built for local and international clients.</p>
              </div>
              <div className="card-reveal">
                <span className="card-title brown-text">Accomplishments
                  <i className="mdi-navigation-close right" />
                </span>
                <ul>
                  <li>
                    <strong>Customized</strong> themes and plugins</li>
                  <li>Wordpress, Squarespace &amp; Tumblr</li>
                  <li>Fully
                    <strong>responsive</strong> designs</li>
                  <li>Unique admin experiences</li>
                </ul>
                <div className="card-action">
                  <a aria-label="Visit Brownborg Studios website" href="http://brownborgstudios.com/portfolio" target="_blank" data-position="top" data-tooltip="View Online" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                    <i className="fa fa-external-link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
