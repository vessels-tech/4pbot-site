import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="w-100 bg-white pt5 bg-lightest-blue light-red">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            4Pbot. Coming Soon.
          </h1>
          <h2 className="fw2 f4 lh-copy mt0 mb3">
            A financial inclusion bot for Filipinos.
          </h2>
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
}

export default Banner;
