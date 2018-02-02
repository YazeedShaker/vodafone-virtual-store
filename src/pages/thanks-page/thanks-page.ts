import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'thanks-page.html',
  styleUrls: ['/thanks-page.scss']
})
export class ThanksPage {

  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.navCtrl.setRoot(HomePage);
    }, 3000);
  }

}
