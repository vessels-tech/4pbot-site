import React, { Component } from 'react'

import ChatWindow from './Chat/ChatWindow'

class Banner extends Component {
  render() {
    return (
      <div className="w-100 bg-white pt5 bg-lightest-blue light-red">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            4Pbot. Coming Soon.
          </h1>
          <h2 className="fw2 f4 lh-copy mt0 mb3">
            A financial inclusion chatbot for Filipinos on the Pantawid Pamilyang Program.
          </h2>
          <p className="fw1 f5 mt0 mb3">
            Sign up for email updates.
          </p>
          <div>
            <a className="f6 br-pill bg-light-red no-underline washed-blue ba b--light-red grow pv2 ph4 dib mr3"
              href="http://eepurl.com/c1sEkj" target="blank">
              Sign Up
            </a>
          </div>
        </article>
        <ChatWindow/>
      </div>

    );
  }
}

export default Banner;
