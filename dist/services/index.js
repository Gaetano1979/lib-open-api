"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const costanti_1 = require("../costanti");
const original_1 = require("../costanti/original");
class ApiTemp {
    constructor(Api_key, units = null, lang = null) {
        this.Api_key = Api_key;
        this.lang = null;
        this.units = "metric";
        this.keypers = '&appid=' + costanti_1.key;
        this.configLingua(lang);
        this.configUnit(units);
    }
    configLingua(lang) {
        let lingua = original_1.LANGCODES.find(x => x.code === lang);
        lingua ? this.lang = lingua.code : this.lang = 'it';
    }
    configUnit(unit) {
        if (unit === null) {
            this.units = 'metric';
        }
        else {
            this.units = unit;
        }
    }
    buscarPorNome(nome, codPaese = 'it') {
        let paese = `q=${nome},`;
        let lang = `lang=${this.lang}`;
        return axios_1.default.get(`${costanti_1.LOCAL_URL}${paese}${codPaese}&$unit=${this.units}&appid=${this.Api_key}&${lang}`)
            .then(response => {
            return response.data;
        })
            .catch(error => error.message);
    }
    buscarPerCoordinate(cordinate) {
        if (cordinate.lat === null || cordinate.lon === null || cordinate.lat === undefined || cordinate.lon === undefined) {
            cordinate = { lat: 12, lon: 77 };
        }
        let coor = 'lat=' + cordinate.lat + '&lon=' + cordinate.lon;
        let unit = '&units=' + this.units;
        let lang = '&lang=' + this.lang;
        return axios_1.default.get(`${costanti_1.LOCAL_URL}${coor}${unit}&appid=${this.Api_key}&${lang}`)
            .then(response => {
            return response.data;
        })
            .catch(error => error.message);
    }
    buscarPerCosicePostale(code, paese = 'it') {
        let zip = 'zip=' + code + ',' + paese;
        let unit = '&units=' + this.units;
        let lang = '&lang=' + this.lang;
        return axios_1.default.get(`${costanti_1.LOCAL_URL}${zip}${unit}&appid=${this.Api_key}&${lang}`)
            .then(response => response.data)
            .catch(error => error.message);
    }
}
exports.ApiTemp = ApiTemp;
//# sourceMappingURL=index.js.map