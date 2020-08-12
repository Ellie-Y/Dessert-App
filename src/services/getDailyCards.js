import fetchData from './fetchData'


function getDailyCards() {
  return fetchData('https://my.api.mockaroo.com/dailyShare.json?');
}


export default getDailyCards