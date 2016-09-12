d3.charts = []

d3.chart = (options) => {
  var chart = Object.assign({}, d3.chart.defaults, d3.chart[options.type], options)

  Object.defineProperty(chart, 'data', {
    get: () => chart._data,
    set: (data) => {
      chart._data = data

      chart.domainX = chart._domainX(chart)
      chart.domainY = chart._domainY(chart)
      chart.domainY2 = chart._domainY2(chart)
      chart.scaleX = chart._scaleX(chart).domain(chart.domainX)
      chart.scaleY = chart._scaleY(chart).domain(chart.domainY)
      chart.scaleY2 = chart._scaleY2(chart).domain(chart.domainY2)
      chart.axisX = chart._axisX(chart)
      chart.axisY = chart._axisY(chart)
      chart.axisY2 = chart._axisY2(chart)
      chart.gridX = chart._gridX(chart)

      d3.chart.draw(chart)

    }
  })

  // TODO: simplify sizes + remove padding dependency
  chart.innerWidth = chart.width - chart.padding.left - chart.padding.right
  chart.innerHeight = chart.height - chart.padding.top - chart.padding.bottom

  d3.charts.push(chart)
  chart.id = d3.charts.length

  chart.svg = d3
    .select(chart.bindto)
    .append("svg")
    .classed("d3-chart", true)
    .classed(chart.type, !!chart.type)

  chart.clipId = "clip-inner-" + chart.id
  chart.clipPath = "url(" + document.URL.split('#')[0] + "#" + chart.clipId + ")";
  chart.clipInner = chart.svg
    .append("defs")
    .append("clipPath")
    .attr("id", chart.clipId)
    .append('rect')
    .attr("width", chart.innerWidth)
    .attr("height", chart.innerHeight)

  chart.wrapper = chart.svg
    .attr("width", chart.width)
    .attr("height", chart.height)
    .attr("viewBox", "0 0 " + chart.width + " " + chart.height)
    .append("g")
    .attr("transform", "translate(" + chart.padding.left + "," + chart.padding.top + ")")

  chart.shapes = chart.wrapper
    .append("g")
    .attr("class", "shapes")
    .attr("clip-path", chart.clipPath)

  chart.AxisX = chart.wrapper
    .append("g")
    .attr("class", "axis x")
    .attr("transform", "translate(0," + chart.innerHeight + ")")

  chart.LabelX = chart.AxisX
    .append("text")
    .attr("class", "label")
    .attr("x", chart.innerWidth)
    .attr("y", -6)
    .style("text-anchor", "end")

  chart.AxisY = chart.wrapper
    .append("g")
    .attr("class", "axis y")

  chart.LabelY = chart.AxisY
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")

  chart.AxisY2 = chart.wrapper
    .append("g")
    .attr("class", "axis y2")
    .attr("transform", "translate(" + chart.innerWidth + ",0)")

  chart.LabelY2 = chart.AxisY2
    .append("text")
    .attr("class", "label")
    .attr("transform", "rotate(-90)")
    .attr("y", -12)
    .attr("dy", ".71em")
    .style("text-anchor", "end")

  chart.GridX = chart.wrapper
    .append("g")
    .attr("class", "grid x")
    .attr("transform", "translate(0," + chart.innerHeight + ")")

  chart.Brush = chart.wrapper
    .append("g")
    .attr("class", "brush")

  d3.chart.draw(chart)

  return chart
}

d3.chart.draw = (chart) => {

  if (!chart.data) return

  chart.AxisX.call(chart.axisX)
  chart.GridX.call(chart.gridX)
  if (chart.fieldsY.length > 0) chart.AxisY.call(chart.axisY)
  if (chart.fieldsY2.length > 0) chart.AxisY2.call(chart.axisY2)
  chart.LabelX.text(chart.labelX)
  chart.LabelY.text(chart.labelY)
  chart.LabelY2.text(chart.labelY2)
  chart.fieldsY.forEach((field) => d3.chart[chart.type](chart, field, 'scaleY'))
  chart.fieldsY2.forEach((field) => d3.chart[chart.type](chart, field, 'scaleY2'))

  return chart
}

d3.chart.line = (chart, field, scale = 'scaleY') => {
  var line = d3.line().curve(d3.curveStep)
    .x((d) => chart.scaleX(d[chart.fieldX]))
    .y((d) => chart[scale](d[field]))

  if (chart.shapes.select('.' + field).size() === 0) {
    chart.shapes
      .datum(chart.data)
      .append("path")
      .classed(field, true)
      .attr("d", line)
  } else {
    chart.shapes
      .select('.' + field)
      .exit()
      .remove()

    chart.shapes
      .select('.' + field)
      .attr("d", line)
  }
}

var updateEnterPattern = (chart, field, scale, type) => {
  var update = chart.shapes
    .selectAll("." + field)
    .data(chart.data)
    .classed('update', true)

  var exit = update
    .exit()
    .classed('exit', true)
    .remove()

  var enter = update
    .enter()
    .append(type)
    .classed(field, true)
    .classed('enter', true)

  var updateEnter = update.merge(enter)

  return { update, exit, enter, updateEnter }
}

d3.chart.bar = (chart, field, scale) => {
  var { update, exit, enter, updateEnter } = updateEnterPattern(chart, field, scale, 'rect')

  updateEnter
    .attr('x', (d) => chart.scaleX(d[chart.fieldX]) - (chart.innerWidth / chart.data.length) / 2)
    .attr('y', (d) => chart[scale](d[field]))
    .attr('width', (d) => chart.innerWidth / chart.data.length)
    .attr('height', (d) => chart.innerHeight - chart[scale](d[field]))
}

d3.chart.scatter = (chart, field, scale) => {
  var { update, exit, enter, updateEnter } = updateEnterPattern(chart, field, scale, 'circle')

  updateEnter
    .attr('r', 3)
    .attr('cx', (d) => chart.scaleX(d[chart.fieldX]))
    .attr('cy', (d) => chart[scale](d[field]))
}

d3.chart.defaults = {
  width: 800, // TODO: 'auto'
  height: 280, // TODO: 'auto'
  padding: { // TODO: 'auto'
    top: 40,
    right: 40,
    bottom: 40,
    left: 40
  },
  _domainX: (chart) => d3.extent(chart.data.map((d) => d[chart.fieldX])),
  _scaleX: (chart) => d3.scaleLinear().range([0, chart.innerWidth]), // NOTE: use nice(chart.innerWidth / 100) ?
  _axisX: (chart) => d3.axisBottom(chart.scaleX).ticks(chart.innerWidth / 100).tickSizeOuter(0),
  _domainY: (chart) => d3.extent(chart.data.map((d) => d[chart.fieldsY[0]])), // TODO: map keys
  _scaleY: (chart) => d3.scaleLinear().range([chart.innerHeight, 0]),
  _axisY: (chart) => d3.axisLeft(chart.scaleY).ticks(chart.innerHeight / 25).tickSizeOuter(0),
  _domainY2: (chart) => d3.extent(chart.data.map((d) => d[chart.fieldsY2[0]])), // TODO: map keys
  _scaleY2: (chart) => d3.scaleLinear().range([chart.innerHeight, 0]),
  _axisY2: (chart) => d3.axisRight(chart.scaleY2).ticks(chart.innerHeight / 25).tickSizeOuter(0),
  _gridX: (chart) => d3.axisBottom(chart.scaleX).tickSize(-chart.innerHeight).tickFormat(() => null),
  labelX: '',
  labelY: '',
  labelY2: '',
  fieldX: [],
  fieldsY: [],
  fieldsY2: [],
}
