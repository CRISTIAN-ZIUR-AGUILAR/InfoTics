import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCienciaDeDatosComponent } from './home-ciencia-de-datos.component';

describe('HomeCienciaDeDatosComponent', () => {
  let component: HomeCienciaDeDatosComponent;
  let fixture: ComponentFixture<HomeCienciaDeDatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCienciaDeDatosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCienciaDeDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
