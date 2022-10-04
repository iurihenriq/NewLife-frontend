import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { MenuTabPanelComponent } from './shared/menu-tab-panel/menu-tab-panel.component';
import { MenuTabDetailsComponent } from './shared/menu-tab-details/menu-tab-details.component';
import { DialogComponent } from './shared/dialog-confirmacao/dialog.component';
import { DialogOkComponent } from './shared/dialog-ok/dialog-ok.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuTabPanelComponent,
    MenuTabDetailsComponent,
    DialogComponent,
    DialogOkComponent,
  ],
  imports: [
    AppRoutingModule,
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxMaskModule,
    NgxMaskModule.forRoot({dropSpecialCharacters: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }