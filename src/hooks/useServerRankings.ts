import { useState, useEffect } from 'react';
import axios from 'axios';
import { RankingsResponse } from '../types/rankings';
const apiUrl = import.meta.env.VITE_API_ENDPOINT_URL || 'http://localhost:3069';

export function useServerRankings() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [rankings, setRankings] = useState<RankingsResponse | null>(null);

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await axios.get<RankingsResponse>(
          `${apiUrl}/api/userRankings`,
          {
            headers: {
              Accept: 'application/json'
            },
          }
        );
        setRankings(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch rankings'));
      } finally {
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  return { rankings, loading, error };
}