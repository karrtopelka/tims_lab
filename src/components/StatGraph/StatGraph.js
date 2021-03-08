import React from 'react';
import Plot from 'react-plotly.js';

const StatGraph = ({ vr, name, line, themeType, m, type }) => {
  return (
    <Plot
      data={[
        {
          x: m ? [...vr.keys()] : Object.keys(vr),
          y: m ? [...vr.values()] : Object.values(vr),
          type: type ? type : 'scatter',
          mode: 'lines+markers',
          name: { name },
          line: line && { shape: line },
        },
      ]}
      layout={{
        hovermode: 'closest',
        autosize: true,
        width: 670,
        modebar: {
          orientation: 'v',
          activecolor: '#9ED3CD',
        },
        plot_bgcolor: themeType === 'light' ? 'white' : 'black',
        paper_bgcolor: themeType === 'light' ? 'white' : 'black',
      }}
    />
  );
};

export default StatGraph;
