var url = 'https://www.linkedin.com/vsearch/pj?type=people&keywords=attribution%20performance&orig=FCTD&rsid=97459901487856503733&pageKey=voltron_people_search_internal_jsp&trkInfo=tarId%3A1487856477883&trk=global_header&search=Search&openFacets=N,G,CC&f_G=fr%3A0&f_N=S&page_num=PAGENUM&pt=people&rnd=1487856561684'
var keys = ['lastName', 'connectionCount', 'fmt_location', 'distance', 'link_nprofile_view_4', 'snippets', 'fmt_headline', 'id', 'fmt_name', 'firstName', 'sharedConnectionCount', 'resultIndex', 'fmt_industry', 'isContact']

var request = num => fetch(url.replace('PAGENUM', num), { credentials: 'same-origin' })
  .then(r => r.json())
  .then(json => json.content.page.voltron_unified_search_json.search.results)
  .then(arr => arr.map(d => keys.reduce((acc, k) => { acc[k] = d.person[k]; return acc }, {})))

var flatten = arr => arr.reduce((acc, cur) => acc.concat(cur), [])

var toCSV = (arr, sep) => {
  var keys = Object.keys(arr[0])
  var values = arr.map(o => Object.values(o))
  return [keys].concat(values).map(d => d.join(sep)).join("\n")
}

var dlCSV = (arr, sep, filename) => {
  var content = 'data:text/csv;charset=utf-8,' + toCSV(arr, sep)
  var encodedUri = encodeURI(content)
  var link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', filename || 'table.csv')
  document.body.appendChild(link) // Required for FF
  link.click()
}

Promise.all([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(request)).then(flatten).then(r => window.r = r).then(dlCSV)
