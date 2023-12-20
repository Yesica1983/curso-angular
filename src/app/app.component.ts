import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NabvarComponent } from "./components/nabvar/nabvar.component";
import { TareasComponent } from "./components/tareas/tareas.component";
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NabvarComponent, TareasComponent,FormsModule],
})
export class AppComponent {
  title = 'tareas2024';
}


