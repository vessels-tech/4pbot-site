import React, { Component } from 'react'

import SolutionCard from './SolutionCard'
import FeatureCard from './FeatureCard'
import ChatWindow from './Chat/ChatWindow'
import ChatRowType from './Chat/ChatRowType'
import QuoteSection from './QuoteSection'

const getNiceHeading = (text) => {
  return (
    <p className="tc near-black pt3 mv0 f5 db ttu tracked pb1 b">{text}</p>
  );
}

class Content extends Component {


  getWhyChatBotItem(icon, title, text) {
    return (
      <div className="center w-100 dtc-ns tc pv4">
        <article className="fl bg-white br3 pa3 pa4-ns mv3 ba b--black-10 mh2-ns">
          <div className="tc">
            <i className="material-icons">{icon}</i>
            <h1 className="f4">{title}</h1>
            <hr className="mw3 bb bw1 b--black-10"/>
          </div>
          <p className="lh-copy measure center f6 black-70">
            {text}
          </p>
        </article>
      </div>
    );
  }

  getWhyChatbotGrid() {
    return (
      <div className="dt-ns dt--fixed-ns">
        {this.getWhyChatBotItem('face', 'Conversational', "Talking to 4Pbot is just like talking to a real person!")}
        {this.getWhyChatBotItem('query_builder', 'Anytime, Anyplace', '4Pbot is always awake, and always willing to help!')}
        {this.getWhyChatBotItem('language', 'Multilingual', "4PBot can speak Tagalog, Cebuano/Bisaya, and English. ")}
      </div>
    );
  }


	getWhyChatbot() {

		return (
			<div className="bg-white w-100">
				<div className="dt pt3 pb4">
					{getNiceHeading("A Chatbot?")}
					<div className="lh-copy mv0 f5 ph4">
						<p className="center f5 lh-copy measure-narrow">
              4PBot talks with clients of the 4Ps program over Facebook Messenger, and is available for free on Facebook Free Basics.
            </p>
              {this.getWhyChatbotGrid()}
          </div>
				</div>
			</div>
		);
	}

