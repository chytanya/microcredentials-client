import React, {Component, PropTypes} from 'react/addons';
import isEmpty from 'lodash/lang/isEmpty';
import connectToStores from 'alt/utils/connectToStores';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var MicroCredentialStore = require('../../stores/MicroCredentialStore');
var MicroCredentialActions =  require('../../actions/MicroCredentialActions');

// import $ from 'jquery/dist/jquery';

import styles from './styles.sass';

@connectToStores
class MicroCredentialPage extends Component {

  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  static getStores() {
    return [MicroCredentialStore];
  }

  static getPropsFromStores() {
    return MicroCredentialStore.getState();
  }

  componentDidMount() {
    MicroCredentialActions.fetchDetails(1);
    $('body').on('click', '.mc-details-header-wrapper a[href*=#]:not([href=#])', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - (75 + $('.mc-details-header-wrapper').height())
          }, 500);
          return false;
        }
      }
    });

    $(document).on("scroll", function() {
      if ($(document).scrollTop() > 75 ){
        $('.mc-details-header-wrapper').addClass('smaller');
      }else {
        $('.mc-details-header-wrapper').removeClass('smaller');
      }
    });
  }

  onChange () {
    this.setState(MicroCredentialStore.getState());
  }

  componentWillMount() {
    const stores = [MicroCredentialStore]
    stores.forEach(store => store.listen(this.onChange))
  }

  render() {
    if(!this.state || isEmpty(this.state.microCredential)){
      return (
        <div className="page">
          <div className="loading">Loading..</div>
        </div>
      );
    }

    let mcDetailsMenu = this.state.microCredential.mc_details.map(function(item, i) {
      return (
        <li className="mc-details-nav-item" key={item.id}>
          <a href={'#'+ item.id}>{item.title}</a>
        </li>
      );
    }.bind(this));

    let mcDetailsContent = this.state.microCredential.mc_details.map(function(item, i) {
      return (
        <div className="mc-details-content-item" key={item.id}>
          <h2 id={item.id}>{item.title}</h2>
          <div className="mc-details-content-description">
            <div dangerouslySetInnerHTML={{__html: item.html }}></div>
          </div>
        </div>
      );
    }.bind(this));

    return (
      <div className="page">
        <div className="mc-details-page post">
          <div className="mc-details-header-wrapper">
            <div className="mc-details-header">
              <div className="mc-details-logo">
                <img src={this.state.microCredential.image_url} />
              </div>
              <div className="mc-details-meta">
                <h2>{this.state.microCredential.title}</h2>
                <div className="helper">{this.state.microCredential.description}</div>
                <div className="mc-provider">
                  Made by <span className="highlight">{this.state.microCredential.publisher.name}</span>
                </div>
                <ul className="mc-details-nav">
                  {mcDetailsMenu}
                </ul>
              </div>
              <div className="mc-details-actions">
                <span className="btn-primary">APPLY</span>
              </div>
            </div>
            <ul className="mc-details-nav">
              {mcDetailsMenu}
            </ul>
          </div>
          <div className="mc-details-content">
            {mcDetailsContent}

            <div className="mc-details-content-item mc-details-requirements-item">
              <h2>Requirements</h2>
              <div className="mc-details-content-description">
                <span className="requirements-tagline">Please download the <span className="highlight">{this.state.microCredential.requirements_content.name}</span> to learn what is needed to earn this micro-credential.</span>
                <div className="download-area">
                  <div className="requirements-doc-thumbnail">
                    <img src="" />
                  </div>
                  <div className="requirements-doc-details">
                    <div className="requirements-doc-name">
                      Requirements for the `{this.state.microCredential.requirements_content.name}` (pdf)
                    </div>
                    <div className="helper">
                      How to prepare for and earn this micro-credential - in a downloable PDF document
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mc-details-content-item mc-details-action-item">
              <h2>Ready to apply?</h2>
              <div className="mc-details-content-description">
                <span className="btn-primary">APPLY</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MicroCredentialPage;
