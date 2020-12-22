import { useState } from 'react';

export default function useCount() {
  const [count, setCount] = useState(1);

  const handleChangeCount = e => setCount(Number(e.target.value));

  return { count, setCount, handleChangeCount };
}
