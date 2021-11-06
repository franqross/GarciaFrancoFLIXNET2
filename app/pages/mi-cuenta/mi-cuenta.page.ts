import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';




@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.page.html',
  styleUrls: ['./mi-cuenta.page.scss'],
})
export class MiCuentaPage implements OnInit {

  

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { 

    }


  ngOnInit() {

    var usuario = JSON.parse(localStorage.getItem('usuario'));
    var nombre = usuario.nombre;
    var correo = usuario.correo;
    var apellido = usuario.apellido;
    var pass = usuario.password;
    (<HTMLInputElement>document.getElementById('nombreprueba')).value = nombre;
    (<HTMLInputElement>document.getElementById('correoprueba')).value = correo;
    (<HTMLInputElement>document.getElementById('apellidoprueba')).value = apellido;
    (<HTMLInputElement>document.getElementById('passprueba')).value = pass;
    

    
  }

  async cambiar(){
   
    var nombrevalor = (<HTMLInputElement>document.getElementById('nombreprueba')).value;
    var correovalor = (<HTMLInputElement>document.getElementById('correoprueba')).value;
    var apellidovalor = (<HTMLInputElement>document.getElementById('apellidoprueba')).value;
    var passvalor = (<HTMLInputElement>document.getElementById('passprueba')).value;
    
    if(nombrevalor!=null){
      const person = {
        nombre: nombrevalor,
        correo: correovalor,
        apellido: apellidovalor,
        password: passvalor,
    }
    
    window.localStorage.setItem('usuario', JSON.stringify(person));
    const alert = await this.alertController.create({
      header: 'Modificado mi rey',
      message: 'tai lito',
      buttons: ['Aceptar']
    }); 
      console.log('Modificado');
      this.navCtrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Hubo un error',
        message: 'Datos incorrectos.',
        buttons: ['Aceptar']
      }); 

      await alert.present();
      return;

    }


}




async borrar(){
  var usuario = JSON.parse(localStorage.getItem('usuario'));
  if(usuario!=null){
    localStorage.clear();
    localStorage.removeItem('ingresado');
    const alert = await this.alertController.create({
      header: 'Borradisimo papu',
      message: 'Erai',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.navigateRoot('login');
  
  
}

}
}