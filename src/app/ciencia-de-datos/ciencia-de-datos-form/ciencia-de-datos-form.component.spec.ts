import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CienciaDatosFormComponent } from './ciencia-de-datos-form.component'; // Cambia el nombre aquí

describe('CienciaDatosFormComponent', () => {
  let component: CienciaDatosFormComponent;
  let fixture: ComponentFixture<CienciaDatosFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciaDatosFormComponent ],  // Usa el nombre correcto del componente
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CienciaDatosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
