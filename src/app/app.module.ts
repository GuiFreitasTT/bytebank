import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from "./nova-transferencia/nova-transferencia.component";
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        AppComponent,
        NovaTransferenciaComponent,
        ExtratoComponent
    ],
    providers: [
      {provide: LOCALE_ID, useValue: 'pt'},
      {
         provide: DEFAULT_CURRENCY_CODE,
         useValue: 'BRL'
      }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule
    ]
})
export class AppModule { }
