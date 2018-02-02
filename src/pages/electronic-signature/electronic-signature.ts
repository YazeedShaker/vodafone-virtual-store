import { Component } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";
import { CertificatePage } from '../certificate/certificate';
import { ChoosePlanPage } from '../choose-plan/choose-plan';

@Component({
    templateUrl: 'electronic-signature.html',
    styleUrls: ['/electronic-signature.scss']
})
export class ElectronicSignaturePage {

    constructor(private navCtrl: NavController, private loading: LoadingController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(CertificatePage);
    }

    private goToNextPage() {
        let loader = this.loading.create({
            content: 'Scanning Your FINGERPRINT...',
            enableBackdropDismiss: false,
            duration: 3000,
        })
        loader.present().then(() => {
            setTimeout(() => {
                this.navCtrl.setRoot(ChoosePlanPage);
            }, 3000);
        });
    }
}