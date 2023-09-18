import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
    photoCover: string = "https://i.stack.imgur.com/y9DpT.jpg"
    photoAlt: string = "placeholder"
    cardTitle: string = "Saiu a nova versão do angular! CU"
    cardDescription: String = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique tenetur eaque ad commodi! "

    constructor(){}

}
