import fetchData from './fetchData'


function getDailyCards() {
  return fetchData('dailyItems');
}


export default getDailyCards