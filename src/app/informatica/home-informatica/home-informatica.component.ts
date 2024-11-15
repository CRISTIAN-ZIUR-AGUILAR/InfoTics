import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-informatica',
  templateUrl: './home-informatica.component.html',
  styleUrls: ['./home-informatica.component.scss']
})
export class HomeInformaticaComponent {

  constructor(private router: Router) {}
  onInteresadoClick(){
    this.router.navigateByUrl('/informatica/formularios');
    }
}