  getSupportedBy() {

    const greyStyle = {
      filter: 'grayscale(100%)',
    };

    return (
      <div className="bg-white tc light-blue">
        {getNiceHeading("Supported By")}
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
        <div className="dt mw6 center pt4 pb4">
          <div className="dtc v-top">
            {getNiceHeading("The 4ps:")}
            <div className="lh-copy mv0 f5 ph4">

              <p className="f5 lh-copy measure-narrow">
                4Ps, or Pantawid Pamilyang Pilipino Program is a CCT program run by the Department of Social Welfare and Development.
              </p>

              <p className="f5 lh-copy measure-narrow">
                It supports over 4 million households, across 79 provinces with cash grants, based on a number of conditions, such as school attendance and attending health clinics.
              </p>

              <p className="f5 lh-copy measure-narrow">
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

              <p className="f5 lh-copy measure-narrow">
                Low income people often find it difficult to navigate formal financial systems and services.
                 (<a
                  href="http://www.cgap.org/news/cgap-report-analyzes-digital-finance-risks-customers"
                  target="blank"
                  >
                    CGAP 2014
                </a>)
              </p>

              <p className="f5 lh-copy measure-narrow">
                4PBot aims to empower and assist clients on the 4Ps to better understand, navigate and ____ the 4Ps
              </p>
            </div>
          </div>
        </div>

        {/* <div className="dt mw6 center pt1 pb4">
          <div className="dtc v-top">
            {getNiceHeading("How?")}
            <div className="lh-copy mv0 f5 ph4">
              <p className="f5 lh-copy measure-narrow">
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

  getQuotes() {
    return (
      <QuoteSection
        className="bg-lightest-blue black"
        author="Maria, 4Ps client"
        quote="“The 4P is a big help in our family... but in the aspect of announcing to us, it is a little hard because sometimes we don’t know when the payout day is, it would be better that they send us an SMS...”"
      />
    );
  }

  getFeatures() {
    const estimate = [
      {type: ChatRowType.SENT, content:'Kailan aking payout?'},
      {type: ChatRowType.RECEIVED, content:'Opo, Makakatulong ako niyan'},
      {type: ChatRowType.RECEIVED, content:'Ako ang iyong zip code?'},
      {type: ChatRowType.SENT, content:'4000'}
    ];

    const report = [
      {type: ChatRowType.SENT, content:'Gustong i-report ang problema.'},
      {type: ChatRowType.RECEIVED, content: 'Opo, Makakatulong ako niyan.' },
      {type: ChatRowType.RECEIVED, content: 'Anong po ang iyong problema? (1) hindi nakakatanggap ng tamang halaga (2) mas mababa sa 3 sa aking mga anak ang na-enrol (3) iba pa'},
      {type: ChatRowType.SENT, content:'1 po'}
    ];

    const news = [
      {type: ChatRowType.SENT, content:'Mga bagong balita sa 4Ps?'},
      {type: ChatRowType.RECEIVED, content: 'Ito ang 3 mga bagong istorya sa 4Ps.' },
      {type: ChatRowType.RECEIVED, content: 'Dating nakatira sa kalye, nabigyan ng trabaho sa tulong ng libreng training. Si Merry Rose, 29, mula sa Sampalok, Maynila miyembro ng 4P, ay nagtapos na unang batch sa Tile Setting sa TESDA, ngayon ay 7 buwang nagtatrabaho sa isang Construction Firm bilang Tile Setter.'},
    ]

    return (
      <div id='features' className="tc bg-light-red w-100 light-blue">
        <div className="pv3 dt center">
          <div className="dtc v-top">
            <p className="tc gray mv0 pt3 f5 db ttu tracked pb1 b">Features</p>

            <div className="lh-copy mv0 f5 ph4">
              <FeatureCard
                heading='Payday Estimates'
                content='We crowdsource paydays across the Philippines to give accurate estimates of when the next payday will occour.'
                >
                <ChatWindow rows={estimate}/>
              </FeatureCard>
            </div>

            <div className="lh-copy mv0 f5 ph4">
              <FeatureCard
                heading='Secret Reports'
                content='Clients can make complaints and report issues they are having with 4Ps. We try to help find a solution, while keeping their information secure and private.'
                >
                <ChatWindow rows={report}/>
              </FeatureCard>
            </div>

            <div className="lh-copy mv0 f5 ph4">
              <FeatureCard
                heading='4Ps News'
                content="4PBot knows what's going on in the community, with the latest news stories about 4Ps."
                >
                <ChatWindow rows={news}/>
              </FeatureCard>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getPartnerWithUs() {
    return (
      <div id='partner' className="w-100 bg-white bg-lightest-blue light-red">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5">
          <h1 className="fw6 f3 lh-title mt0 mb3">
            Partner with us.
          </h1>
          <p className="fw1 f5 mt0 mb3">
						Many companies have expressed interest in applying the 4PBot approach to their own projects and programs.<br/><br/>Let’s work together on this!
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
			<div className="w-100 bg-white bg-light-red washed-blue">
				<article className="mw7 center ph2 ph5-ns br2 pv5 tc">
					<h2 className="fw6 f4 lh-title mt0 mb3">
						About Vessels Tech
					</h2>
          <p className="f5 measure-narrow pb2">
            Vessels Tech is a team of motivated technologists passionate about using technology
            to lift up the lives of others.
					</p>
					<a
						className="f6 br-pill bg-light-blue no-underline washed-blue ba b--light-red grow pv2 ph3 dib mr3"
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
				{this.getWhyChatbot()}
        {this.getFeatures()}
        {this.getQuotes()}
				{this.getBackground()}
        {this.getPartnerWithUs()}
				{this.getSupportedBy()}
				{this.getAboutVessels()}
      </div>
    );
  }
}

export default Content;
