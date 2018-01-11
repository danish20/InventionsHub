import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { InventionsComponent } from './inventions/inventions.component';


@NgModule({
  declarations: [
    AppComponent,
    InventionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
