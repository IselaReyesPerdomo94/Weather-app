# Boston Weather app 

This application use [MetaWeather API](https://www.metaweather.com/api/) to show the weather for a location in this case: Boston.
All the requirements for this excercise are in Excercise.md file.

## Run this project
```
git clone https://github.com/IselaReyesPerdomo94/Weather-app.git
npm install
npm start
The project can be seen in localhost:8080
```

You can also run the test with:
`npm test`

## Preview
![](https://raw.githubusercontent.com/IselaReyesPerdomo94/Weather-app/main/images/preview.jpg?token=ALRINACXUDHSVPWXUK7DGZTA5OU2U)

## See live
https://weather-app-lilac-psi.vercel.app/

## Challenges
I faced cors issues with the weather API, to solve it I created another [repository](https://github.com/IselaReyesPerdomo94/weather-app-serverless) to expose a serverles function. This function consumes the metaweather api using [cross-fetch](https://www.npmjs.com/package/cross-fetch) and a function take it from [vercel serverles function](https://vercel.com/support/articles/how-to-enable-cors?query=cors#understanding-cors) called allowCors.

With this implementation I could by pass the cors issue.

Other Challenges that I faced where:
- Updating libraries
- Changing the webpack configuration
- Adding jest configuration and mock server worker configuration to run the test. 
- Fix babel config problems.

Most of the challenges were new to me but I'm glad that I got it through (thanks google).
