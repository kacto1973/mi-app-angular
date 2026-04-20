import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() nombre: string = 'Sin nombre';
  @Input() edad: number = 0;
  
  likes: number = 0;

  incrementarLikes(): void {
    this.likes++;
  }
}
