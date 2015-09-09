import React, {Component, PropTypes} from 'react';
import {ReactCSSTransitionGroup, PureRenderMixin} from 'react/addons';

require('./styles.sass');

class MicroCredentialCard extends Component {

  static propTypes = {
    microCredential: PropTypes.object.isRequired,
    provider: PropTypes.object.isRequired
  }

  mixins: [PureRenderMixin]

  colorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    var rgb = "#", c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i*2,2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00"+c).substr(c.length);
    }
    return rgb;
  }

  updateCardBackground() {
    var cardNode = React.findDOMNode(this);
    var img = cardNode.getElementsByClassName('micro-credential-logo')[0];
    img.crossOrigin = 'Anonymous';
    var _this = this;
    img.addEventListener('load', function() {
      var vibrant = new Vibrant(img);
      var swatches = vibrant.swatches()
      for (var swatch in swatches){
        if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
          console.log(swatch, swatches[swatch].getHex());
        }
      }
      cardNode.getElementsByClassName('micro-credential-card-content')[0].style.background = _this.colorLuminance(swatches['LightVibrant'].getHex(), 0.3);
      // cardNode.getElementsByClassName('micro-credential-provider')[0].style.color = swatches['DarkVibrant'].getHex();
      // cardNode.getElementsByClassName('micro-credential-publisher')[0].style.color = swatches['DarkVibrant'].getHex();
    });
  }

  componentDidMount() {
    // this.updateCardBackground();
  }

  render() {
    let detailsLink = 'microcredential/' + this.props.microCredential.id;
    console.log('in mc card render', this.props.microCredential);
    return (
      <li className="micro-credential-card-wrapper">
        <div className="micro-credential-card">
          <div className="micro-credential-card-content">
            <div className="micro-credential-card-info">
              <div className="micro-credential-card-image">
                <img className="micro-credential-logo" src={this.props.microCredential.image_url} />
              </div>
              <div className="micro-credential-card-details">
                <div className="micro-credential-card-title">
                  {this.props.microCredential.title}
                </div>
                <div className="micro-credential-card-description">
                  {this.props.microCredential.description}
                </div>
                <div className="micro-credential-card-details-btn">
                  <a className="btn primary-btn" href={detailsLink}>DETAILS</a>
                </div>
              </div>
            </div>
            <div className="micro-credential-card-meta">
              provided by <span className="micro-credential-provider">{this.props.provider.name}</span> / issued by <span className="micro-credential-publisher">{this.props.microCredential.publisher.name}</span>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default MicroCredentialCard;
