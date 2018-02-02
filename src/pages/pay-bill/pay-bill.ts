import { Component } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";
import { HomePage } from '../home/home';
import { ShowBillPage } from '../show-bill/show-bill';

@Component({
    templateUrl: 'pay-bill.html',
    styleUrls: ['/pay-bill.scss']
})
export class PayBillPage {

    constructor(private navCtrl: NavController, private loading: LoadingController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(HomePage)
    }

    private goToNextPage() {
        let loader = this.loading.create({
            content: 'Validating Phone Number...',
            enableBackdropDismiss: false,
            duration: 3000,
        })
        loader.present().then(() => {
            setTimeout(() => {
                this.navCtrl.setRoot(ShowBillPage);
            }, 3000);
        });
    }

}