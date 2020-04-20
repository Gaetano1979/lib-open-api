import { ApiInterface, Coord } from "..";
declare type unita = 'metric' | 'imperial';
export declare class ApiTemp {
    private Api_key;
    private lang;
    private units;
    private keypers;
    constructor(Api_key: string, units?: unita | null, lang?: string | null);
    private configLingua;
    private configUnit;
    buscarPorNome(nome: string, codPaese?: string): Promise<ApiInterface>;
    buscarPerCoordinate(cordinate: Coord): Promise<ApiInterface>;
    buscarPerCosicePostale(code: number | string, paese?: string): Promise<ApiInterface>;
}
export {};
//# sourceMappingURL=index.d.ts.map