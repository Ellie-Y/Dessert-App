import fetchData from './fetchData'

function getHotCards() {
  return fetchData('hotItems');
}

export default getHotCards;