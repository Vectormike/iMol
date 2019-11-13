import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/core';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Notification = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div key={alert.id}>
        {' '}
        <Alert status={alert.status}>
          <AlertIcon />
          {alert.message}
          {console.log('Alert')}
        </Alert>
      </div>
    ))
  );
};

Notification.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Notification);
