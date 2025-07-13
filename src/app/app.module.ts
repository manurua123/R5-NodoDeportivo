import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './components/02-hero/hero.component';
import { NavbarComponent } from './components/01-navbar/navbar.component';
import { DeportesComponent } from './components/03-deportes/deportes.component';
import { EspaciosComponent } from './components/04-espacios/espacios.component';
import { ServiciosComponent } from './components/05-servicios/servicios.component';
import { UbicacionComponent } from './components/06-ubicacion/ubicacion.component';
import { ContactoComponent } from './components/07-contacto/contacto.component';
 import { FooterComponent } from './components/08-footer/footer.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    DeportesComponent,
    EspaciosComponent,
    ServiciosComponent,
    UbicacionComponent,
    ContactoComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'esp',
    }),
  ],
  providers: [provideHttpClient(withFetch()), provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
