import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VoiceSimPage } from '../voice-sim/voice-sim';
import { PayBillPage } from '../pay-bill/pay-bill';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  private goToVoiceSim(){
    this.navCtrl.setRoot(VoiceSimPage);
  }

  private goToBillPage(){
    this.navCtrl.setRoot(PayBillPage);
  }

}
