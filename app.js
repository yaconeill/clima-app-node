const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${ direccion } es de ${ temp } °C`;
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`;
    }
}

getInfo(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.log(e));


// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));

// clima.getClima(28.4636296, -16.2518467)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));