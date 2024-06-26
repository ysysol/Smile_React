import { useState, useEffect } from 'react';
import patientsData from '../data/patients.json'; // Adjust the path based on the file's location

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  condition: string;
  // Add other patient properties as needed
}

export function useFetchPatients() {
  const [data, setData] = useState<Patient[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let didCancelFetch = false;

    const fetchData = async () => {
      try {
        if (!didCancelFetch) {
          // Simulate fetching data from the JSON file
          setData(patientsData);
        }
      } catch (err) {
        if (!didCancelFetch) {
          // Handle unknown error type
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('Something went wrong!');
          }
        }
      } finally {
        if (!didCancelFetch) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      didCancelFetch = true;
    };
  }, []);

  return { data, error, loading };
}
