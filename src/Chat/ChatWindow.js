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
          src="http://tachyons.io/img/avatar_1.jpg"
          className="br-100  dib"
          title="Photo of a kitty staring at you"
        />
      </div>
    );
  }

  getRow(type, content, idx) {
    let typeClass = "fw2 f6 pa2 mv0 br4 fl w-90 pa2";
    let float = "";
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
      <div className="w-100 pa2 mb4 w5">
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
        {this.getRow(RowType.RECEIVED, "Hi there, how can I help you?")}
        {this.getRow(RowType.SENT, "I'm looking for help with x")}
        {this.getRow(RowType.RECEIVED, "Do you want me to find more information about that for you?")}
        {this.getRow(RowType.SENT, "Yes Please! Thanks.")}
      </div>
    );
  }

  render() {
    return (
      <div className="db mw6 center pv5 pv5-m pv6-ns pa4 pa1-ns">
        {this.getHeader()}
        {this.getContent()}
      </div>
    );
  }
}

export default ChatWindow;
