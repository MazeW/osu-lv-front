import { useState, useEffect } from 'react';
import axios from 'axios';
import { ScoresResponse } from '../types/rankings';
const apiUrl = import.meta.env.VITE_API_ENDPOINT_URL || 'http://localhost:3069';

export function useScores() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [scores, setScores] = useState<ScoresResponse | null>(null);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const response = await axios.get<ScoresResponse>(
                    `${apiUrl}/api/bestScores`,
                    {
                        headers: {
                            Accept: 'application/json'
                        },
                    }
                );
                setScores(response.data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch rankings'));
            } finally {
                setLoading(false);
            }
        };

        fetchScores();
    }, []);

    return { scores, loading, error };
}