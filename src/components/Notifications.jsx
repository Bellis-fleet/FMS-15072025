import React, { useState, useEffect } from 'react';

const NotificationBar = ({ notifications, removeNotification }) => {
  return (
    <div className="position-fixed top-0 start-50 translate-middle-x mt-3" style={{ zIndex: 1055 }}>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`alert alert-${notif.type} alert-dismissible fade show text-center shadow mb-2`}
          role="alert"
          style={{ minWidth: '300px' }}
        >
          {notif.message}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => removeNotification(notif.id)}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default NotificationBar;

