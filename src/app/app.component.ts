import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { HelpCenterPage } from '../pages/help-center/help-center';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  @ViewChild(Nav) nav: NavController;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  public callHelp() {
    this.nav.setRoot(HelpCenterPage);
  }

  ngOnInit() {
    let alert = this.alertCtrl.create({
      title: 'Language <br> اللغة',
      message: `Please select your language <br> من فضلك اختر اللغة`,
      enableBackdropDismiss: false,
      inputs: [
        {
          type: 'radio',
          label: 'English',
          value: 'en'
        },
        {
          type: 'radio',
          label: 'عربي',
          value: 'ar'
        }
      ],
      buttons: [
        {
          text: 'ok  اكمل',
          role: 'Cancel',
          handler: ()=>{alert.dismiss(); return false}
        }
      ]
    })
    alert.present();
  }
}

