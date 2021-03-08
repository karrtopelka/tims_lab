import React from 'react';

const StatTable = ({ vr, tho, tht }) => {
  const keys = [...vr.keys()];
  const values = [...vr.values()];

  return (
    <table>
      <tbody>
        <tr style={{ padding: '.35em' }}>
          <th
            style={{
              borderRight: '1px solid #ccc',
              borderBottom: '1px solid #ccc',
              padding: '.625em',
            }}
          >
            <i>{tho}</i>
          </th>
          {keys.map((x, i) => (
            <td
              key={i}
              style={{ borderBottom: '1px solid #ccc', padding: '.625em' }}
            >
              <strong>
                <i>{x}</i>
              </strong>
            </td>
          ))}
        </tr>
        <tr style={{ padding: '.35em' }}>
          <th
            style={{
              borderRight: '1px solid #ccc',
              padding: '.625em',
            }}
          >
            {tht}
          </th>
          {values.map((x, i) => (
            <td key={i} style={{ padding: '.625em' }}>
              {x}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default StatTable;
