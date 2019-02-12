import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  private pessoa = [{nome:"Jonatas",
                    email:"jonatas@gmail.com",
                    curso:"senac",
                    img:"../../assets/imgs/logo.png"},
                    {nome:"Rafaela",
                    email:"rafaela@gmail.com",
                    curso:"odonto",
                    img:"../../assets/imgs/logo.png"}
                  ]

  constructor(public navCtrl: NavController) {

  }

}
