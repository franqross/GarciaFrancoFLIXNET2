import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PelisapiService } from '../../services/pelisapi.service';
import { Pelicula } from '../interface/interfaces';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 
  pelisRecientes: Pelicula [] = [];

  constructor(private menuController: MenuController,
    private pelisapiService: PelisapiService) { }

  ngOnInit() {

    this.pelisapiService.getCartelera()
      .subscribe( resp =>{

        console.log('Resp', resp);
        this.pelisRecientes = resp.results;
      });
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

  
  


}
