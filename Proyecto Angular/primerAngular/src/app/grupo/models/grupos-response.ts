import {Grupos} from "./grupos"

export class GruposResponse {
    code: number = 0;
    message: string = '';
    data: Grupos[]=[];
}
