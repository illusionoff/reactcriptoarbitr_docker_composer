import { Line } from 'react-chartjs-2';
const FONT_AXIS = { size: 16, style: 'italic' };
const FONT_TITLE_CHART = { size: 24, style: 'italic' };

function ViewChart(props) {
  if (props.ViewChart.number) {
    Line.animation = false;

    let testDate = props.ViewChart;
    let numberY = testDate.number;
    const COUNT = testDate.number.length;

    function fusionNumberTime(timesArr) {
      let newDataY = timesArr.map((elem, index) => {
        let result = elem.toString();
        let numberToString = numberY[index].toString();
        result = numberToString + '-' + result.substring(result.length - 7);
        return result
      });
      return newDataY
    }

    let strtimeServer = fusionNumberTime(testDate.timeServer);
    let strtimeGate = fusionNumberTime(testDate.timeGate);
    let strtimeBith = fusionNumberTime(testDate.timeBith);

    const data = canvas => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(100, 0, 100, 2);
      return {
        backgroundColor: gradient,
        datasets: [{
          label: 'buyOrSellGate',
          yAxisID: 'a',
          borderColor: 'red',
          data: testDate.buyOrSellGate
        }, {
          label: 'buyOrSellBith',
          yAxisID: 'b',
          borderColor: 'green',
          data: testDate.buyOrSellBith
        }]
      };
    }

    let colorArr = Array(COUNT).fill('red').map((el, i, array) => {
      return array[i] = i % 2 === 0 ? '#566573' : 'green'
    });

    const options = {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: 'Boolean and times diagram',
          font: FONT_TITLE_CHART
        }
      },
      // maintainAspectRatio: false,
      scales: {
        a: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'false/true/all',
            color: '#191', // green
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 48, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'red',
            stepSize: 2,
          }
        },
        b: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'price',
            color: 'White',
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 50, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'green',
            stepSize: 2,
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        x: {
          position: 'bottom',
          title: {
            display: true,
            text: 'timeBith',
            color: 'red',
            font: FONT_AXIS
          },
          grid: {
            // offset: true // offset true to get labels in between the lines instead of on the lines
          },
          labels: strtimeBith,
          ticks: { color: colorArr }, //colorArr через одного другой цвет'green'
        },
        x2: {
          position: 'top',
          title: {
            display: true,
            text: 'timeGate',
            color: 'green',
            font: FONT_AXIS
          },
          grid: {
            // offset: true // offset true to get labels in between the lines instead of on the lines
          },
          labels: strtimeGate,
          ticks: {
            color: colorArr //colorArr через одного другой цвет'green'
          },
        },
      }
    }

    const data2 = canvas => {
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(100, 0, 100, 2);
      return {
        backgroundColor: gradient,
        datasets: [{
          label: 'percentBonus',
          yAxisID: 'a',
          backgroundColor: 'blue',
          borderColor: 'green',
          data: testDate.percentBonus
        }, {
          label: 'buyGate',
          yAxisID: 'b',
          borderColor: 'blue',
          data: testDate.buyGate
        }, {
          label: 'buyBith',
          yAxisID: 'c',
          borderColor: '#bbdefb', //light blue
          data: testDate.buyBith
        }, {
          label: 'sellGate',
          yAxisID: 'd',
          borderColor: 'red',
          data: testDate.sellGate
        },
        {
          label: 'sellBith',
          yAxisID: 'e',
          borderColor: '#f8bbd0', //light- pink светло-розовый
          data: testDate.sellBith
        }]
      };
    }

    const options2 = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Quotation price diagram',
          font: FONT_TITLE_CHART
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y;
              }
              return label;
            }
          }
        }
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      scales: {
        a: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'percentBonus',
            color: '#191', // green
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'green',
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        b: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'price',
            color: 'red',
            font: {
              family: 'Times',
              size: 20,
              style: 'normal',
              lineHeight: 1.2
            },
            padding: { top: 30, left: 0, right: 0, bottom: 0 }
          },
          ticks: {
            color: 'blue', //#bbdefb голубой
          },
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
        c: {
          type: 'linear',
          display: false,
          position: 'right',
        },
        d: {
          type: 'linear',
          display: false,
          position: 'right',
        },
        e: {
          type: 'linear',
          display: false,
          position: 'right',
        },
        x: {
          position: 'bottom',
          title: {
            display: true,
            text: 'timeServer',
            color: 'blue',
            font: FONT_AXIS
          },
          grid: {
            // offset: true // offset true to get labels in between the lines instead of on the lines
          },
          labels: strtimeServer,
          ticks: { color: colorArr }, //colorArr через одного другой цвет'green'
        },
      }
    }

    return (
      <>
        <div className="noneBackground">
          <div id="chartData2Up" >
            <div id="chartData2Down" >
              <Line data={data2} id="ChartQuotation"
                options={options2}
              />
            </div>
          </div>
          <hr width="85%" />
          <div id="chartData1Up" >
            <div id="chartData1Down" >
              <Line data={data}
                height={100}
                options={options}
              />
            </div>
          </div>
        </div >
      </>
    )
  }

  return (
    <>
      <div >
        <h3 className="page-title white-text">Графики не загружены!</h3>
        <div className="container">
          <blockquote>
            Графики не загружены!
        </blockquote>
        </div >
      </div>
    </>)
}

export default ViewChart
