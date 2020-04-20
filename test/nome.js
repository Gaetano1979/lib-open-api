const expe = require('chai').expect;

const ApiService = require('../dist').ApiTemp;

const costanti = require('./costanti');
const url = costanti.APIURLTEST;
const key = costanti.APIKEYTEM;


describe('Ricerca per nome della localita', () => {
    beforeEach(() => {

        const nock = require('nock');
        const respuesta = require('./mocks/nome');
        const query = {
            q: 'London,uk',
            units: 'metric',
            lang: 'it',
            appid: key
        }

        nock(url)
            .log(console.log)
            .get('/data/2.5/weather')
            .query(query)
            .reply(200, respuesta);

    });

    it('should ', function () {

        const api = new ApiService(key);
        api.buscarPorNome('London', 'uk').then(
            result =>
            {
                expe(result.id).to.be.a('number');
            }
        ).catch(error=>{
            console.log(error)
        })

    });

});



