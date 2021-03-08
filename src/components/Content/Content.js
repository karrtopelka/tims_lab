import {
  Card,
  Col,
  Divider,
  Loading,
  Row,
  Spacer,
  useMediaQuery,
} from '@geist-ui/react';
import React, { useState } from 'react';
import ContentRow from '../ContentRow/ContentRow';
import InputCard from '../InputCard/InputCard';
import Result from '../Result/Result';

const Content = ({ themeType }) => {
  const isSM = useMediaQuery('sm', { match: 'down' });
  const [done, setDone] = useState(false);

  return (
    <>
      <Row>
        {!isSM && <Col span={6} />}
        <Col>
          <InputCard setDone={setDone} />
        </Col>
        {!isSM && <Col span={6} />}
      </Row>
      <Spacer y={1} />
      {done && <Divider>Результат</Divider>}

      {done ? (
        <Result isSM={isSM} themeType={themeType} />
      ) : (
        <ContentRow isSM={isSM}>
          <Card shadow>
            <Loading type="warning">Чекаю на значення</Loading>
          </Card>
        </ContentRow>
      )}
    </>
  );
};

export default Content;
