import { Button, Col, Row, Text } from '@geist-ui/react';
import { Moon, Sun } from '@geist-ui/react-icons';
import React from 'react';

const Header = ({ switchThemes, themeType }) => {
  return (
    <Row justify="space-between" style={{ paddingTop: 10 }}>
      <Col>
        <Text h4 style={{ margin: 0 }}>
          Karrtopelka
        </Text>
      </Col>
      <Col style={{ textAlign: 'right' }}>
        <Button
          type={themeType === 'light' ? 'success' : 'warning'}
          ghost
          iconRight={themeType === 'light' ? <Moon /> : <Sun />}
          auto
          size="small"
          onClick={switchThemes}
        />
      </Col>
    </Row>
  );
};

export default Header;
