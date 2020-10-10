import { useState, useEffect } from 'react'
import getProducts from '../services/getProducts'

// 根据传入的参数来获取对应的产品
function getProductData(type) {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts(type);
      setData(result.data.data);
    }

    // 也可以写成 IIFE, 不执行或者不写成 IIFE 就会返回 promise 对象
    // 然而 useEffect 必须返回 undefined 或者一个函数
    fetchData();  
  }, [type && []]);  // 有传参数依赖项就是参数，没有就空数组

  return data;
}


export default getProductData;