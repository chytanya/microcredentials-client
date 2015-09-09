import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react/addons';

require('./styles.sass');

var MicroCredentialCard = require('../MicroCredentialCard');

class MicroCredentialGroup extends Component {

  static propTypes = {
    microCredentialGroup: PropTypes.object.isRequired,
    provider: PropTypes.object.isRequired
  }

  renderMicroCredential = (microCredential, index) => {
    return (
      <MicroCredentialCard microCredential={microCredential} key={microCredential.id} provider={this.props.provider} />
    );
  }

  render() {
    if (this.props.microCredentialGroup && !this.props.microCredentialGroup.microCredentials) {
      return (
        <h1>No MCs for this group.</h1>
      );
    }
    return (
      <ReactCSSTransitionGroup component="div" className="animated" transitionName='example' transitionAppear={true}>
        <div className="micro-credentials-group">
          <div className="separator">&nbsp;</div>
          <div className="header">
            <span className="highlight">{this.props.microCredentialGroup.name}</span> stack&nbsp;&nbsp;
          </div>
          <ul className="micro-credentials">
            {Object.values(this.props.microCredentialGroup.microCredentials).map(this.renderMicroCredential)}
          </ul>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default MicroCredentialGroup;
