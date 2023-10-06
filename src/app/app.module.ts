import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EnderecoComponent} from "./endereco-list/endereco.component";
import {EnderecoService} from "./services/endereco.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EnderecoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EnderecoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
