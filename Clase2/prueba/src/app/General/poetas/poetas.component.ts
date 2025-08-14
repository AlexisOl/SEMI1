import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { HeaderComponent } from '../../utils/header/header.component';
import { PoemasServicioService } from '../services/poemas-servicio.service';
import { PoetasServiceService } from '../services/poetas-service.service';
import { poetas } from '../../models/poemas';

@Component({
  selector: 'app-poetas',
  imports: [HeaderComponent, CardModule, ButtonModule, PanelModule, PaginatorModule],
  templateUrl: './poetas.component.html',
  styleUrl: './poetas.component.css'
})
export class PoetasComponent implements OnInit {

  first: number = 0;
  rows: number = 10;
  paginatedItems: any[] = [];
  items: poetas[] = []
  poetasServicio = inject(PoetasServiceService)

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedItems();

  }

  ngOnInit() {
    this.poetasServicio.obtenerBodegas().subscribe(
      (valores) => {
        console.log(valores);
        this.items = valores
        this.updatePaginatedItems();



      }
    )
  }



  updatePaginatedItems() {
    this.paginatedItems = this.items.slice(this.first, this.first + this.rows);
  }
}
