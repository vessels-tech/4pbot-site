import React, { Component } from 'react'

import ChatWindow from './Chat/ChatWindow'

class Banner extends Component {
  render() {
    return (
      <div className="w-100 bg-white bg-lightest-blue light-red">


        <article className="dt center mw7 ph5-ns br2 pt5 ph3 cf tc" style={{'margin-bottom':'-4px'}}>
            <div className="dtc fl w-100 w-50-ns v-mid pr5-ns pb4 pb0-ns">
              <h1 className="fw6 f2 f1-ns lh-title mt0 mb3 mt5-ns">
                4PBot
              </h1>
              <h2 className="fw2 f4 lh-copy mt0 mb3">
                A virtual assistant for Filipinos on social welfare.
              </h2>

              <a className="f6 br-pill bg-light-red no-underline lightest-blue ba b--light-red grow pv2 ph4 dib mr3"
                 href="#features">
                Learn More
              </a>

            </div>
            <div className="dtc fl w-100 w-50-ns v-mid">
              <img className="" src="/img/phone_top.png"/>
            </div>



          {/* <p className="fw1 f5 mt0 mb3">
            Sign up for email updates.
          </p> */}
          {/* <div>
            <a className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph4 dib mr3"
              href="http://eepurl.com/c1sEkj" target="blank">
              Sign Up
            </a>
          </div> */}
        </article>
        {/* <ChatWindow/> */}
      </div>
    );
  }
}

export default Banner;
