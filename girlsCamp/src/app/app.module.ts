import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
<<<<<<< HEAD
import { SobreComponent } from './sobre/sobre.component';
=======
import { InicioComponent } from './inicio/inicio.component';
>>>>>>> fca40ab5925086c372c3028f1910a3da4f218e83

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
<<<<<<< HEAD
    SobreComponent
=======
    InicioComponent
>>>>>>> fca40ab5925086c372c3028f1910a3da4f218e83
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
