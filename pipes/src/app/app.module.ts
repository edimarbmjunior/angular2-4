import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './pipeNovo/camel-case.pipe';
import { registerLocaleData } from '../../node_modules/@angular/common';
import br from '@angular/common/locales/br';
import { SettingsService } from './shared/settings.service';

registerLocaleData(br);

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'br'
    }
    // SettingsService,
    // {
    //   provide: LOCALE_ID,
    //   deps: [SettingsService],
    //   useFactory: (settingsService) => settingsService.getLocale()
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
