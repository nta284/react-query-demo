import { useState, useEffect } from 'react';
import AxiosRequest from '@utils/api/AxiosRequest';

export default function useFetchToken(url, token, callback) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!token) return;

        const fetchData = async () => {
            setIsLoading(true);
            setData(null);
            setError(null);

            try {
                const res = await AxiosRequest(token).get(url);

                setData(callback ? callback(res.data.data) : res.data.data);
            } catch (err) {
                console.log(err);

                setError("An error occured.");
            }

            setIsLoading(false);
        }

        fetchData();
    }, [token])

    return {
        data,
        isLoading,
        error
    }
}
