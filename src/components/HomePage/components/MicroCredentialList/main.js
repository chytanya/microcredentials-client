import React, {Component, PropTypes} from 'react';
var MicroCredentialGroup = require('../MicroCredentialGroup');

// require('./styles.sass');

class MicroCredentialsList extends Component {

  static propTypes = {
    microCredentialGroups: PropTypes.object.isRequired,
    provider: PropTypes.object.isRequired
  }

  renderMicroCredentialGroup = (microCredentialGroup, index) => {
    return (
      <div key={index}>
        <MicroCredentialGroup microCredentialGroup={microCredentialGroup} key={index} provider={this.props.provider} />
      </div>
    );
  }

  render() {
    if (!this.props.microCredentialGroups) {
      return (
        <h3>No MicroCredentials for this group</h3>
      );
    }
    return (
      <div>
        <div className="micro-credentials-list">
          {Object.values(this.props.microCredentialGroups).map(this.renderMicroCredentialGroup)}
        </div>
      </div>
    );
  }

}

export default MicroCredentialsList;
