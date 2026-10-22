import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dibuja-galleta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dibuja-galleta.html',
  styleUrls: ['./dibuja-galleta.css']
})
export class DibujaGalletaComponent implements AfterViewInit {
  @ViewChild('canvasElement') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D | null = null;
  private dibujando = false;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const contexto = canvas.getContext('2d');
    if (!contexto) return;
    contexto.lineWidth = 3;
    contexto.lineCap = 'round';
    contexto.strokeStyle = '#8B4513';
    this.ctx = contexto;
  }

  iniciarDibujo(event: MouseEvent) {
    if (!this.ctx) return;
    this.dibujando = true;
    this.dibujar(event);
  }

  detenerDibujo() {
    this.dibujando = false;
    this.ctx?.beginPath();
  }

  dibujar(event: MouseEvent) {
    if (!this.dibujando || !this.ctx) return;
    
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  limpiarCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx?.clearRect(0, 0, canvas.width, canvas.height);
  }
}