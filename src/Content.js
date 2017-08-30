import React, { Component } from 'react'

import SolutionCard from './SolutionCard'

class Content extends Component {

  getSupportedBy() {

    const greyStyle = {
      filter: 'grayscale(100%)',
    };

    return (
      <div className="bg-light-red tc light-blue">
        <p className="near-black pt4 mv0 f6 db ttu tracked">Supported by:</p>
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
        <div className="dt mw6 center pt5 pt5-m pt6-ns pb4">
          <div className="dtc v-top pl3">
            <h2>The 4Ps</h2>
            <ul className="lh-copy mv0 f5">
              <li className="pv1">
                4Ps, or Pantawid Pamilyang Pilipino Program is a CCT program run by the Department of Social Welfare and Development.
              </li>
              <li className="pv1">It supports over 4 million households, across 79 provinces with cash grants, based on a number of conditions, such as school attendance and attending health clinics.</li>
              <li className="pv1">
                4Ps aims to break the cycle of poverty by keeping children aged 0-18 healthy and in school, so they can have a better future.
                (<a
                 href="http://www.worldbank.org/en/country/philippines/brief/faqs-about-the-pantawid-pamilyang-pilipino-program"
                 target="blank"
                 >
                   World Bank 2017
               </a>)
              </li>
            </ul>
          </div>
          <div className="dtc v-top mb4">
            <img src="/img/4ps_logo.jpg" alt="Pantawid Pamilya Logo" className="mw4 db" />
          </div>
        </div>
        <div className="dt mw6 center pb5 pb5-m pb6-ns pt4">
          <div className="dtc v-top pl3">
            <h2>The Challenge</h2>
            <ul className="lh-copy mv0 f5">
              <li className="pv1">
                Low income people often find it difficult to navigate formal financial systems and services.
                 (<a
                  href="http://www.cgap.org/news/cgap-report-analyzes-digital-finance-risks-customers"
                  target="blank"
                  >
                    CGAP 2014
                </a>)
              </li>
              <li className="pv1">Many 4Ps clients miss out on payments because they don't attend important family development sessions, or fufill other criteria.</li>
              <li className="pv1">When a client believes they have been underpaid or assessed incorrectly, it can often take months to resolve.</li>
              {/* <li>4Ps clients are/ taking payday loans and ...</li> */}
              {/* <li>Getting cash to this many people across so many provinces is really hard!</li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  getSolution() {
    return (
      <div className="tc bg-light-red light-blue pv5">
        <h2 className="gray w6 f4 f3-ns lh-title mt0 mb3">Our Ideas</h2>
        <p className="lh-copy w-50-ns w-75-m center f3 f2-ns b ml0 ph1">We're actively researching the 4Ps program, looking for places
          to leverage technology to improve the 4Ps program for its clients.</p>
        <p className="gray lh-copy w-50-ns center pt2 f4 f3-ns i ml0">Here's what we've got so far:</p>
        <div className="dt-ns dt--fixed-ns gray">
          <SolutionCard
            heading="1"
            content="A connected knowledge base where clients can easily ask questions and receive answers.">
            <i className="fa fa-question-circle-o f1 pb4" aria-hidden="true"></i>
          </SolutionCard>
          <SolutionCard
            heading="2"
            content="An automated reminders tool to inform families of important family development sessions, health clinic visits and 4Ps news.">
            <i className="fa fa-calendar f1 pb4" aria-hidden="true"></i>
          </SolutionCard>
          <SolutionCard
            heading="3"
            content="Use AI and chatbots to make filing a grievance and resoling the issue simpler and faster.">
            <i className="fa fa-comments f1 pb4" aria-hidden="true"></i>
          </SolutionCard>
        </div>
        <article className="mw7 center ph3 ph5-ns tc br2 pv5">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            Got an idea?
          </h1>
          <p className="fw1 f5 mt0 mb3">
            We'd love to hear it.
          </p>
          <div>
            <a
              className="f6 br-pill bg-light-blue no-underline washed-red ba b--light-blue grow pv2 ph3 dib mr3"
              href="mailto:lewisdaly@vesselstech.com?Subject=4PBot%Ideas"
              >
              Email Us
            </a>
          </div>
        </article>
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
            Sign up for email updates, or get in touch with us.
          </p>
          <div>
            <a
              className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph3 dib mr3"
              href="http://eepurl.com/c1sEkj"
              target="blank"
            >
              Sign Up
            </a>
            <a
              className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph3 dib mr3"
              href="mailto:lewisdaly@vesselstech.com?Subject=4PBot%20Contact"
            >
              Get In Touch
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
