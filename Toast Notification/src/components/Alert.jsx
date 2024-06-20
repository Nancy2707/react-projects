import React from 'react';

class Alert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDismissed: false
    };
    this.DismissedAlert = this.DismissedAlert.bind(this);
  }

  DismissedAlert() {
    this.setState({ isDismissed: true });
  }

  render() {
    const { message, title, type, id } = this.props;
    return this.state.isDismissed ? null : (
      <>
        <div className={`Toast Toast--${type ? type : 'info'}`}>
          <h1 id={id}>{title}</h1>
          <p className='message'>{message}</p>
          <br />
          <button className='toast___button' onClick={this.DismissedAlert}>
            <span>X</span>
          </button>
        </div>
      </>
    );
  }
}

export default Alert;
