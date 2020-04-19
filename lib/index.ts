import axios from "axios";
import {LOCAL_URL,key} from "./costanti";
import {ApiTemp} from "./services";



const url = `${LOCAL_URL}q=Milan,it&units=metric&appid=${key}&lang=it`;
const urlCodeZip =`${LOCAL_URL}zip=10022,it&units=metric&appid=${key}&lang=it`
const urlCod = `${LOCAL_URL}lat=-12.0366201&lon=-77.0642346&units=metric&appid=${key}&lang=it`;

// axios.get(urlCodeZip).then(data => {
//     console.log('ricevo risposta')
//     console.log(data.data);
// }).catch(error => {
//     console.log(error.message);
// });
let p = new ApiTemp(LOCAL_URL,"metric",);

// p.buscarPorNome('carmagnola').then(x => {
//     console.log(x.data);
// }).catch(error => {
// console.log(error.message)
// });
let resp = p.buscarPorNome('carmagnola');
resp.then(console.log).catch(console.warn);
// p.buscarPerCoordinate({lat:-12.5,lon:34}).then((risp) => {
//     console.log(risp.data)
// }).catch(console.log);
// p.buscarPerCosicePostale(10022,'it').then((risp) => {
//     console.log(risp.data)
// }).catch(console.log);

export * from "./services";
export * from "./interfaces/api.interface";

