import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface ProductoGestion {
  id: string;
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-portal-panaderias',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './portal-panaderias.html',
})
export class PortalPanaderiasComponent {
  nombre = 'Horno del Centro';
  zona = 'Centro de Getafe';
  descripcion = 'Pan y bollería de elaboración tradicional.';
  editandoPerfil = false;
  registroAbierto = false;
  nombreNuevo = '';
  zonaNueva = '';
  promocionActiva = false;
  textoPromocion = '10 % de descuento en bollería a partir de las 17:00';
  opcionesDestacadoAbiertas = false;
  aviso = '';

  productos: ProductoGestion[] = [
    { id: 'bollo', nombre: 'Bollo de chocolate', precio: 2.8, disponible: true },
    { id: 'galleta', nombre: 'Galleta de avena y chocolate', precio: 1.9, disponible: true },
    { id: 'croissant', nombre: 'Croissant de chocolate', precio: 2.5, disponible: false }
  ];

  get productosVisibles(): number {
    return this.productos.filter(producto => producto.disponible).length;
  }

  guardarPerfil(): void {
    this.editandoPerfil = false;
    this.aviso = 'Cambios aplicados a esta vista de demostración.';
  }

  alternarProducto(producto: ProductoGestion): void {
    producto.disponible = !producto.disponible;
    this.aviso = `${producto.nombre}: ${producto.disponible ? 'visible' : 'pausado'} en el buscador.`;
  }

  guardarPromocion(): void {
    this.aviso = this.promocionActiva
      ? 'Promoción activada en esta vista de demostración.'
      : 'Promoción pausada.';
  }

  registrarPanaderia(): void {
    const nombre = this.nombreNuevo.trim();
    const zona = this.zonaNueva.trim();
    if (!nombre || !zona) return;

    this.nombre = nombre;
    this.zona = zona;
    this.descripcion = 'Completa la descripción de tu panadería.';
    this.registroAbierto = false;
    this.nombreNuevo = '';
    this.zonaNueva = '';
    this.aviso = 'Perfil de demostración creado para esta sesión.';
  }
}
