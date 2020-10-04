const API = 'http://localhost:5050/api/product';

async function getProducts(method) {
  const data = await fetch(API + method)
                .then(res => res.json());
                
  return data;
}

export default getProducts;