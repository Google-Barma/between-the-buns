import { useState } from 'react';

export default function useOrderConfirm() {
  const [openOrderConfirm, setOpenOrderConfirm] = useState(false);

  return { openOrderConfirm, setOpenOrderConfirm };
}
