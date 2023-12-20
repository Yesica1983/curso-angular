export class Tarea{
    nombre:string;
    estado:boolean;
  static estado: any;

    constructor( n:string, e:boolean){
        this.estado=e;
        this.nombre=n;
    }

}
    