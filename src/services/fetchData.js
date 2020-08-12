const APIKey = '9ce5e6b0';

async function fetchData(api) {
  const data = await fetch(api + 'key=' + APIKey)
    .then(res => res.json())
  return data;
}

export default fetchData;