import { useEffect, useState } from 'react';

export default function useAuth(authFirebase) {
  const [authentication, setauthentication] = useState(null);

  const provider = 'google';

  const login = () => provider;

  useEffect(() => {}, [authentication]);

  return { authentication, login };
}
