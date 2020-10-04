const API = 'https://72t2069lda.execute-api.us-east-1.amazonaws.com/dev/';

async function fetchData(method, limit) {
  const data = await fetch(API + method)
              .then((res) => res.json());
  return data;
}

export default fetchData;