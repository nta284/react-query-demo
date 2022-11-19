import { useState, useEffect } from 'react';
import AxiosRequest from '@utils/api/AxiosRequest';

export default function useFetch(url, callback) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setData(null);
            setError(null);

            try {
                const res = await AxiosRequest().get(url);

                setData(callback ? callback(res.data.data) : res.data.data);
            } catch (err) {
                console.log(err);

                setError("An error occured.");
            }

            setIsLoading(false);
        }

        fetchData();
    }, [])

    return {
        data,
        isLoading,
        error
    }
}