import { provideRouter } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanaderIaComponent } from './panader-ia';

describe('PanaderIaComponent', () => {
  let component: PanaderIaComponent;
  let fixture: ComponentFixture<PanaderIaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanaderIaComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PanaderIaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
