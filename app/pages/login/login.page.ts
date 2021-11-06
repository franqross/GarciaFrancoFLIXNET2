import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl, 
          Validators, FormBuilder } from "@angular/forms";
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }


  ngOnInit() {
  }


  async ingresar(){
    var f = this.formularioLogin.value;
    
    
    if(usuario.correo == f.correo && usuario.password == f.password){
      var usuario = JSON.parse(localStorage.getItem('usuario'));
      var nombre = usuario.nombre;
      const alert = await this.alertController.create({
        header: `Bienvenido ${nombre}`,
        message: 'Adelante compita',
        buttons: ['Aceptar']
      }); 
      alert.present();

      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Su correo o contraseña no es correcta.',
        buttons: ['Aceptar']
      }); 

      await alert.present();
      return;

    }




  }

}
