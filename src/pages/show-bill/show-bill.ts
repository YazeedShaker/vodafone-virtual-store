import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { PayBillPage } from '../pay-bill/pay-bill';
import { BillPaymentPage } from '../bill-payment/bill-payment';

@Component({
    templateUrl: 'show-bill.html',
    styleUrls: ['/show-bill.scss']
})
export class ShowBillPage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(PayBillPage)
    }

    private goToNextPage() {
        this.navCtrl.setRoot(BillPaymentPage);
    }

}