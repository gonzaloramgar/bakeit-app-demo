import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {
  productos = [
    { 
      nombre: 'Croissant de Chocolate', 
      kcal: 350, proteina: '5g', carbohidratos: '40g', gluten: true, celiaco: false, 
      etiquetas: ['Chocolate', 'Gluten'],
      imagen: '/imagenes/croissant-chocolate.webp'
    },
    { 
      nombre: 'Galleta de Avena', 
      kcal: 180, proteina: '4g', carbohidratos: '25g', gluten: false, celiaco: true, 
      etiquetas: ['Celiacos', 'Avena'],
      imagen: '/imagenes/galletas-avena.png'
    }
  ];

  
  filtros = ['Todos', 'Gluten', 'Celiacos', 'Chocolate'];
  filtroActivo = 'Todos';

  setFiltro(filtro: string) {
    this.filtroActivo = filtro;
  }
}