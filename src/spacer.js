import React from 'react';
import PropTypes from 'prop-types';

const Spacer = ({ width }) => <div style={{ width: width }}></div>

Spacer.propTypes = {
    width: PropTypes.string.isRequired
}

export default Spacer