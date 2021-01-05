import { useState, useEffect } from 'react';

export default function useDatabase(db) {
  const [database, setdb] = useState(null);

  useEffect(() => {
    const dbRef = db.ref('goods');
    dbRef.on('value', snapshot => {
      setdb(snapshot.val());
    });
  }, [db]);

  return database;
}
