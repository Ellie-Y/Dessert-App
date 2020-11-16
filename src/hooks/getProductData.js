import { useState, useEffect } from 'react'
import getProducts from '../services/getProducts'

// 使用 hook 的函数名必须大写
function GetProductData(type) {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    let isUnmounted = false; // 设置一个锁来决定是否渲染组件

    const fetchData = async () => {
      const result = await getProducts(type);
      if (!isUnmounted) {
        setData(result.data);
      }
    };

    // 也可以写成 IIFE, 不执行或者不写成 IIFE 就会返回 promise 对象
    // 然而 useEffect 必须返回 undefined 或者一个函数
    fetchData();

    return () => (isUnmounted = !isUnmounted);
  }, []); //* 不能使用 type 作为参数，因为每次调用时的参数都不一样，useEffect 依赖它来判断是否重新渲染，所以会导致无限循环

  return data;
}


export default GetProductData;