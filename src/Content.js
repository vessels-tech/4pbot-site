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
          <div className="dtc tc pa4-ns pa2">
            <p style={{font:'helvetica-neue'}} className="f3 f1-m f1-ns dark-gray b">Vessels Tech</p>
          </div>
          <div className="dtc tc pa4-ns pa2 v-mid">
            <img style={greyStyle} src="/img/dfs_lab_logo_1.png"/>
          </div>
          <div className="dtc tc pa4-ns pa2 v-mid">
            <img style={greyStyle} src="/img/gates_logo.png"/>
          </div>
        </div>
      </div>
    );
  }

  getChallenge() {
    return (
      <div className="bg-white w-100">
        <div className="dt mw6 center pt5 pv5-m pv6-ns">
          <div className="dtc v-top pl3">
            <h2>The 4Ps</h2>
            <ul className="lh-copy mv0 f5">
              <li>4Ps (Pantawid Pamilyang Pilipino Program) or Bridging Program for the Filipino Family is a CCT program by the ___</li>
              <li>It supports over 4 million clients, across __ provinces</li>
            </ul>
          </div>
          <div className="dtc v-top mb4">
            <img src="/img/4ps_logo.jpg" alt="Pantawid Pamilya Logo" className="mw4 db" />
          </div>
        </div>
        <div className="dt mw6 center pb5 pv5-m pv6-ns">
          <div className="dtc v-top pl3">
            <h2>The Challenge</h2>
            <ul className="lh-copy mv0 f5">
              <li>Low income people often find it difficult to navigate Government systems (ref:)</li>
              <li>Many (how many?) 4Ps clients miss out on payments because they don't attend important sessions, or fufill other criteria</li>
              <li>When something goes wrong with payments, it can sometimes take months to resolve these issues</li>
              <li>4Ps clients are taking payday loans and ...</li>
              <li>Getting cach to this many people across so many provinces is really hard!</li>
            </ul>
          </div>
          <div className="dtc v-top mb4">
            {/* <img src="/img/4ps_logo.jpg" alt="Pantawid Pamilya Logo" className="mw4 db" /> */}
          </div>
        </div>
      </div>
    );
  }

  getSolution() {
    return (
      <div className="tc bg-light-red light-blue pv5">
        <h2 className="gray w6 f4 f3-ns lh-title mt0 mb3">Our Ideas</h2>
        <p className="lh-copy w-50-ns center f3 f2-ns b ml0">We're actively researching the 4Ps program, looking for places
          to leverage technology to improve the 4Ps program for its clients.</p>
        <p className="gray lh-copy w-50-ns center pt2 f4 f3-ns i ml0">Here's what we've got so far:</p>
        <div className="dt-ns dt--fixed-ns">
          <SolutionCard heading="1" content="A connected knowledge base where clients can easily ask questions and receive answers"/>
          <SolutionCard heading="2" content="A tool for automatically reminding households of important family development sessions, health clinic visits ... so that nobody misses out on payments."/>
          <SolutionCard heading="3" content="Use AI and chatbots to make filing a grievance and resoling the issue simpler and faster."/>
        </div>
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
