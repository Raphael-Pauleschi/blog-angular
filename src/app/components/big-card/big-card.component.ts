import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  @Input() photoCover: string = 'https://i.stack.imgur.com/y9DpT.jpg';
  @Input() photoAlt: string = 'placeholder';
  @Input() cardTitle: string = 'Saiu a nova versão do angular! UAU';
  @Input() cardDescription: String =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione similique tenetur eaque ad commodi! ';
  @Input() Id:string="0"
  constructor() {}
}
