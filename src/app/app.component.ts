import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isMobile: boolean = false;

  constructor(private platform: Platform) {
    this.initializeApp();
    window.addEventListener('resize', this.checkPlatform.bind(this));
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.checkPlatform();
    });
  }

  checkPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    console.log('User Agent:', userAgent);

    // Expresiones regulares para detectar dispositivos móviles
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    this.isMobile = isMobileDevice;

    console.log('Is mobile (custom detection):', this.isMobile);
  }






}
