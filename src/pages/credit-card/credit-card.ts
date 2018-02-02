import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { ChoosePlanPage } from '../choose-plan/choose-plan';
import { PaymentPage } from '../payment/payment';

@Component({
    templateUrl: 'credit-card.html',
    styleUrls: ['/credit-card.scss']
})
export class CreditCardPage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(ChoosePlanPage);
    }

    private goToNextPage() {
        this.navCtrl.setRoot(PaymentPage);
    }

}