import { Grid, Input, Text } from '@geist-ui/react';
import React from 'react';

const InputRow = ({
  title,
  placeholder,
  type,
  query,
  setQuery,
  dispatch,
  setDone,
  ...props
}) => {
  return (
    <>
      <Grid.Container gap={1} justify="space-between">
        <Grid>
          <Text p style={{ margin: 0 }}>
            {title}
          </Text>
        </Grid>
        <Grid>
          <Input
            type={type}
            placeholder={placeholder}
            onChange={(e) => {
              dispatch(setQuery(parseInt(e.target.value)));
              setDone(false);
            }}
            value={query}
            {...props}
          />
        </Grid>
      </Grid.Container>
    </>
  );
};

export default InputRow;
