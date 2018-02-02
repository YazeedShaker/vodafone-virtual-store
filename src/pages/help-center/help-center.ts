import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { HomePage } from '../home/home';

@Component({
    templateUrl: 'help-center.html',
    styleUrls: ['/help-center.scss']
})
export class HelpCenterPage {

    constructor(private navCtrl: NavController) { }

    private goToPreviousPage() {
        this.navCtrl.setRoot(HomePage);
    }

}