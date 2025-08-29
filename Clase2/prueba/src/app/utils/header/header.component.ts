import { Component, inject } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { PoetasServiceService } from '../../General/services/poetas-service.service';
import { poetas } from '../../models/poemas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule, ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, RouterModule, DialogModule, FileUploadModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
    //valores
    nombre!: string 
    nacionalidad!:number
    archivo!:File


    poetasServicio = inject(PoetasServiceService)


  visible: boolean = false;
  archivos: any[] = [];
  showDialog() {
        this.visible = true;
  }
  onUpload(event: FileUploadEvent) {
    for (let file of event.files) {
      this.archivos.push(file);
      console.log(this.archivos);
      
    }
  }

  registrar(){
    const nuevoPoeta: any = {
      nombre: this.nombre,
      nacionalidad: this.nacionalidad
    }

this.poetasServicio.registrarPoeta(nuevoPoeta, this.archivos[0]).subscribe(
  (next: any) => {
    console.log('Poeta registrado con éxito:', next);
   this.visible = false
  },
  (error:any) => {
    console.error('Error al registrar el poeta:', error);
    this.visible = false
  }
);

  }
}
