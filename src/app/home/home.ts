import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
  kcal: number;
  azucares: number;
  grasasSaturadas: number;
  proteinas: number;
  fibra: number;
  sal: number;
  clasificacion: 'A' | 'B' | 'C' | 'D' | 'E';
  puntuacionSalud: number;
  alergenos: string[];
}

interface Panaderia {
  id: string;
  nombre: string;
  zona: string;
  distanciaKm: number;
  descripcion: string;
  productos: Producto[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  consulta = '';
  consultaAplicada = '';
  presupuestoMaximo: number | null = 5;
  radioKm = 3;
  priorizarSaludable = false;
  ordenarPor: 'distancia' | 'salud' | 'precio' = 'distancia';
  terminosProducto: string[] = [];

  panaderias: Panaderia[] = [
    {
      id: 'centro',
      nombre: 'Horno del Centro',
      zona: 'Centro de Getafe',
      distanciaKm: 0.6,
      descripcion: 'Pan y bollería de elaboración tradicional.',
      productos: [
        {
          id: 'centro-bollo', nombre: 'Bollo de chocolate', precio: 2.8, imagen: '/imagenes/bollo-chocolate.webp', categoria: 'Bollería',
          kcal: 355, azucares: 19, grasasSaturadas: 6.1, proteinas: 6, fibra: 3.8, sal: 0.45, clasificacion: 'C', puntuacionSalud: 3,
          alergenos: ['Gluten', 'Leche', 'Huevo']
        },
        {
          id: 'centro-galleta', nombre: 'Galleta de avena y chocolate', precio: 1.9, imagen: '/imagenes/galletas-chocolate.webp', categoria: 'Galletas',
          kcal: 390, azucares: 16, grasasSaturadas: 4, proteinas: 7, fibra: 7, sal: 0.35, clasificacion: 'B', puntuacionSalud: 2,
          alergenos: ['Gluten', 'Avena', 'Leche']
        },
        {
          id: 'centro-croissant', nombre: 'Croissant de chocolate', precio: 2.5, imagen: '/imagenes/croissant-chocolate.webp', categoria: 'Bollería',
          kcal: 410, azucares: 20, grasasSaturadas: 10, proteinas: 6, fibra: 2, sal: 0.8, clasificacion: 'D', puntuacionSalud: 4,
          alergenos: ['Gluten', 'Leche', 'Huevo']
        }
      ]
    },
    {
      id: 'miga',
      nombre: 'Miga Artesana',
      zona: 'Juan de la Cierva',
      distanciaKm: 1.2,
      descripcion: 'Opciones clásicas y algunas recetas con avena.',
      productos: [
        {
          id: 'miga-bollo', nombre: 'Bollo de chocolate', precio: 3.1, imagen: '/imagenes/bollo-chocolate.webp', categoria: 'Bollería',
          kcal: 325, azucares: 14, grasasSaturadas: 3.8, proteinas: 7, fibra: 4.4, sal: 0.3, clasificacion: 'B', puntuacionSalud: 1,
          alergenos: ['Gluten', 'Leche', 'Huevo']
        },
        {
          id: 'miga-muffin', nombre: 'Muffin de cacao y avena', precio: 2.8, imagen: '/imagenes/bollos.webp', categoria: 'Bollería',
          kcal: 290, azucares: 12, grasasSaturadas: 2.5, proteinas: 7, fibra: 6, sal: 0.28, clasificacion: 'B', puntuacionSalud: 1,
          alergenos: ['Gluten', 'Avena', 'Huevo']
        },
        {
          id: 'miga-galleta', nombre: 'Galleta de avena', precio: 2, imagen: '/imagenes/galletas-avena.png', categoria: 'Galletas',
          kcal: 365, azucares: 13, grasasSaturadas: 3.5, proteinas: 6, fibra: 8, sal: 0.25, clasificacion: 'B', puntuacionSalud: 2,
          alergenos: ['Gluten', 'Avena']
        }
      ]
    },
    {
      id: 'norte',
      nombre: 'Horno del Norte',
      zona: 'Getafe Norte',
      distanciaKm: 1.9,
      descripcion: 'Bollería dulce y galletas para acompañar el café.',
      productos: [
        {
          id: 'norte-bollo', nombre: 'Bollo de chocolate', precio: 2.6, imagen: '/imagenes/bollo-chocolate.webp', categoria: 'Bollería',
          kcal: 375, azucares: 22, grasasSaturadas: 7.2, proteinas: 5.5, fibra: 2.8, sal: 0.6, clasificacion: 'D', puntuacionSalud: 4,
          alergenos: ['Gluten', 'Leche', 'Huevo']
        },
        {
          id: 'norte-fruta', nombre: 'Bollo relleno de fruta', precio: 2.1, imagen: '/imagenes/bollos-frutas.webp', categoria: 'Bollería',
          kcal: 295, azucares: 11, grasasSaturadas: 2.7, proteinas: 5, fibra: 3.5, sal: 0.4, clasificacion: 'B', puntuacionSalud: 2,
          alergenos: ['Gluten', 'Huevo']
        },
        {
          id: 'norte-galleta', nombre: 'Galletas decoradas', precio: 2, imagen: '/imagenes/galletas-decoradas.webp', categoria: 'Galletas',
          kcal: 430, azucares: 26, grasasSaturadas: 8, proteinas: 5, fibra: 2, sal: 0.35, clasificacion: 'E', puntuacionSalud: 5,
          alergenos: ['Gluten', 'Leche', 'Huevo']
        }
      ]
    },
    {
      id: 'margaritas',
      nombre: 'Obrador Las Margaritas',
      zona: 'Las Margaritas',
      distanciaKm: 3.8,
      descripcion: 'Obrador de barrio con variedad de bollos y galletas.',
      productos: [
        {
          id: 'margaritas-bollo', nombre: 'Bollo de chocolate', precio: 2.4, imagen: '/imagenes/bollo-chocolate.webp', categoria: 'Bollería',
          kcal: 360, azucares: 18, grasasSaturadas: 6.5, proteinas: 6, fibra: 3.2, sal: 0.45, clasificacion: 'C', puntuacionSalud: 3,
          alergenos: ['Gluten', 'Leche', 'Huevo']
        },
        {
          id: 'margaritas-galleta', nombre: 'Galleta de avena', precio: 1.7, imagen: '/imagenes/galletas-avena.png', categoria: 'Galletas',
          kcal: 340, azucares: 12, grasasSaturadas: 3.2, proteinas: 6.5, fibra: 7.5, sal: 0.28, clasificacion: 'B', puntuacionSalud: 2,
          alergenos: ['Gluten', 'Avena']
        },
        {
          id: 'margaritas-nata', nombre: 'Bollo de nata y chocolate', precio: 3.5, imagen: '/imagenes/bollos-nata-chocolate.webp', categoria: 'Bollería',
          kcal: 395, azucares: 24, grasasSaturadas: 8.5, proteinas: 5.5, fibra: 2.5, sal: 0.65, clasificacion: 'D', puntuacionSalud: 4,
          alergenos: ['Gluten', 'Leche', 'Huevo']
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const consultaCompartida = params.get('q');
      if (consultaCompartida) {
        this.consulta = consultaCompartida;
        this.buscar();
      }
    });
  }

  get resultados(): { panaderia: Panaderia; productos: Producto[] }[] {
    const resultados = this.panaderias
      .filter(panaderia => panaderia.distanciaKm <= this.radioKm)
      .map(panaderia => {
        let productos = panaderia.productos.filter(producto => {
          const cumplePrecio = this.presupuestoMaximo === null || producto.precio <= this.presupuestoMaximo;
          const textoProducto = this.normalizar(producto.nombre);
          const cumpleProducto = this.terminosProducto.every(termino => textoProducto.includes(termino));
          return cumplePrecio && cumpleProducto;
        });

        if (this.ordenarPor === 'salud' || this.priorizarSaludable) {
          productos = [...productos].sort((a, b) => a.puntuacionSalud - b.puntuacionSalud || a.precio - b.precio);
        } else if (this.ordenarPor === 'precio') {
          productos = [...productos].sort((a, b) => a.precio - b.precio);
        }

        return { panaderia, productos };
      })
      .filter(resultado => resultado.productos.length > 0);

    if (this.ordenarPor === 'salud' || this.priorizarSaludable) {
      resultados.sort((a, b) => a.productos[0].puntuacionSalud - b.productos[0].puntuacionSalud || a.panaderia.distanciaKm - b.panaderia.distanciaKm);
    } else if (this.ordenarPor === 'precio') {
      resultados.sort((a, b) => Math.min(...a.productos.map(p => p.precio)) - Math.min(...b.productos.map(p => p.precio)));
    } else {
      resultados.sort((a, b) => a.panaderia.distanciaKm - b.panaderia.distanciaKm);
    }

    return resultados;
  }

  buscar(): void {
    const texto = this.normalizar(this.consulta);
    this.consultaAplicada = this.consulta.trim();
    this.terminosProducto = [];

    if (texto.includes('bollo') && texto.includes('chocolate')) {
      this.terminosProducto = ['bollo', 'chocolate'];
    } else if (texto.includes('bollo')) {
      this.terminosProducto = ['bollo'];
    } else if (texto.includes('croissant')) {
      this.terminosProducto = ['croissant'];
    } else if (texto.includes('galleta')) {
      this.terminosProducto = ['galleta'];
      if (texto.includes('avena')) this.terminosProducto.push('avena');
      if (texto.includes('chocolate')) this.terminosProducto.push('chocolate');
    } else if (texto.includes('muffin')) {
      this.terminosProducto = ['muffin'];
    } else if (texto.includes('fruta')) {
      this.terminosProducto = ['fruta'];
    } else if (texto.includes('nata')) {
      this.terminosProducto = ['nata'];
    } else if (texto.includes('chocolate')) {
      this.terminosProducto = ['chocolate'];
    } else if (texto.includes('avena')) {
      this.terminosProducto = ['avena'];
    }

    const presupuesto = texto.match(/(?:menos de|hasta|maximo|máximo|por debajo de|presupuesto(?: de)?)\s*(\d+(?:[.,]\d+)?)\s*€?/i);
    if (presupuesto) {
      this.presupuestoMaximo = Number(presupuesto[1].replace(',', '.'));
    }

    if (texto.includes('cerca') || texto.includes('cercana') || texto.includes('cercanas')) {
      this.radioKm = 3;
    }

    if (texto.includes('sano') || texto.includes('saludable') || texto.includes('nutricion') || texto.includes('nutricional')) {
      this.priorizarSaludable = true;
      this.ordenarPor = 'salud';
    }

  }

  probarEjemplo(): void {
    this.consulta = 'Quiero una panadería cerca, por menos de 5€ y que los bollos de chocolate sean lo más sanos posibles';
    this.presupuestoMaximo = 5;
    this.radioKm = 3;
    this.priorizarSaludable = false;
    this.ordenarPor = 'distancia';
    this.buscar();
  }

  limpiarFiltros(): void {
    this.consulta = '';
    this.consultaAplicada = '';
    this.presupuestoMaximo = null;
    this.radioKm = 10;
    this.priorizarSaludable = false;
    this.ordenarPor = 'distancia';
    this.terminosProducto = [];
  }

  precioMinimo(productos: Producto[]): string {
    const precio = Math.min(...productos.map(producto => producto.precio));
    return precio.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  cambiarOrden(orden: 'distancia' | 'salud' | 'precio'): void {
    this.ordenarPor = orden;
    this.priorizarSaludable = orden === 'salud';
  }

  normalizar(texto: string): string {
    return texto.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
