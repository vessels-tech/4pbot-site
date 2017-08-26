import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="w-100 bg-white pt5 bg-washed-green">
        <article className="mw7 center ph3 ph5-ns tc br2 pv5 dark-green">
          <h1 className="fw6 f3 f2-ns lh-title mt0 mb3">
            4Pbot. Coming Soon.
          </h1>
          <h2 className="fw2 f4 lh-copy mt0 mb3">
            Improving
          </h2>
          <p className="fw1 f5 mt0 mb3">
            Sign up for beta access or learn more about x.
          </p>
          <div>
            <a className="f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
              href="#">
              Sign Up
            </a>
            <a className="f6 br-pill dark-green no-underline ba grow pv2 ph3 dib"
              href="#">
              Learn More
            </a>
          </div>
        </article>
      </div>

    );
  }
}

export default Banner;
