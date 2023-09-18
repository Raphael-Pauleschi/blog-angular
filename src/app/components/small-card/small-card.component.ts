import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: [
    './small-card.component.css',
    './small-card.responsive.component.css',
  ],
})
export class SmallCardComponent {
  @Input() photoCover: string = 'https://i.stack.imgur.com/y9DpT.jpg';
  @Input() photoAlt: string = 'placeholder';
  @Input() cardTitle: string = 'Saiu a nova versão do angular! UAU';

  constructor() {}
}
