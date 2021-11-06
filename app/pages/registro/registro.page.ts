import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, 
  Validators, FormBuilder } from "@angular/forms";
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario = {
    nombre:'',
    apellido:'',
    nacimiento:'',
    genero:'',
    email:'',
    password:''
  }

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              public navCtrl: NavController) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'apellido': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confPassword': new FormControl("",Validators.required)

    });


   }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debe llenar todos los datos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }else{

      var usuario = {
        nombre: f.nombre,
        apellido: f.apellido,
        correo: f.correo,
        password: f.password
      }
  
      localStorage.setItem('usuario', JSON.stringify(usuario));
      const alert = await this.alertController.create({
        header: 'Registrado papu',
        message: 'registradisimo mi rey',
        buttons: ['Aceptar']
      });

      alert.present();
      this.navCtrl.navigateRoot('login');
      
    }
    

    

  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }



}
