import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { CreditCardPage } from '../credit-card/credit-card';
import { ThanksPage } from '../thanks-page/thanks-page';

@Component({
    templateUrl: 'payment.html',
    styleUrls: ['/payment.scss']
})
export class PaymentPage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(CreditCardPage);
    }

    private goToNextPage() {
        this.navCtrl.setRoot(ThanksPage);
    }

}