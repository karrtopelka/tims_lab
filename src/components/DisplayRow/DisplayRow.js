import { Display, Row } from '@geist-ui/react';
import React from 'react';

const DisplayRow = ({ title, children, g, j }) => {
  return (
    <Display width="auto" shadow caption={title}>
      <Row
        justify={j && 'space-around'}
        style={{
          padding: 10,
          overflowY: 'auto',
          maxHeight: !g ? 350 : 'auto',
        }}
      >
        {children}
      </Row>
    </Display>
  );
};

export default DisplayRow;
