import { useState, useEffect } from 'react';

import {get } from '../../api';
import { formatData } from './utils';

/**
 * Hook to make a request for Boston weather
 * @returns {Object}
 */
function useBostonWeather() {
    const [data, setData] = useState(null);


    useEffect(() => {
        // To not set the data if the component is not mounted.
        let mounted = true;
        if (!data) {

            const getWeather = async() => {
                const result = await get('https://weather-app-serverless.vercel.app/api');
                if (mounted) {
                    setData(result)
                }
            }
            getWeather();
        }
        return () => mounted = false;
    }, [data]);

    const result = data?.parent?.title && formatData(data);

    return {
        data: result,
        isLoading: !data,
    }
}

export default useBostonWeather;