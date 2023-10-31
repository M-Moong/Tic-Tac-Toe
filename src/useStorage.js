import { useEffect, useState } from 'react';

const read = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const write = (key, newData) => {
  localStorage.setItem(key, JSON.stringify(newData));
};

export default function useStorage(key, initialValue) {
  if (!key) {
    throw new Error('useStorage 훅을 사용하려면 `key` 설정이 필요합니다.');
  }

  const memoizedData = read(key);

  const [data, setData] = useState(memoizedData ? memoizedData : initialValue);

  useEffect(() => {
    write(key, data);
  }, [key, data]);

  return [data, setData];
}
