var data = [{
    'key': 'cat1',
    'value': 0.2,
    'value2': 0.4,
    'value3': 0.5
  }, {
    'key': 'cat2',
    'value': 0.7,
    'value2': 0.9,
    'value3': 0.8
  }, {
    'key': 'cat3',
    'value': 0.5,
    'value2': 0.3,
    'value3': 0.4
  }, ]

var chart_ex1 = d3.chart({
  bindto: '#chart-ex1',
  type: 'bar',
  fieldX: 'key',
  fieldsY: ['value', 'value2','value3'],
  colors: ["var(--iceblue-step1)", "var(--iceblue-step2)","var(--iceblue-step3)"],
})
var chart_ex2 = d3.chart({
  bindto: '#chart-ex2',
  type: 'hbar',
  fieldX: 'key',
  fieldsY: ['value', 'value2','value3'],
  colors: ["var(--iceblue-step1)", "var(--iceblue-step2)","var(--iceblue-step3)"],
})
chart_ex1.cycleIndex = chart_ex2.cycleIndex = 0

chart_ex1.data = data
chart_ex2.data = data
fields = [['value', 'value2','value3'],['value', 'value2'],['value']]

function click(chart) {
  return function () {
    var chart = d3.event.currentTarget.chart
    chart.cycleIndex += 1;
    chart.fieldsY = fields[chart.cycleIndex%3]
    chart.data= data
  }
}

chart_ex1.svg.on('click', click(chart_ex1))
chart_ex2.svg.on('click', click(chart_ex2))
