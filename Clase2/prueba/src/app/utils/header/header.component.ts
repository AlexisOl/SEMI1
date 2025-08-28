import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-header',
  imports: [ToolbarModule, ButtonModule, IconFieldModule, InputIconModule, RouterModule, DialogModule, FileUploadModule],

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
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
}
