import { Button, Card, Col, Dot, Row } from '@geist-ui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputRow from '../InputRow/InputRow';
import {
  changeA,
  changeB,
  changeN,
  changeR,
  selectA,
  selectB,
  selectN,
  selectR,
} from '../../features/inputsSlice';
import generatorNumbers from '../../features/generatorNumbers';
import { changeGenerator } from '../../features/generatorSlice';

const InputCard = ({ setDone }) => {
  const n = useSelector(selectN);
  const a = useSelector(selectA);
  const b = useSelector(selectB);
  const r = useSelector(selectR);
  const dispatch = useDispatch();

  const onFinish = (e) => {
    e.preventDefault();
    dispatch(changeGenerator(generatorNumbers(n, a, b)));
    setDone(true);
  };

  return (
    <Card shadow>
      <form>
        <InputRow
          title={
            <>{n < 50 && <Dot type="error" />}Кількість чисел (&gt;= 50)</>
          }
          placeholder="55"
          type="number"
          query={n}
          setQuery={changeN}
          dispatch={dispatch}
          setDone={setDone}
        />
        <InputRow
          title="Мінімальне значення"
          placeholder="0"
          type="number"
          query={a}
          setQuery={changeA}
          dispatch={dispatch}
          setDone={setDone}
        />

        <InputRow
          title={<>{b <= a && <Dot type="error" />}Максимальне значення</>}
          placeholder="25"
          type="number"
          query={b}
          setQuery={changeB}
          dispatch={dispatch}
          setDone={setDone}
        />
        <InputRow
          title={<>{r <= 1 && <Dot type="error" />}Кількість розбиттів</>}
          placeholder="5"
          type="number"
          query={r}
          setQuery={changeR}
          dispatch={dispatch}
          setDone={setDone}
        />
        <Row style={{ paddingTop: 10 }}>
          <Col />
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              disabled={
                (parseInt(n) < 50 ||
                  isNaN(n) ||
                  isNaN(a) ||
                  isNaN(b) ||
                  a >= b ||
                  r <= 1) &&
                true
              }
              auto
              type="success-light"
              htmlType="submit"
              onClick={onFinish}
            >
              Готово
            </Button>
          </Col>
          <Col />
        </Row>
      </form>
    </Card>
  );
};

export default InputCard;
