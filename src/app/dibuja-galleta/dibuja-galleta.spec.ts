import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DibujaGalletaComponent } from './dibuja-galleta';

describe('DibujaGalletaComponent', () => {
  let component: DibujaGalletaComponent;
  let fixture: ComponentFixture<DibujaGalletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DibujaGalletaComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DibujaGalletaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
