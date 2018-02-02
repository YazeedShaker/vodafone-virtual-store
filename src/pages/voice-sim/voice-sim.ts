import { Component } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";
import { HomePage } from '../home/home';
import { UserDataPage } from '../user-data/user-data';

@Component({
    templateUrl: 'voice-sim.html',
    styleUrls: ['/voice-sim.scss']
})
export class VoiceSimPage{

    constructor(private navCtrl: NavController, private loading: LoadingController){}

    private goToPreviousPage(){
        this.navCtrl.setRoot(HomePage);
    }

    private goToNextPage(){
        let loader = this.loading.create({
            content: 'Scanning Your ID...',
            enableBackdropDismiss: false,
            duration: 3000
        })
        loader.present().then( ()=>{
            setTimeout(() => {
                this.navCtrl.setRoot(UserDataPage);
            }, 3000);
        });
    }
}