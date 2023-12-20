import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[]=[];
  nombreTarea:string='';

  constructor() {}
  ngOnInit(): void {
  }

  AgregarTarea(){

    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado:false

    }
    this.listaTareas.push(tarea);
    this.nombreTarea='';
  }

  eliminar(i:number){

    this.listaTareas.splice(i,1);
  }
  
  actualizartarea(tarea:
    Tarea, i:number)
  
  {
    this.listaTareas[i].estado = !tarea.estado;
    }
  

  }
  

    

    

  




    

  


    


  
 
  

  



  
    

  








  
  


  


  





