import { useEffect, useState } from 'react';

export default function useAuth(authFirebase) {
  const [authentication, setAuthentication] = useState(null);

  const auth = authFirebase();

  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);

  const logOut = () => auth.signOut().catch(err => console.log(err));

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setAuthentication(user);
      } else {
        setAuthentication(null);
      }
    });
  }, [authentication, auth]);

  return { authentication, logIn, logOut };
}
