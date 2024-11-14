import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CienciaDeDatosListComponent } from './ciencia-de-datos-list.component';

describe('CienciaDeDatosListComponent', () => {
  let component: CienciaDeDatosListComponent;
  let fixture: ComponentFixture<CienciaDeDatosListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciaDeDatosListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CienciaDeDatosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
