import React, { Component } from 'react'

import SolutionCard from './SolutionCard'

class Content extends Component {

  getSupportedBy() {
    return (
      <div className="dt dt--fixed">
        <div className="dtc tc pv4">
          Vessels
        </div>
        <div className="dtc tc pv4">
          DFS Lab
        </div>
        <div className="dtc tc pv4">
          B&M Gates
        </div>
      </div>
    );
  }

  getChallenge() {
    return (
      <div className="dt mw6 center pv4 pv5-m pv6-ns">
        <div className="dtc v-top pl3">
          <h2>The Challenge</h2>
          <p className="lh-copy mv0">
            This text is aligned to the top, no matter what the height of the
            image is.
          </p>
        </div>
        <div className="dtc v-top">
          <img src="http://tachyons.io/img/super-wide.jpg" alt="A bright blue sky" className="mw5 db" />
        </div>
      </div>
    );
  }

  getSolution() {
    return (
      <div className="dt-ns dt--fixed-ns">
        <SolutionCard heading="123" content="This is point 1"/>
        <SolutionCard heading="pt 2" content="This is point 2"/>
        <SolutionCard heading="pt 3" content="This is point 3"/>
      </div>
    );
  }

  getLearnMore() {
    return (
      <div className="w-100 bg-white pt5 bg-washed-green">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5 dark-green">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            Learn more about 4PBot.
          </h1>
          <p className="fw1 f5 mt0 mb3">
            Sign up for early access.
          </p>
          <div>
            <a className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
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
