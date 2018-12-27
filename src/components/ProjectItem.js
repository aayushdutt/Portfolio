import React, { Component } from "react";

export default class ProjectItem extends Component {
  render() {
    const { ProjectContent } = this.props;

    const Accomplishments = ProjectContent.accomplishments.map(
      accomplishment => {
        return <li key={accomplishment}>{accomplishment}</li>;
      }
    );

    return (
      <div className="col s12 m6 l4">
        <div className="card medium">
          <div className="card-image waves-effect waves-block waves-light">
            {ProjectContent.image ? (
              <img
                alt="Screenshot of BlogSpire web app"
                src={"static/img/projects/" + ProjectContent.image}
                className="activator"
              />
            ) : (
              <img
                alt="Screenshot of BlogSpire web app"
                src="static/img/projects/fallback.jpg"
                className="activator"
              />
            )}
          </div>
          <div className="card-content">
            <span className="card-title activator teal-text hoverline">
              {ProjectContent.name}
              <i className="mdi-navigation-more-vert right" />
            </span>
            <p>{ProjectContent.about}</p>
          </div>
          <div className="card-reveal">
            <span className="card-title brown-text">
              Accomplishments
              <i className="mdi-navigation-close right" />
            </span>
            <ul>{Accomplishments}</ul>
            <div className="card-action">
              {ProjectContent.liveLink ? (
                <a
                  aria-label={ProjectContent.name}
                  href={ProjectContent.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-position="top"
                  data-tooltip="View Online"
                  className="btn-floating btn-large waves-effect waves-light brown tooltipped"
                >
                  <i className="fa fa-external-link" />
                </a>
              ) : null}

              <a
                aria-label={`Visit the GitHub repo for ${ProjectContent.name}`}
                href={ProjectContent.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                data-position="top"
                data-tooltip="View Source"
                className="btn-floating btn-large waves-effect waves-light brown tooltipped"
              >
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
