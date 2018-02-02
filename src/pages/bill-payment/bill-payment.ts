import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ShowBillPage } from '../show-bill/show-bill';
import { BillConfirmationPage } from '../bill-confirmation/bill-confirmation';

@Component({
    templateUrl: 'bill-payment.html',
    styleUrls: ['/bill-payment.scss']
})
export class BillPaymentPage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(ShowBillPage)
    }

    private goToNextPage() {
        this.navCtrl.setRoot(BillConfirmationPage);
    }

}