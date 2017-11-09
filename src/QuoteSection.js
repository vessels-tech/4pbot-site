import React, { Component } from 'react'


class QuoteSection extends Component {


  render() {
    return (
      <div className={this.props.className + ' pa4'}>
        <blockquote className="ph0 f4 f1-ns measure-narrow center">
          <p className="fw9 lh-copy lh-title-ns">{this.props.quote}
          </p>
          <cite className="f6 ttu tracked fs-normal">―{this.props.author}</cite>
        </blockquote>
      </div>
    );
  }
}


export default QuoteSection;
