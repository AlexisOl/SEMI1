import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from "../../utils/header/header.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PoemasServicioService } from '../services/poemas-servicio.service';
import { poemas } from '../../models/poemas';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { DatePipe } from '@angular/common';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';
@Component({
  selector: 'app-vista-global',
  imports: [HeaderComponent, SplitterModule,DatePipe, ScrollPanelModule, CardModule, ButtonModule, PanelModule, PaginatorModule, DialogModule, FileUploadModule],
  templateUrl: './vista-global.component.html',
  styleUrl: './vista-global.component.css',
      styles: [ `:host ::ng-deep {
    .p-scrollpanel {
        &.custombar {
            .p-scrollpanel-bar {
                background-color: var(--p-primary-color);
            }
        }
    }
}`
    ],
})
export class VistaGlobalComponent implements OnInit{

    first: number = 0;
    rows: number = 6;
    paginatedItems: any[] = [];
    items:poemas[] = []
    poemasServicio = inject(PoemasServicioService)
    visible: boolean = false
    poemaSeleccionado: any;


  
    onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    this.updatePaginatedItems();

    }

      ngOnInit() {
      this.poemasServicio.obtenerBodegas().subscribe(
      (valores) => {
        console.log(valores);
        this.items = valores
        this.updatePaginatedItems();



      }
    )
  }


 showDialog(item: any) {
        this.visible = true;
        console.log(item);
        
        this.poemaSeleccionado = item ? item: null


        this.incrementarVisita(item? item.id:0)
  }
  updatePaginatedItems() {
    this.paginatedItems = this.items.slice(this.first, this.first + this.rows);
  }


  incrementarVisita(id: number){
    this.poemasServicio.agreagarPoemaVisitado(id).subscribe(
      (next) => {
        console.log('poema visitado'+ id);
        
      }
    )
  }

}
