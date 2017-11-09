import React, { Component } from 'react'
import PropTypes from 'prop-types';


class FeatureCard extends Component {

  render() {
    const { content, heading } = this.props;

    //TODO: Add some lame icons...
    return (
      <article className="dtc-ns br3 ">
        <div className="tc">
          {this.props.children}
          <h1 className="f3 mb2">{heading}</h1>
          <h2 className="f4 fw4 washed-blue mt0">{content}</h2>
        </div>
      </article>
    );
  }
}

FeatureCard.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};


export default FeatureCard;
