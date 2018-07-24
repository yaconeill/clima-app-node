const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=7997dac3c4b51486ab30fc7cc9b926dc`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}