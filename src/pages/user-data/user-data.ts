import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { VoiceSimPage } from '../voice-sim/voice-sim';
import { CertificatePage } from '../certificate/certificate';

@Component({
    templateUrl: 'user-data.html',
    styleUrls: ['/user-data.scss']
})
export class UserDataPage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(VoiceSimPage);
    }

    private goToNextPage() {
        this.navCtrl.setRoot(CertificatePage);
    }
}