import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-panader-ia',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './panader-ia.html',
  styleUrls: ['./panader-ia.css']
})
export class PanaderIaComponent {
  consulta = '';

  constructor(private router: Router) {}

  buscar(): void {
    const consulta = this.consulta.trim();
    if (!consulta) return;
    this.router.navigate(['/'], { queryParams: { q: consulta } });
  }

  usarEjemplo(): void {
    this.consulta = 'Quiero una panadería cerca, por menos de 5€ y que los bollos de chocolate sean lo más sanos posibles';
  }
}
