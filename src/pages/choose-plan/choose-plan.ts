import { Component } from '@angular/core';
import { NavController, AlertController } from "ionic-angular";
import { ElectronicSignaturePage } from '../electronic-signature/electronic-signature';
import { CreditCardPage } from '../credit-card/credit-card';

@Component({
    templateUrl: 'choose-plan.html',
    styleUrls: ['/choose-plan.scss']
})
export class ChoosePlanPage {

    constructor(private navCtrl: NavController, private alertCtrl: AlertController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(ElectronicSignaturePage);
    }

    private goToNextPage() {
        this.navCtrl.setRoot(CreditCardPage);
    }

    private showDescription(){
        let alert = this.alertCtrl.create({
            title: 'Plan Description',
            message: '<br><br>Your plan include these items <br> <ul><li>item one</li><li>item two</li><li>item three</li></ul>',
            buttons: [
                {
                    text: 'OK',
                    role: 'Cancel',
                    handler: ()=>{alert.dismiss(); return false}
                }
            ]
        })
        alert.present();
        console.log("hello, alert");
    }
}