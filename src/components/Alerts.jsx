import React, { useState } from 'react';

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, message: 'Vehicle A needs service soon.', type: 'warning' },
    { id: 2, message: 'Fuel level low for Vehicle B.', type: 'danger' },
  ]);

  const dismissAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div>
      <h5>Alerts</h5>
      {alerts.length === 0 ? (
        <p className="text-muted">No active alerts.</p>
      ) : (
        alerts.map(alert => (
          <div key={alert.id} className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
            <button
              type="button"
              className="btn-close"
              onClick={() => dismissAlert(alert.id)}
              aria-label="Close"
            ></button>
          </div>
        ))
      )}
    </div>
  );
};

export default Alerts;
