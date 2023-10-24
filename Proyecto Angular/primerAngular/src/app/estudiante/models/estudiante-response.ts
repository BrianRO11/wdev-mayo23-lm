import { Estudiantes } from "./estudiantes";

export class EstudianteResponse {
    code: number = 0;
    message: string = '';
    data: Estudiantes[]=[];
}
