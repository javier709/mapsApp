import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsRoutingModule } from './maps-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MiniMapComponent,
    SideMenuComponent,
    MapsRoutingModule     //Importar el routingModule
  ]
})
export class MapsModule { }
