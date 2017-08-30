import React, { Component } from 'react'

import SolutionCard from './SolutionCard'

class Content extends Component {

  getSupportedBy() {

    const greyStyle = {
      filter: 'grayscale(100%)',
    };

    return (
      <div className="bg-light-red tc light-blue">
        <p className="near-black pt4 mv0">Supported by:</p>
        <div className="dt dt--fixed">
          <div className="dtc tc pv4">
            <img style={greyStyle} src="/img/vessels_rough.png"/>
          </div>
          <div className="dtc tc pv4">
            <img style={greyStyle} src="/img/dfs_lab_logo_rough.png"/>
          </div>
          <div className="dtc tc pv4">
            <img style={greyStyle} src="/img/gates_logo.png"/>
          </div>
        </div>
      </div>
    );
  }

  getChallenge() {
    return (
      <div className="bg-white w-100">
        <div className="dt mw6 center pv5 pv5-m pv6-ns">
          <div className="dtc v-top pl3">
            <h2>The Challenge</h2>
            <p className="lh-copy mv0">
              This text is aligned to the top, no matter what the height of the
              image is.
            </p>
          </div>
          <div className="dtc v-top mb4">
            <img src="/img/4ps_logo.jpg" alt="Pantawid Pamilya Logo" className="mw4 db" />
          </div>
        </div>
      </div>
    );
  }

  getSolution() {
    return (
      <div className="dt-ns dt--fixed-ns bg-light-red light-blue pv5">
        <SolutionCard heading="123" content="This is point 1"/>
        <SolutionCard heading="pt 2" content="This is point 2"/>
        <SolutionCard heading="pt 3" content="This is point 3"/>
      </div>
    );
  }

  getLearnMore() {
    return (
      <div className="w-100 bg-white pt5 bg-lightest-blue light-red">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            Learn more about 4PBot.
          </h1>
          <p className="fw1 f5 mt0 mb3">
            Sign up for early access.
          </p>
          <div>
            <a className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph3 dib mr3"
              href="#">
              Sign Up
            </a>
          </div>
        </article>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getSupportedBy()}
        {this.getChallenge()}
        {this.getSolution()}
        {this.getLearnMore()}
      </div>
    );
  }
}

export default Content;
