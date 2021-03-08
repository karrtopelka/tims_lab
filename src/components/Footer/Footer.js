import { Col, Row, Text } from '@geist-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Row gap={2} justify="space-between" style={{ paddingBottom: 10 }}>
      <Col>
        <Text p style={{ margin: 0 }}>
          {new Date().getFullYear()}
        </Text>
      </Col>
      <Col style={{ textAlign: 'right' }}>
        <Text p style={{ margin: 0 }}>
          TIMS Lab 1
        </Text>
      </Col>
    </Row>
  );
};

export default Footer;
