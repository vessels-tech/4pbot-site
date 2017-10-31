import React, { Component } from 'react'
import PropTypes from 'prop-types';

import ChatRowType from './ChatRowType'

class ChatRow extends Component {

  getAvatar() {
    return (
      <div className="fl w-10 pa2 v-mid">
        <img
          src="/img/4p_logo_1.png"
          className="br-100"
          title="4p bot logo"
        />
      </div>
    );
  }

  render() {
    const { content, rowType } = this.props;

    let typeClass = "fw2 f6 pa2 br4 fl pa1 mv0 mw5 ";
    let float = " ";
    let avatar = null;

    switch (rowType) {
      case ChatRowType.SENT:
        typeClass += " bg-light-blue white-90 tl fr";
        float += " fr";
        break;
      case ChatRowType.RECEIVED:
      default:
        typeClass += " w-90 bg-light-gray near-black tl fl";
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
}

ChatRow.propTypes = {
  content: PropTypes.string.required,
  rowType: PropTypes.string.required
};

export default ChatRow;
