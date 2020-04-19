import axios, {AxiosResponse} from 'axios';
import {key, LOCAL_URL} from "../costanti";
import {LANGCODES} from "../costanti/original";
import {ApiInterface, Coord} from "..";

type unita = 'metric' | 'imperial';

export class ApiTemp {
    // url:string = `${LOCAL_URL}q=Milan,it&units=metric&appid=${key}&lang=it`;
    private lang: string | null = null;
    private units: unita = "metric";
    private keypers = '&appid=' + key;

    constructor(
        private Api_key: string,
        units: unita | null = null,
        lang: string | null = null
    ) {
        this.configLingua(lang);
        this.configUnit(units);
    }

    private configLingua(lang: string | null) {
        let lingua = LANGCODES.find(x => x.code === lang);
        lingua ? this.lang = lingua.code : this.lang = 'it';
    }

    private configUnit(unit: unita | null) {
        if (unit === null) {
            this.units = 'metric';
        } else {
            this.units = unit;
        }
    }



    /**
     * @description Inserire nome del paese a cercare e codice paese es:'it'
     * @return Promise:ApiInterface
     * @param nome
     * @param codPaese
     */
    buscarPorNome(nome: string, codPaese: string = 'it'):Promise<ApiInterface> {
        let paese = `q=${nome},`;
        let lang = `lang=${this.lang}`;
        return axios.get<ApiInterface>(`${this.Api_key}${paese}${codPaese}&$unit=${this.units}&appid=${key}&${lang}`)
            .then(response => {
                return response.data;
            })
            .catch(error => error.message);
    }


    buscarPerCoordinate(cordinate: Coord):Promise<ApiInterface> {
        // const urlCod = `${LOCAL_URL}lat=-12.0366201&lon=-77.0642346&units=metric&appid=${key}&lang=it`;
        if (cordinate.lat === null || cordinate.lon === null || cordinate.lat === undefined || cordinate.lon === undefined) {
            cordinate = {lat: 12, lon: 77}
        }
        let coor: string = 'lat=' + cordinate.lat + '&lon=' + cordinate.lon
        let unit = '&units=' + this.units;
        let lang = '&lang=' + this.lang;
        return axios.get<ApiInterface>(`${this.Api_key}${coor}${unit}${this.keypers}${lang}`)
            .then( response => {
                return response.data;
            })
            .catch(error => error.message)
    }

    buscarPerCosicePostale(code: number | string, paese:string = 'it'):Promise<ApiInterface> {
        // const urlCodeZip =`${LOCAL_URL}zip=10022,it&units=metric&appid=${key}&lang=it`

        let zip = 'zip=' + code + ',' + paese;
        let unit = '&units=' + this.units;
        let lang = '&lang=' + this.lang;

        return axios.get(`${this.Api_key}${zip}${unit}${this.keypers}${lang}`)
            .then(response => response.data)
            .catch(error => error.message);
    }
}
