import React, { Component } from 'react'
import PropTypes from 'prop-types';


class FeatureCard extends Component {

	constructor(props) {
	  super(props);
	  this.state = {height: props.height};
 	}


	updateDimensions(_window) {
		if (!_window || !_window.innerWidth) {
			return;
		}

		this.setState({width: _window.innerWidth});
  }

  componentWillMount() {
    this.updateDimensions(window);
  }

	componentDidMount() {
    window.addEventListener("resize", (event) => this.updateDimensions(event.target));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", (event) => this.updateDimensions(event.target));
  }

  getChildren() {
    return (
      <div className="fl w-100 w-50-ns tc">
        {this.props.children}
      </div>
    );
  }

  getText() {
    const { content, heading } = this.props;

    return (
      <div className="fl pt5-ns mt5-ns w-100 w-50-ns tc">
        <h1 className="f3 mb2">{heading}</h1>
        <h2 className="f4 fw4 washed-blue mt0">{content}</h2>
      </div>
    );
  }

  render() {
    let left = this.getChildren();
    let right = this.getText();

    if (this.props.displayLeft === true && this.state.width > 500) {
      left = this.getText();
      right = this.getChildren();
    }


    return (
			<article className="cf">
        {left}
        {right}
			</article>
    );
  }
}

FeatureCard.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
	displayLeft: PropTypes.bool.isRequired,
};


export default FeatureCard;
