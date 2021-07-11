import { useState, useEffect } from 'react';

import {get } from '../api';


function useWeather() {
    const [data, setData] = useState(null);
    const getWeather = async() => {
        const result = await get('https://weather-app-serverless.vercel.app/api')
        setData(result)
    }
    useEffect(() => {
        if (!data) {
            getWeather();
        }
    }, []);
    return {
        data,
        isLoading: !data,
    }
}

export default useWeather;