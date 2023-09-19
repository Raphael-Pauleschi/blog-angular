import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input() photoCover: string =
    'https://scarletviolet.pokemon.com/_images/news/aug_08_23/p05_01.jpg';
  @Input() contentTitle: string = 'Meu artigo';
  @Input() contentDescription: string = 'Opa mundo, vai bem? eu não';
}
