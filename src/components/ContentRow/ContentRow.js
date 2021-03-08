import { Col, Row, useMediaQuery } from '@geist-ui/react';
import React from 'react';

const ContentRow = ({ children }) => {
  const isSM = useMediaQuery('sm', { match: 'down' });
  return (
    <Row>
      {!isSM && <Col span={6} />}
      <Col>{children}</Col>
      {!isSM && <Col span={6} />}
    </Row>
  );
};

export default ContentRow;
