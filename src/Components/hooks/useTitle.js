import { useEffect } from 'react';

export default function useTitle(openItem) {
  useEffect(() => {
    document.title = openItem ? openItem.name : 'BetweenTheBuns';
  }, [openItem]);
}
