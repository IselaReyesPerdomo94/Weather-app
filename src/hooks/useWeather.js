import { useState, useEffect } from 'react';

import {get } from '../api';


function useWeather() {
    const [data, setData] = useState(null);
    const getWeather = async() => {
        const result = await get('https://www.metaweather.com/api/location/2367105/')
        console.log(result)
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