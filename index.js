import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Scatter } from '@ant-design/plots';

const DemoScatter = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("sample.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    appendPadding: 30,
    data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    colorField: 'Result',
    size: 5,
    shape: 'circle',
    pointStyle: {
      fillOpacity: 1,
    },
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    label: {},
  };

  return <Scatter {...config} />;
};

ReactDOM.render(<DemoScatter />, document.getElementById('container'));
