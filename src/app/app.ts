import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from './tarjeta.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-app');
}
