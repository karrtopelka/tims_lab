import { Divider, Grid, Text } from '@geist-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectGenerator } from '../../features/generatorSlice';
import { selectA, selectB, selectN, selectR } from '../../features/inputsSlice';
import disRozp from '../../features/disRozp';
import emperical from '../../features/emperical';
import variativeRowCounter from '../../features/variativeRowCounter';
import StatTable from '../StatTable/StatTable';
import StatGraph from '../StatGraph/StatGraph';
import variance from '../../features/variance';
import standart from '../../features/standart';
import variacia from '../../features/variacia';
import Section from '../Section/Section';
import interRozp from '../../features/interRozp';
import asymetryExsces from '../../features/asymetryExsces';
import meanOfInterRozp from '../../features/meanOfInterRozp';
import irCharacteristic from '../../features/irCharacteristic';
import irDeviationData from '../../features/irDeviationData';

const Result = ({ isSM, themeType }) => {
  // selectors
  const gen = useSelector(selectGenerator);
  const n = useSelector(selectN);
  const a = useSelector(selectA);
  const b = useSelector(selectB);
  const r = useSelector(selectR);

  // rows
  const varrow = variativeRowCounter(Object.values(gen));
  const fr = emperical(varrow, n);

  // charachters
  const disRoz = disRozp(
    Object.values(gen).sort((a, b) => a - b),
    varrow,
  );
  const median = disRoz.dmedian;
  const serAr = disRoz.dserAr;
  const moda = disRoz.moda;
  const asymetryExscess = asymetryExsces(
    Object.values(gen).sort((a, b) => a - b),
  );
  const rozmah =
    Object.keys(varrow)[Object.keys(varrow).length - 1] -
    Object.keys(varrow)[0];
  const variansa = variance(varrow);
  const mstandart = standart(variansa);
  const mvariacia = variacia(mstandart, serAr);

  // integralniy rozpodil
  const inter = interRozp(varrow, r);
  const meanOfInter = meanOfInterRozp(inter);
  const irCharacteristics = irCharacteristic(inter, meanOfInter, n);
  const irMedian = irCharacteristics.median;
  const irSerAr = irCharacteristics.serAr;
  const irModa = irCharacteristics.moda;
  const irData = irDeviationData(meanOfInter, inter);
  const irRozmah = irData[irData.length - 1] - irData[0];
  const irVariansa = variance(irData);
  const irMstandart = standart(irVariansa);
  const irMvariacia = variacia(irMstandart, irSerAr);
  const irAsymetryExscess = asymetryExsces(irData);

  return (
    <>
      <Section title="Введені значення" j>
        <Text h4 style={{ margin: 0 }}>
          N: {n}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          a: {a}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          b: {b}
        </Text>
      </Section>
      <Section title="Навмання згенеровані числа">
        <Text>{gen.join(', ')}</Text>
      </Section>
      <Section title="Варіаційний ряд">
        <Text>
          {Object.values(gen)
            .sort((a, b) => a - b)
            .join(', ')}
        </Text>
      </Section>
      <Section title="Частотна таблиця">
        <StatTable vr={new Map(Object.entries(varrow))} tho="Xi" tht="Ni" />
      </Section>
      <Section title="Графічне представлення частотної таблиці" g>
        <StatGraph vr={varrow} name="Частот" themeType={themeType} />
      </Section>
      <Section title="Емпірична функція розподілу" g>
        <StatTable vr={new Map(Object.entries(fr))} tho="F(x)" tht="Xi" />
      </Section>
      <Section title="Графічне представлення емпіричної функції" g>
        <StatGraph vr={fr} name="Частот" line="vh" themeType={themeType} />
      </Section>
      <Section title="Числові характеристики центральної тенденції" j>
        <Text h4 style={{ margin: 0 }}>
          Мода: {moda.join(', ')}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Медіана: {median}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Сер. арифметичне: {serAr}
        </Text>
      </Section>
      <Section title="Числові характеристики розсіяння" j>
        <Text h4 style={{ margin: 0 }}>
          Розмах: {rozmah}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Варіанса: {variansa}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Cтандарт: {mstandart}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Варіація: {mvariacia}
        </Text>
      </Section>
      <Section title="Числові характеристики форми">
        <Grid.Container>
          <Grid xs={24} style={{ justifyContent: 'space-between' }}>
            <Text h4 style={{ margin: 0 }}>
              Асиметрія: {asymetryExscess.asymetry}
            </Text>
            <Text h4 style={{ margin: 0 }}>
              {asymetryExscess.am}
            </Text>
          </Grid>
          <Grid xs={24} style={{ justifyContent: 'space-between' }}>
            <Text h4 style={{ margin: 0 }}>
              Ексцес: {asymetryExscess.exsces}
            </Text>
            <Text h4 style={{ margin: 0 }}>
              {asymetryExscess.em}
            </Text>
          </Grid>
        </Grid.Container>
      </Section>
      <Divider>2 частина</Divider>
      <Section title="Інтервальний розподіл" j>
        <StatTable vr={inter.frequency} tho="n[i]" tht="x[i]" />
      </Section>
      <Section title="Гістограма розподілу" g>
        <StatGraph
          vr={inter.frequency}
          name="Гістограма розподілу"
          type="bar"
          themeType={themeType}
          m
        />
      </Section>
      <Section title="Середні значення інтервалів" j>
        <Text h4 style={{ margin: 0 }}>
          {meanOfInter.join(', ')}
        </Text>
      </Section>
      <Section
        title="Числові характеристики центральної тенденції для інтервального розподілу"
        j
      >
        <Grid.Container>
          <Grid xs={24} style={{ justifyContent: 'center' }}>
            <Text h4 style={{ margin: 0 }}>
              Мода: {irModa}
            </Text>
          </Grid>
          <Grid xs={24} style={{ justifyContent: 'center' }}>
            <Text h4 style={{ margin: 0 }}>
              Медіана: {irMedian}
            </Text>
          </Grid>
          <Grid xs={24} style={{ justifyContent: 'center' }}>
            <Text h4 style={{ margin: 0 }}>
              Сер. арифметичне: {irSerAr}
            </Text>
          </Grid>
        </Grid.Container>
      </Section>
      <Section
        title="Числові характеристики розсіяння для інтервального розподілу"
        j
      >
        <Text h4 style={{ margin: 0 }}>
          Розмах: {irRozmah}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Варіанса: {irVariansa}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Cтандарт: {irMstandart}
        </Text>
        <Text h4 style={{ margin: 0 }}>
          Варіація: {irMvariacia}
        </Text>
      </Section>
      <Section title="Числові характеристики форми">
        <Grid.Container>
          <Grid xs={24} style={{ justifyContent: 'space-between' }}>
            <Text h4 style={{ margin: 0 }}>
              Асиметрія: {irAsymetryExscess.asymetry}
            </Text>
            <Text h4 style={{ margin: 0 }}>
              {irAsymetryExscess.am}
            </Text>
          </Grid>
          <Grid xs={24} style={{ justifyContent: 'space-between' }}>
            <Text h4 style={{ margin: 0 }}>
              Ексцес: {irAsymetryExscess.exsces}
            </Text>
            <Text h4 style={{ margin: 0 }}>
              {irAsymetryExscess.em}
            </Text>
          </Grid>
        </Grid.Container>
      </Section>
    </>
  );
};

export default Result;
