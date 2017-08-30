import React, { Component } from 'react'
import PropTypes from 'prop-types';


class SolutionCard extends Component {

  getImage() {
    const { imageSrc, heading } = this.props;

    if (!imageSrc) {
      return null;
    }

    return (
      <img
        src={{imageSrc}}
        className="br-100 h4 w4 dib ba pa2"
        title={{heading}}
        alt={{heading}}
      />
    )
  }

  render() {
    const { content, heading } = this.props;

    //TODO: Add some lame icons...
    return (
      <article className="dtc-ns mw5 center br3 pa3 pa4-ns mv3 ma1">
        <div className="tc">
          {this.props.children}
          {this.getImage()}
          {/* <h1 className="f3 mb2">{heading}</h1> */}
          <h2 className="f4 fw4 gray mt0">{content}</h2>
        </div>
      </article>
    );
  }
}

SolutionCard.propTypes = {
  imageSrc: PropTypes.string,
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};


export default SolutionCard;
