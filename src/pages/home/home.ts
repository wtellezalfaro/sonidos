import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES} from "../../data/data.animales";
import { Animal } from "../../interfaces/animal.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo: any;

  constructor(public navCtrl: NavController) 
  {
    this.animales=ANIMALES.splice(0);

  }

  reproducir( animal:Animal)
  {
    console.log(animal);

    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();

    animal.reproduciendo=true;

    setTimeout(()=>animal.reproduciendo=false,animal.duracion*1000);

  }

}
