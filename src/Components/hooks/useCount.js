import { useState } from 'react';

export default function useCount(startCount) {
  const [count, setCount] = useState(startCount || 1);

  const handleChangeCount = e => setCount(Number(e.target.value));

  return { count, setCount, handleChangeCount };
}
