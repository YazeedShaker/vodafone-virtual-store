import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ShowBillPage } from '../show-bill/show-bill';
import { BillPaymentPage } from '../bill-payment/bill-payment';
import { ThanksPage } from '../thanks-page/thanks-page';

@Component({
    templateUrl: 'bill-confirmation.html',
    styleUrls: ['/bill-confirmation.scss']
})
export class BillConfirmationPage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(BillPaymentPage)
    }

    private goToNextPage() {
        this.navCtrl.setRoot(ThanksPage)
    }

}