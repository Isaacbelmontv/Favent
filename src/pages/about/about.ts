import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({

  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides: Slides;


  lista = [{title:'Pintar Casa', description:'Pintar el interior de una casa de dos pisos para:25/12/2017', tipo:'Presencial',Sueldo:'500'},
  {title:'Jardinero', description:'$Cortar el cesped de 30 mt cuadrados  para:26/12/2017',Tipo:'Presencial',Sueldo:'700'},
  {title:'Tarea Matematicas', description:'Hacer 20 integrales 30/12/2017',Tipo:'No presencial',Sueldo:'150'},
  {title:'Ordenamiento de datos', description:'Ordenar lista de precios de tienda',Tipo:'No presencial',Sueldo:'250'},
  {title:'Lavar coches', description:'Lavar a fondo 3 coches',Tipo:'Precencial',Sueldo:'400'}]

  constructor(public navCtrl: NavController) {

  }


    good() {
      this.slides.slideNext(500);
    }

    bad() {
      this.slides.slidePrev(500);
    }

}
