import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Flags extends PureComponent {
  render() {
    const {
      country,
      flagSrc
    } = this.props;
    return (
      <img alt={country} src={`https://www.countryflags.io/${flagSrc}/flat/64.png`}></img>
    )
  }
}
Flags.propTypes = {
  country: PropTypes.string.isRequired,
  flagSrc: PropTypes.string.isRequired
}

export default Flags