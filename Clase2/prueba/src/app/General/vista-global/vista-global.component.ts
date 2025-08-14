import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../utils/header/header.component";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
@Component({
  selector: 'app-vista-global',
  imports: [HeaderComponent, CardModule, ButtonModule, PanelModule, PaginatorModule],
  templateUrl: './vista-global.component.html',
  styleUrl: './vista-global.component.css'
})
export class VistaGlobalComponent implements OnInit{

    first: number = 0;
    rows: number = 10;
    paginatedItems: number[] = [];
    items = Array.from({ length: 15 }, (_, i) => i + 1);

    onPageChange(event: any) {
        this.first = event.first;
        this.rows = event.rows;
    this.updatePaginatedItems();

    }

      ngOnInit() {
    this.updatePaginatedItems();
  }



  updatePaginatedItems() {
    this.paginatedItems = this.items.slice(this.first, this.first + this.rows);
  }

}
