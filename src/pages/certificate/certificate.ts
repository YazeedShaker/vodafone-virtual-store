import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { UserDataPage } from '../user-data/user-data';
import { ElectronicSignaturePage } from '../electronic-signature/electronic-signature';

@Component({
    templateUrl: 'certificate.html',
    styleUrls: ['/certificate.scss']
})
export class CertificatePage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(UserDataPage);
    }

    private goToNextPage() {
        this.navCtrl.setRoot(ElectronicSignaturePage);
    }
}