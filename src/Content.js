import React, { Component } from 'react'

import SolutionCard from './SolutionCard'

const getNiceHeading = (text) => {
  return (
    <p className="tc near-black pt3 mv0 f5 db ttu tracked pb1 b">{text}</p>
  );
}

class Content extends Component {

  getSupportedBy() {

    const greyStyle = {
      filter: 'grayscale(100%)',
    };

    return (
      <div className="bg-light-red tc light-blue">
        <p className="near-black pt3 mv0 f6 db ttu tracked">Supported by:</p>
        <div className="dt dt--fixed">
          <div className="dtc tc pa4-ns pa1">
            <p style={{font:'helvetica-neue'}} className="f3 f1-m f1-ns dark-gray b">Vessels Tech</p>
          </div>
          <div className="dtc tc pa4-ns pa1 v-mid">
            <img style={greyStyle} src="/img/dfs_lab_logo_1.png"/>
          </div>
          <div className="dtc tc pa4-ns pa1 v-mid">
            <img style={greyStyle} src="/img/gates_logo.png"/>
          </div>
        </div>
      </div>
    );
  }

  getBackground() {
    return (
      <div className="bg-white w-100">
        <div className="dt mw6 center pt1 pb4">
          <div className="dtc v-top">
            {getNiceHeading("The 4ps:")}
            <div className="lh-copy mv0 f5 ph4">

              <p class="f5 lh-copy measure-narrow">
                4Ps, or Pantawid Pamilyang Pilipino Program is a CCT program run by the Department of Social Welfare and Development.
              </p>

              <p class="f5 lh-copy measure-narrow">
                It supports over 4 million households, across 79 provinces with cash grants, based on a number of conditions, such as school attendance and attending health clinics.
              </p>

              <p class="f5 lh-copy measure-narrow">
                4Ps aims to break the cycle of poverty by keeping children aged 0-18 healthy and in school, so they can have a better future.
                (<a
                 href="http://www.worldbank.org/en/country/philippines/brief/faqs-about-the-pantawid-pamilyang-pilipino-program"
                 target="blank"
                 >
                   World Bank 2017
               </a>)
              </p>
            </div>
          </div>
          {/* <div className="dtc v-top mb4">
            <img src="/img/4ps_logo.jpg" alt="Pantawid Pamilya Logo" className="mw4 db" />
          </div> */}
        </div>

        <div className="dt mw6 center pt1 pb4">
          <div className="dtc v-top">
            {getNiceHeading("Why build 4pbot?")}
            <div className="lh-copy mv0 f5 ph4">

              <p class="f5 lh-copy measure-narrow">
                Low income people often find it difficult to navigate formal financial systems and services.
                 (<a
                  href="http://www.cgap.org/news/cgap-report-analyzes-digital-finance-risks-customers"
                  target="blank"
                  >
                    CGAP 2014
                </a>)
              </p>

              <p class="f5 lh-copy measure-narrow">
                4PBot aims to empower and assist clients on the 4Ps to better understand, navigate and ____ the 4Ps
              </p>
            </div>
          </div>
        </div>

        {/* <div className="dt mw6 center pt1 pb4">
          <div className="dtc v-top">
            {getNiceHeading("How?")}
            <div className="lh-copy mv0 f5 ph4">
              <p class="f5 lh-copy measure-narrow">
                Using the latest in chatbot technology, and building up a network of 4Ps members, all connected using 4Pbot.
              </p>
            </div>
          </div>
        </div> */}


        {/* TODO: removed for now, let's keep it in incase we change our mind  */}
        {/* <div className="dt mw6 center pb5 pb5-m pb6-ns pt4">
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
            </ul>
          </div>
        </div> */}
      </div>
    );
  }

