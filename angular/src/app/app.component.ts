import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'; // <--- JavaScript import from Angular


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular';
  nombreusuario = 'Pablo';
  urlImagen = 'https://picsum.photos/200/300';

  ngOnInit(): void {
    console.log('Pablo');
  }

  cambiaTitulo(): void {
    this.title = 'Nuevo título';
  }

  pulsadaTecla(): void {
    console.log("evento tecla pulsada");
    console.log(this.title);
    this.title = '';
  }

}
