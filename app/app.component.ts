import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, MenuController, NavController } from '@ionic/angular';

interface Componente{

  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private route:Router, private menu:MenuController,
               public alertController: AlertController,
               public navCtrl: NavController ) {}


  componentes : Componente[] =[
    /* {
      icon: 'paw-outline',
      name: 'Registro', 
      redirecTo: '/registro'
    }, */
    {
      icon: 'videocam-outline', 
      name: 'Peliculas', 
      redirecTo: 'peliculas'
    },
    {
      icon: 'caret-forward-circle-outline',
      name: 'Series',
      redirecTo: 'series'
    },
    
    
  ]

  async salir(){
    const alert = await this.alertController.create({
      header: 'Logout',
      message: '¿Seguro que desea cerrar su cuenta?',
      buttons: [
        {
          text: 'No',
          handler: () => {

          } 
        }, {
          text: 'Si',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    }); 

    await alert.present();
  } 

  
  cuenta(){
    this.route.navigateByUrl("/mi-cuenta");
    this.menu.close();
  }
 

}
