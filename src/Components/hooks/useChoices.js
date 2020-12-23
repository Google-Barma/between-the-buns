import { useState } from 'react';

export default function useChoices() {
  const [choice, setChoice] = useState();

  function changeChoices(e) {
    setChoice(e.target.value);
  }
  return { choice, changeChoices };
}
