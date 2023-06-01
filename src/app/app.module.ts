import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { JavacmdComponent } from './javacmd/javacmd.component';
import { JavaguiComponent } from './javagui/javagui.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontendComponent,
    BackendComponent,
    JavacmdComponent,
    JavaguiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
