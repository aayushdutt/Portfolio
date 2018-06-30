import React, { Component } from 'react'

export default class EverythingElse extends Component {
  render() {
    return (
      <main>
        <section id="intro" className="section scrollspy full-height">
          <div className="overlay" />
          <div className="container">
            <h2>I want to
              <span className="teal">make things</span>
              <br />that
              <span className="underline">make a difference</span>.</h2>
          </div>
        </section>
        <section id="about" className="section scrollspy">
          <h3 className="page-title white-text teal">About</h3>
          <div className="container flow-text">
            <blockquote>
              <h2>Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and teaching.</h2>
            </blockquote>
            <p>I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has
              taken many twists and turns — from touring and recording artist, to employee of the year at a non-profit, to dean's
              scholar at UPenn, to small business owner and entrepreneur — I've never stopped engaging my passion to help others
              and solve problems.</p>
            <p>As a web developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my
              mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at a high
              growth company.</p>
            <p>
              <strong>Current Focus</strong>:&nbsp;
              <a aria-label="Navigate to the Inclusive Design Patterns homepage" href="https://www.smashingmagazine.com/inclusive-design-patterns/">Accessibility</a>&nbsp;//&nbsp;
              <a aria-label="Navigate to the Full Stack React homepage" href="https://www.fullstackreact.com/">React</a>&nbsp;//&nbsp;
              <a aria-label="Navigate to the article &quot;Scalable CSS&quot;" href="https://mrmrs.github.io/writing/2016/03/24/scalable-css/">Design Systems</a>
            </p>
          </div>
        </section>
        <section id="experience" className="section scrollspy">
          <h3 className="page-title white-text teal">Experience</h3>
          <div className="container">
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
                        <a href="http://wespire.com" target="_blank" className="teal-text hoverline">Wespire</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Full-Stack Software Developer</div>
                <p>
                  <em className="grey-text">SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns</em>
                </p>
                <h6>Develop Product</h6>
                <ul>
                  <li>Contribute core features across entire stack (20k+ lines of code, 250+ pulls)</li>
                  <li>Lead front-end development, creating and documenting app-wide design system</li>
                  <li>Oversee transition from page-based styles to modular component styles</li>
                  <li>Guide best practices around accessible, semantic UI/UX</li>
                  <li>Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml</li>
                </ul>
                <h6>Accomplishments</h6>
                <ul>
                  <li>Dramatically increased speed of UI development using atomic, scalable CSS</li>
                  <li>Built tool to convert HRIS data into user accounts to simplify onboarding</li>
                  <li>Implemented inline @tagging feature to increase app share-ability</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Jan 2016 - Present | Boston, MA</span>
              </div>
            </div>
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
                        <a href="http://wespire.com" target="_blank" className="teal-text hoverline">Wespire</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">QA Developer</div>
                <p>
                  <em className="grey-text">SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns</em>
                </p>
                <ul>
                  <li>Improved accuracy, coverage, and speed of automated tests</li>
                  <li>Created an automated ‘smoke test’ using Ruby and the CrossBrowserTesting API</li>
                  <li>Streamlined CLI and deployment, saving 10/hrs week and increasing releases 5x</li>
                </ul>
              </div>
              <div className="card-action">
                <span>May 2015 - Dec 2015 | Boston, MA</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="https://www.startupinstitute.com/" target="_blank">
                      <img alt="Startup Institute logo" src="static/img/si-logo.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="https://www.startupinstitute.com/intro-courses/web-design/" target="_blank" className="teal-text hoverline">Intro Course</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Instructor &amp; Curriculum Designer</div>
                <p>
                  <em className="grey-text">8-week course for students enrolled in the Fundamentals Classes Intro to Web Design</em>
                </p>
                <ul>
                  <li>Teaching the basics of HTML, CSS, and the principles of responsive design.</li>
                  <li>Currently redesigning and building a new, improved Web Design curriculum to be implemented across all SI channels
                    in 2018</li>
                </ul>
                <h6>Accomplishments</h6>
                <ul>
                  <li>Increased the average student retention rate from less than 40% to more than 95%</li>
                  <li>Doubled the average amount of students that move from Funamdentals Classes to the Full-Time program</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Jan 2016 - Present | Boston, MA</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="https://www.startupinstitute.com/" target="_blank">
                      <img alt="Startup Institute logo" src="static/img/si-logo.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="https://www.eventbrite.com/e/boston-community-class-building-a-webpage-with-bootstrap-tickets-29157196961" target="_blank" className="teal-text hoverline">Community Class</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Instructor</div>
                <p>
                  <em className="grey-text">One-off community class open to the public and sponsored by Resilient Coders</em>
                </p>
                <ul>
                  <li>Taught an introductory seminar covering HTML, CSS, and primarily Bootstrap, with a one-page website deliverable</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Nov 2016 | Boston, MA</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="http://startupinstitute.com" target="_blank">
                      <img alt="Startup Institute logo" src="static/img/si-logo.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="https://www.startupinstitute.com/courses/" target="_blank" className="teal-text hoverline">Full-Time Program</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Instructor</div>
                <p>
                  <em className="grey-text">2-day intensive and interactive courses and lab work with students in the Full Time program.</em>
                </p>
                <h6>Web Design topics</h6>
                <ul>
                  <li>Intro to HTML/CSS</li>
                  <li>Fonts, Images,</li>
                  <li>Responsive Design</li>
                  <li>CSS Frameworks</li>
                </ul>
                <h6>Web Development topics</h6>
                <ul>
                  <li>Intro to MVC Rails App</li>
                  <li>Rails Associations</li>
                  <li>Basic Layout and CSS Best Practices</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Jun 2015 - Present | Boston, MA</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="http://startupinstitute.com" target="_blank">
                      <img alt="Startup Institute logo" src="static/img/si-logo.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="http://startupinstitute.com" target="_blank" className="teal-text hoverline">Startup Institute</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Web Dev Student</div>
                <p>
                  <em className="grey-text">Competitive , 8-week immersive program that helps individuals to develop the skills, mindset, and network to
                    be high-impact at a high-growth company.</em>
                </p>
                <ul>
                  <li>Technology - Ruby on Rails, Git, AWS, Heroku, Node.js</li>
                  <li>Practices - Agile development tactics, test-driven development, mobile-first methodology</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Feb 2014 - Apr 2014 | Boston, MA</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="http://brownborgstudios.com" target="_blank">
                      <img alt="Brownborg Studios logo" src="static/img/brownborg-logo.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="http://brownborgstudios.com" target="_blank" className="teal-text hoverline">Brownborg Studios</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Founder &amp; Developer</div>
                <p>
                  <em className="grey-text">Small web development and design studio for businesses, non-profits, and individuals</em>
                </p>
                <ul>
                  <li>Creating easy-to-use CMS websites for clients for local and international clients</li>
                  <li>Managing all accounting, communication, and project management</li>
                  <li>Generated over $40k in revenue within first year of business, without marketing or promotion</li>
                </ul>
              </div>
              <div className="card-action">
                <span>July 2010 - Present | Providence, RI</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="http://equalaccessri.org" target="_blank">
                      <img alt="Equal Access RI logo" src="static/img/equal-access-ri.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="http://equalaccessri.org" target="_blank" className="teal-text hoverline">Equal Access RI</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Creative Strategist</div>
                <p>
                  <em className="grey-text">Accessibility consultancy and advocacy project founded by individual with Cerebral Palsy</em>
                </p>
                <ul>
                  <li>Mentored the founder and led a small team in business and creative strategies</li>
                  <li>Designed visual branding, wrote copy, and developed website</li>
                  <li>Garnered a front-page Providence Journal article within first 9 months</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Mar 2014 - Feb 2015 | Pawtucket, RI</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="https://www.centerforautismresearch.org/" target="_blank">
                      <img alt="Equal Access RI logo" src="static/img/chop.jpg" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="https://www.centerforautismresearch.org/" target="_blank" className="teal-text hoverline">Center for Autism Research</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Research Assistant</div>
                <p>
                  <em className="grey-text">Joint center of The Children’s Hospital of Philadelphia and the University of Pennsylvania</em>
                </p>
                <ul>
                  <li>Observed clinical evaluations of children with ASD provided support to clinicians</li>
                  <li>Developed new data entry forms for research intake</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Sep 2011 - Apr 2013 | Philadelphia, PA</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="http://rhdri.org" target="_blank">
                      <img alt="RHD-RI logo" src="static/img/rhdri-logo.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="http://rhdri.org" target="_blank" className="teal-text hoverline">RHD-RI</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Direct Support Professional</div>
                <p>
                  <em className="grey-text">Non-profit, arts-based day program for adults with disabilities
                  </em>
                </p>
                <ul>
                  <li>Supported over forty clients daily in a fast-paced, team environment</li>
                  <li>Created new method for organizing staff information and clients’ goals, still in use today</li>
                  <li>Awarded Employee of the Year out of 30+ employees after only one year of service</li>
                  <li>Awarded Most Valuable Staff at Winter Art Show for highest sales and unique client product</li>
                </ul>
              </div>
              <div className="card-action">
                <span>Feb 2010 - Sept 2011 | Pawtucket, RI</span>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <div className="row">
                  <div className="col s12 m2">
                    <a href="https://www.google.com/search?q=Monty+Are+I" target="_blank">
                      <img alt="Monty Are I logo" src="static/img/monty-are-i-logo.png" className="responsive-img center-block" />
                    </a>
                  </div>
                  <div className="col s12 m10">
                    <p>
                      <span className="card-title">
                        <a href="https://www.google.com/search?q=Monty+Are+I" target="_blank" className="teal-text hoverline">Monty Are I</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="role brown-text">Co-Founder &amp; Touring / Recording Artist</div>
                <p>
                  <em className="grey-text">Five piece “action rock” band from Cranston, RI</em>
                </p>
                <ul>
                  <li>Built a successful and sustainable small-business with four other founders</li>
                  <li>Wrote, produced, and recorded five albums both independently and under Island/DefJam</li>
                  <li>Completed 7 full US tours, including one headlining tour</li>
                  <li>Created, recruited and managed 2000 member promotional street team</li>
                </ul>
              </div>
              <div className="card-action">
                <span>2004 - 2010 | USA</span>
              </div>
            </div>
          </div>
        </section>
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
        <section id="skills" className="section scrollspy">
          <h3 className="page-title white-text teal">Skills</h3>
          <div className="container">
            <div className="card">
              <div className="card-content">
                <h4 className="brown-text light">HTML</h4>
                <div className="row text-center">
                  <div className="col s4 m2">
                    <img alt src="static/img/html5.png" className="responsive-img" />HTML5</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/react.png" className="responsive-img" />JSX</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/haml.png" className="responsive-img" />Haml</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/jade.png" className="responsive-img" />Jade</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/jekyll.png" className="responsive-img" />Jekyll</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4 className="brown-text light">CSS</h4>
                <div className="row text-center">
                  <div className="col s4 m2">
                    <img alt src="static/img/css3.png" className="responsive-img" />CSS3</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/sass.png" className="responsive-img" />SASS</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/bootstrap.png" className="responsive-img" />Bootstrap</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/foundation.png" className="responsive-img" />Foundation</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/materialize.png" className="responsive-img" />Materialize</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4 className="brown-text light">Javascript</h4>
                <div className="row text-center">
                  <div className="col s4 m2">
                    <img alt src="static/img/react.png" className="responsive-img" />React</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/javascript.png" className="responsive-img" />Javascript</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/jquery.png" className="responsive-img" />jQuery</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/angular.png" className="responsive-img" />Angular</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/nodejs.png" className="responsive-img" />Node</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/ionic.png" className="responsive-img" />Ionic</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4 className="brown-text light">Back-End</h4>
                <div className="row text-center">
                  <div className="col s4 m2">
                    <img alt src="static/img/ruby.png" className="responsive-img" />Ruby</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/rails.png" className="responsive-img" />Rails</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/minitest.png" className="responsive-img" />Minitest</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/postgresql.png" className="responsive-img" />PostgreSQL</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/mongodb.png" className="responsive-img" />MongoDB</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4 className="brown-text light">Build Tools</h4>
                <div className="row text-center">
                  <div className="col s4 m2">
                    <img alt src="static/img/webpack.png" className="responsive-img" />Webpack</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/gulp.png" className="responsive-img" />Gulp</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/grunt.png" className="responsive-img" />Grunt</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/bower.png" className="responsive-img" />Bower</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4 className="brown-text light">CMS</h4>
                <div className="row text-center">
                  <div className="col s4 m2">
                    <img alt src="static/img/wordpress.png" className="responsive-img" />Wordpress</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/tumblr.png" className="responsive-img" />Tumblr</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/squarespace.png" className="responsive-img" />Squarespace</div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-content">
                <h4 className="brown-text light">Other</h4>
                <div className="row text-center">
                  <div className="col s4 m2">
                    <img alt src="static/img/github.png" className="responsive-img" />Github</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/heroku.png" className="responsive-img" />Heroku</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/photoshop.png" className="responsive-img" />Photoshop</div>
                  <div className="col s4 m2">
                    <img alt src="static/img/fcpx.png" className="responsive-img" />Final Cut Pro</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="awards" className="section scrollspy">
          <h3 className="page-title white-text teal">Awards</h3>
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="http://startupinstitute.com" target="_blank" className="teal-text hoverline">Student Choice Award</a>
                      </span>
                    </p>
                    <p className="brown-text">Startup Institute - Full Time Web Development | April 2017</p>
                    <ul>
                      <li>Awarded by students in the Full-Time Web Development track to one instructor as recognition for "outstanding
                        teaching, listening, mentoring."</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="https://wespire.com" target="_blank" className="teal-text hoverline">Inspired By You Award</a>
                      </span>
                    </p>
                    <p className="brown-text">WeSpire | June 2016</p>
                    <ul>
                      <li>Quarterly award given to a team member who exemplifies WeSpire's purpose, vision, and values, goes above
                        and beyond in their role to make a particularly positive impact on the company.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="http://startupinstitute.com" target="_blank" className="teal-text hoverline">Owl Award</a>
                      </span>
                    </p>
                    <p className="brown-text">Startup Institute | April 2016</p>
                    <ul>
                      <li>Given to an alumnus who "continually gives back to the Startup Institute community with true humility,
                        despite everyone knowing how awesome he is."</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="http://www.rhdri.org" className="teal-text hoverline">Honorable Mention</a>
                      </span>
                    </p>
                    <p className="brown-text">West Philly Homebrew Competition | May 2013</p>
                    <ul>
                      <li>Neightborhood beer enthusiasts voted on their favorite local home-brewed beer. “Goldilocks" won in the
                        "People's Choice" category.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="https://www.sas.upenn.edu/news/congratulations-our-dean%E2%80%99s-scholars" target="_blank" className="teal-text hoverline">Dean's Scholar</a>
                      </span>
                    </p>
                    <p className="brown-text">University of Pennsylvania | April 2013</p>
                    <ul>
                      <li>One of only 20 students in the School of Arts &amp; Sciences nominated by faculty for "outstanding academic
                        achievement and intellectual promise."</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="http://www.rhdri.org" className="teal-text hoverline">Employee of the Year</a>
                      </span>
                    </p>
                    <p className="brown-text">RHD-RI | Aug 2011</p>
                    <ul>
                      <li>Nominated by management and coworkers for exceptional work ethic and dedication to clients.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-content">
                    <p>
                      <span className="card-title">
                        <a href="http://upenn.edu" className="teal-text hoverline">Most Valuable Staff</a>
                      </span>
                    </p>
                    <p className="brown-text">RHD-RI | Dec 2010</p>
                    <ul>
                      <li>Awarded to the staff that went above in beyond in preparation, effort, and sales at the Winter Art show.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
    </main>
    )
  }
}
