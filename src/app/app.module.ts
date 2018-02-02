import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VoiceSimPage } from '../pages/voice-sim/voice-sim';
import { UserDataPage } from '../pages/user-data/user-data';
import { CertificatePage } from '../pages/certificate/certificate';
import { ElectronicSignaturePage } from '../pages/electronic-signature/electronic-signature';
import { ChoosePlanPage } from '../pages/choose-plan/choose-plan';
import { CreditCardPage } from '../pages/credit-card/credit-card';
import { PaymentPage } from '../pages/payment/payment';
import { ThanksPage } from '../pages/thanks-page/thanks-page';
import { PayBillPage } from '../pages/pay-bill/pay-bill';
import { ShowBillPage } from '../pages/show-bill/show-bill';
import { BillPaymentPage } from '../pages/bill-payment/bill-payment';
import { BillConfirmationPage } from '../pages/bill-confirmation/bill-confirmation';
import { HelpCenterPage } from '../pages/help-center/help-center';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VoiceSimPage,
    UserDataPage,
    CertificatePage,
    ElectronicSignaturePage,
    ChoosePlanPage,
    CreditCardPage,
    PaymentPage,
    ThanksPage,
    PayBillPage,
    ShowBillPage,
    BillPaymentPage,
    BillConfirmationPage,
    HelpCenterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VoiceSimPage,
    UserDataPage,
    CertificatePage,
    ElectronicSignaturePage,
    ChoosePlanPage,
    CreditCardPage,
    PaymentPage,
    ThanksPage,
    PayBillPage,
    ShowBillPage,
    BillPaymentPage,
    BillConfirmationPage,
    HelpCenterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
