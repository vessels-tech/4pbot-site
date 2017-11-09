import React, { Component } from 'react'

import ChatRowType from './ChatRowType'
import ChatRow from './ChatRow'

class ChatWindow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pendingText: '',
      rows: this.props.rows,
    };
  }

  handleChange(event) {

    this.setState({
      pendingText: event.target.value
    });
  }

  submitText() {
    const rows = this.state.rows;

    if (this.state.pendingText.strip === '') {
      return;
    }

    rows.push({
      type: ChatRowType.SENT,
      content: this.state.pendingText
    });

    this.setState({
      pendingText: '',
      rows
    });
  }

  getHeader() {
    return (
      <header className="br3 br--top tc bg-white-70 w-100 ph3 pv1 ph4-m ph5-l dark-gray">
        <nav className="">
          <h3 className="f6 mv0">4PBot</h3>
          <p className="f7 lh-copy mv0 tracked-tight moon-gray fw2">Active Now</p>
        </nav>
      </header>
    )
  }

  getChatRows() {
    const { rows } = this.state;

    return rows.map(row => {
      return (
        <ChatRow
          key={row.content}
          rowType={row.type}
          content={row.content}/>
      );
    });
  }

  getContent() {
    return (
      <div className="bg-white-90 br3 br--bottom">
          {this.getChatRows()}
      </div>
    );
  }

  getInput() {
    return (
      <div className="br3 br--bottom bg-white-90 pb4 w-100">
        <div className="mw9 center ph3-ns">
          <div className="cf ph2-ns">
            <div className="fl w-80 ph1">
              <input
                className="w-100 h2 f6 pa1"
                value={this.state.pendingText}
                onChange={event => this.handleChange(event)}
                type="text"
                placeholder="Write a message"
              />
            </div>
            <div className="fl w-20 ph2">
              <button
                onClick={() => this.submitText()}
                className="h2 f6 w-100 br3 bg-light-blue no-underline white-90 ba b--light-blue grow pv2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="db mw6 center pv2 pv3-m pv4">
        {this.getHeader()}
        {this.getContent()}
        {/*  Hiding this for now, we can add it back later*/}
        {/* {this.getInput()} */}
      </div>
    );
  }
}

export default ChatWindow;
