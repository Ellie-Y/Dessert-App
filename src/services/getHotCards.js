import fetchData from './fetchData'

function getHotCards() {
  return fetchData('https://my.api.mockaroo.com/hotDisplay.json?');
}

export default getHotCards;