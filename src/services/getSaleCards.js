const APIKey = '9ce5e6b0';

async function getSaleCards() {
  const allUsers = await fetch('https://my.api.mockaroo.com/saleCards.json?key=' + APIKey)
    .then(res => res.json())
  return allUsers;
}

export default getSaleCards;