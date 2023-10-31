import { Usuario } from "./usuario";

export class UsuarioResponse {
    code: number = 0;
    message: string = '';
    data: Usuario []=[];
}
