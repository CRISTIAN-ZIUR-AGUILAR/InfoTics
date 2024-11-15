import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-ciencia-de-datos',
  templateUrl: './home-ciencia-de-datos.component.html',
  styleUrls: ['./home-ciencia-de-datos.component.scss']
})
export class HomeCienciaDeDatosComponent {

  constructor(private router: Router) {}

  onInteresadoClick() {
    this.router.navigateByUrl('/ciencia-de-datos/formularios');
  }
}
