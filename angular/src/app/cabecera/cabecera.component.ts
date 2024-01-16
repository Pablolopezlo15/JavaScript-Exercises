import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    console.log('Pablo Cabecera');
  }
}
