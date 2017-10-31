import React, { Component } from 'react'


class Survey extends Component {

  getHeading() {
    return (
      <div className="bg-white pt5 bg-lightest-blue light-red">
        <article className="mw7 center ph3 ph5-ns tc br2 pv1">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            Please take the 4PBot survey.
          </h1>
        </article>
      </div>
    );
  }


  getSurveyEmbed() {
    return (
      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfBcnJ5EZgxIhrbGNlWCMDDBFCT6lONjKljG5M9-0hKfeSf5Q/viewform?embedded=true"
          // onLoad={function(){this.width=screen.width;this.height=screen.height;}}
          height="700px"
          width="100%"
        >Loading...</iframe>
      </div>
    );
  }

  render() {
    return (
      <div className="w-100 vh-100">
        <div className="center ma tc">
          {this.getHeading()}
          {this.getSurveyEmbed()}
        </div>
      </div>
    );
  }
}

export default Survey;