  getFocus() {
    return (
      <div className="tc bg-light-red w-100 light-blue">
        <div className="pv5 dt mw6 center pt1 pb4">
          <div className="dtc v-top">
            <p className="tc gray pt3 mv0 f5 db ttu tracked pb1 b">Our Focus</p>

            <div className="lh-copy mv0 f5 ph4">
              <SolutionCard
                heading="1"
                content="Payment Estimator">
                <i className="fa fa-question-circle-o f1 pb4" aria-hidden="true"></i>
              </SolutionCard>
              <p className="f5 lh-copy measure-narrow washed-blue">
                Payment days can be unpredictable, making managing the household budget difficult. Clients sometimes have to drop everything at the last minute to be able to collect their payout or risk missing out or waiting all day in a line. Different clients have different opinions on what a late payout is…
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getQuotes() {
    return (
      <div>
        <p>
          “The 4P is a big help in our family, I can now buy things for my children that they can use in school; we can also buy rice, but in the aspect of announcing to us, it is a little harder because sometimes we don’t know when is the payout day, it would be better that they send us an SMS because the parent leader has a lot of things to do, sometimes they cannot tell us all when it is the payout day.”
        </p>
        <p>
          - ????, 4Ps client
        </p>
      </div>
    );
  }

  getFeatures() {
    return (
      <div className="tc bg-light-red w-100 light-blue">
        <div className="pv5 dt mw6 center pt1 pb4">
          <div className="dtc v-top">
            <p className="tc gray pt3 mv0 f5 db ttu tracked pb1 b">Features</p>

            <div className="lh-copy mv0 f5 ph4">
              <SolutionCard
                heading="1"
                content="Payout Date Estimator">
                <i className="fa fa-question-circle-o f1 pb4" aria-hidden="true"></i>
              </SolutionCard>
              <p className="f5 lh-copy measure-narrow washed-blue">
                4PBot aggregates payout dates from a variety of sources, and aims to provide an accurate estimate of the next payout date.

              </p>
            </div>

            <div className="lh-copy mv0 f5 ph4">
              <SolutionCard
                heading="1"
                content="Secret Reports">
                <i className="fa fa-question-circle-o f1 pb4" aria-hidden="true"></i>
              </SolutionCard>
              <p className="f5 lh-copy measure-narrow washed-blue">
                Allows clients to make an anonymous report about an issue they are having with 4Ps. This could be anything from receiving the incorrect payout amount, or… Aggregate and anonymise these data. deliver powerful insights for govt stake holders, improve the program for all, and protect the client.
              </p>
            </div>

            <p className="tc gray pt3 mv0 f5 db ttu tracked pb1 b">Upcoming Features</p>

            <div className="lh-copy mv0 f5 ph4">
              <SolutionCard
                heading="1"
                content="Knowledge Base">
                <i className="fa fa-question-circle-o f1 pb4" aria-hidden="true"></i>
              </SolutionCard>
              <p className="f5 lh-copy measure-narrow washed-blue">
                With over 20,000 people on 4Ps Facebook groups alone, …4Pbot aims to unlock the power of this network by enabling clients to ask for advice, and give advice in a private and secure manner.

              </p>
            </div>

            <div className="lh-copy mv0 f5 ph4">
              <SolutionCard
                heading="1"
                content="4Ps Data Reports">
                <i className="fa fa-question-circle-o f1 pb4" aria-hidden="true"></i>
              </SolutionCard>
              <p className="f5 lh-copy measure-narrow washed-blue">
                There is a need to be able to evaluate programs better, outside the existing accountability structures of government
              </p>
            </div>

          </div>
        </div>
      </div>
    );
  }

  old_getSolution() {
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

  getPartnerWithUs() {
    return (
      <div className="w-100 bg-white pt5 bg-lightest-blue light-red">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5">
          <h1 className="fw6 f3 lh-title mt0 mb3">
            Partner with us.
          </h1>
          <p className="fw1 f5 mt0 mb3">
						Many companies have expressed interest in applying the 4PBot approach to their own projects and programs.<br/>Let’s work together on this!
          </p>
          <div>
            <a
              className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph3 dib mr3"
              href="http://eepurl.com/c1sEkj"
              target="blank"
            >
              Join the list
            </a>
          </div>
        </article>
      </div>
    );
  }

  getSupportUs() {
		return (
      <div className="w-100 bg-white pt5 bg-lightest-blue light-red">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5">
          <h2 className="fw6 f3 lh-title mt0 mb3">
						Support us
          </h2>
          <p className="fw1 f5 mt0 mb3">
						4PBot is in its early stages of development. We need financial support to keep on building 4Pbot, and bring it to a point of sustainability.
          </p>
          <div>
            <a
              className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph3 dib mr3"
              href="http://eepurl.com/c1sEkj"
              target="blank"
            >
							Fund 4Pbot’s future
            </a>
          </div>
        </article>
      </div>
    );
  }

	getAboutVessels() {
		return (
			<div className="w-100 bg-white pt5 bg-light-red washed-blue">
				<article className="mw7 center ph3 ph5-ns tc br2 pv5">
					<h2 className="fw6 f4 lh-title mt0 mb3">
						About Vessels Tech
					</h2>
					<p>
						Vessels Tech is a team of motivated technologists passionate about using technology to lift up the lives of others.
						We could go and work for big tech companies, but we are more interested in helping people do things like access water or
						basic financial services instead of selling people more stuff they probably don’t really need.
					</p>
					<a
						className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph3 dib mr3"
						href="https://vesselstech.com"
					>
						Check us out
					</a>
				</article>
			</div>
		);
	}

  render() {
    return (
      <div>
        {this.getSupportedBy()}
        {this.getBackground()}
        {this.getFocus()}
        {this.getQuotes()}
        {this.getFeatures()}
        {this.getPartnerWithUs()}
        {this.getSupportUs()}
				{this.getAboutVessels()}
      </div>
    );
  }
}

export default Content;
