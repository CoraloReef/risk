import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';

const Notice = (props) => {
  const [show, setShow] = useState(true);

  const { heading, smallHeading, text } = props;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: 'relative',
        minHeight: '100px',
      }}
    >
      <Toast
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="mr-auto">{heading}</strong>
          <small>{smallHeading}</small>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Notice;
