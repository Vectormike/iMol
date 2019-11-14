import React from 'react';
import { Alert, AlertIcon } from '@chakra-ui/core';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Notification = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <div>
        <Alert key={alert.id} status={alert.status}>
          <AlertIcon />
          {alert.message}
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
