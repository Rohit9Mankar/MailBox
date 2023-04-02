import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    let errorMessage = "Something went Wrong";
                    if (data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                }
                
                const responseData = await response.json();
                setData(responseData);

            } catch (error) {
                setError(error);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};

export default useFetch;
