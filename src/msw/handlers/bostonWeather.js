import { rest } from 'msw';

const response = {
    consolidated_weather: [{
        id: 5553274720616448,
        weather_state_name: 'Showers',
        weather_state_abbr: 's',
        wind_direction_compass: 'S',
        created: '2021-07-11T22:22:49.379715Z',
        applicable_date: '2021-07-11',
        min_temp: 16.72,
        max_temp: 26.195,
        the_temp: 26.515,
        wind_speed: 3.9620032313316895,
        wind_direction: 189.24316055644115,
        air_pressure: 1019,
        humidity: 65,
        visibility: 10.874927920941701,
        predictability: 73
    }, ],
    time: '',
    sun_rise: '',
    sun_set: '',
    timezone_name: '',
    parent: {
        title: 'Massachusetss',
        location_type: '',
        woeid: 2347580,
        latt_long: '42.184200,-71.718178'
    },
    sources: [{ title: 'BBC', slug: 'bbc', url: 'http://www.bbc.co.uk', crawl_rate: 360 }],
    title: 'Boston',
    location_type: 'City',
    woied: 2347580,
    latt_long: '42.184200,-71.718178',
    timezone: 'US/Eastern',
};

const handler = rest.get(`https://weather-app-serverless.vercel.app/api`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response));
});

export default handler;