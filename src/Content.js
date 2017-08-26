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
        <SolutionCard/>
        <SolutionCard/>
        <SolutionCard/>
      </div>
    );
  }

  getLearnMore() {
    return (
      <div> Learn more</div>
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
