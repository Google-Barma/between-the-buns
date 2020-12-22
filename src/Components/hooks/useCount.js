import { useState } from 'react';

export default function useCount() {
  const [count, setCount] = useState(1);

  const handleChangeCount = event => setCount(event.target.value);

  return { count, setCount, handleChangeCount };
}
