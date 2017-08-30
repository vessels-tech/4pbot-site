import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header>
        <nav className="dt w-100 border-box pa3 ph5-ns">
          <p className="dtc v-mid mid-gray link dim w-25" title="Home">4PBot.</p>
          <div className="dtc v-mid w-75 tr">
            {/* <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Survey">Survey</a> */}
            <a
              className="link dim dark-gray f6 f5-ns dib"
              href="mailto:lewisdaly@vesselstech.com?Subject=4PBot%20Contact"
              title="Contact"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
