import React, { Component } from 'react'

const RowType = {
  SENT: 0,
  RECEIVED: 1
};

class ChatWindow extends Component {

  getHeader() {
    return (
      <header className="tc bg-white-70 w-100 ph3 pv1 ph4-m ph5-l dark-gray">
        <nav className="">
          <h3 className="f6 mv0">4PBot</h3>
          <p className="f7 lh-copy mv0 tracked-tight moon-gray fw2">Active Now</p>
        </nav>
      </header>
    )
  }

  getAvatar() {
    return (
      <div className="fl w-10 pa2">
        <img
          src="/img/4p_logo_1.png"
          className="br-100  dib"
          title="4p bot logo"
        />
      </div>
    );
  }

  getRow(type, content, idx) {
    let typeClass = "fw2 f6 pa2 br4 fl w-90 pa1 mv0";
    let float = " ";
    let avatar = null;

    switch (type) {
      case RowType.SENT:
        typeClass += " bg-light-blue white-90 tl fr";
        float += " fr";
        break;
      case RowType.RECEIVED:
      default:
        typeClass += " bg-light-gray near-black tl mw5 fl";
        float += " ";
        avatar = this.getAvatar();
    }

    return (
      <div className="dib w-100 pa1 w5">
        <div className={float}>
          {avatar}
          <p className={typeClass}>{content}</p>
        </div>
      </div>
    );
  }

  getContent() {
    return (
      <div className="bg-white-90 pb4">
        {this.getRow(RowType.SENT, "Hi there!")}
        {this.getRow(RowType.RECEIVED, "Hi, how can I help you?")}
        {this.getRow(RowType.SENT, "I just had a baby boy! How can I update my details with 4Ps?")}
        {this.getRow(RowType.RECEIVED, `Congrats!

           We can help you update your 4Ps details. You will need your son's birth certificate.`)}
        {/* {this.getRow(RowType.SENT, ".")} */}
      </div>
    );
  }

  render() {
    return (
      <div className="db mw6 center pv2 pv3-m pv4-ns pa2">
        {this.getHeader()}
        {this.getContent()}
      </div>
    );
  }
}

export default ChatWindow;
