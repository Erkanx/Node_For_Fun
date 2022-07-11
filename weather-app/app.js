const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=728ade2df841267c2c814c8212d69c89&query=37.8267,-122.4233&units=f';

request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log('error in the application');
    } else {
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. It feels like ' + response.body.current.feelslike +  ' degress out.' );
    }

})

// Geocoding

const geoCodeUrl = 'http://api.positionstack.com/v1/forward?access_key=0f9e549c7d94634fd5137eda983e076a&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC';

request({url: geoCodeUrl, json: true}, (error, response) => {

    if(error){
        console.log('An error occured with the Weather App');
    } else if (response.body.error) {
        console.long('An error in the body');
    } else{
        console.log('latitude: ' + response.body.data[0].latitude + ' longitude: ' + response.body.data[0].longitude);
    }   

})