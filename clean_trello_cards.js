const axios = require('axios')
// C
// Get  key/token from trello:
// 1) https://trello.com/app-key
// 2) https://trello.com/1/authorize?expiration=never&name=Chronos&scope=write&response_type=token&key=XXXXXXXXXXXX
// Where XXXXXXXXXXXX is obtained key
//
// More information: https://developers.trello.com/page/authorization
// If there are many updates( more than 100) trello will respond error 429
// Wait 10s before try again
//
const key_lga='39b391d37456503215d5d7b14da51604'
const token_lga= '6e5a60a072ab5225dd17575e4079e09faae72a92916f0e7c23f0f37a928b8a8a'

const transform_map = {
  "100M Builder": 'BUILDER',
  "100M Dataflow": 'DATAFLOW',
  "100M Pipeline": 'PIPELINE',
  "100M Platform": 'PLATFORM',
  "100M R&D": 'RESEARCH',
  "100M Tooling": 'TOOLING',
  "100M Tools": 'TOOLING',
  "100m": '100M',
  "100m PM": 'SPEC',
  "Back Cedrus": 'CED',
  "CACEIS": 'CAC',
  "Caceis": 'CAC',
  "Cedrus": 'CED',
  "Colisee": 'COL',
  "Colisée": 'COL',
  "Commandr": 'COMMANDR',
  "Conservateur": 'CON',
  "Conservateurs": 'CON',
  "Data Quality": 'DATAFLOW',
  "Data audit": 'DATAFLOW',
  "Data quality": 'DATAFLOW',
  "Fintex": 'FIN',
  "Front Cedrus": 'CED',
  "Greenlake": 'GREENLAKE',
  "GREENLACK": 'GREENLAKE',
  "Highbridge": 'HB',
  "La Financière de l'échiquier": 'LFDE',
  "Labellecom": 'LBC',
  "Mandarine": 'MAN',
  "NIMI": 'NAT',
  "NINI": 'NAT',
  "Natixis": 'NAT',
  "Neoxam": 'NEO',
  "Platform": 'PLATFORM',
  "Schelcher": 'SCH',
  "Sycomore": 'SYC',
  "TIK": 'TKO',
  "Tikehau": 'TKO',
  "WEALTH": 'GREENLACK',
}

console.log("Clean trello card.js")

axios.get('https://trello.com/b/A2C5zxQN/100m-production.json?key=046e2330907f0ebb73bd1f18947a4308&token=b9a259e4ee2d0923b563e963196163bfbd988a4633f54b7916d26752f2d3315c&cards=all&lists=all&members=all')
.then( r => {
  const trello = r.data
  const list_card = trello.cards
    .filter(d => /^W\d+$/.test(trello.lists.find(list => list.id === d.idList).name))
    .filter(d => /([^-]*)-(.*)\[([.0-9]+).*\]/.exec(d.name))
    .filter(d => Object.keys(transform_map).includes(d.name.split('-')[0].trim()))
    .map(card => {
       const new_name = card.name.replace(/([^-]*)-(.*)\[([.0-9]+).*\]/, (m, name, task, time) => (transform_map[name.trim()] || name.trim()) + ' - ' + task.trim() + ' [' + time + 'j]')
       console.log("Change "+ trello.lists.find(list => list.id === card.idList).name +" : " + card.name +" => "+ new_name)
       axios.put(encodeURI('https://api.trello.com/1/cards/' + card.id + '?name=' + new_name + '&key=' + key_lga + '&token=' + token_lga))
    })
})
