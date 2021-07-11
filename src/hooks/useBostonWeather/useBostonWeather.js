import { useState, useEffect } from 'react';

import {get } from '../../api';
import { formatData } from './utils';

function useBostonWeather() {
    const [data, setData] = useState(null);

    const getWeather = async() => {
        const result = await get('https://weather-app-serverless.vercel.app/api');
        setData(result)
    }

    useEffect(() => {
        if (!data) {
            getWeather();
        }
    }, []);

    const result = data?.parent?.title && formatData(data);

    return {
        data: result,
        isLoading: !data,
    }
}

export default useBostonWeather;