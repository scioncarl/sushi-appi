import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardSushiBoxeComponent } from './component/card-sushi-boxe/card-sushi-boxe.component';
import { ContainerCardSushiBoxesComponent } from './component/container-card-sushi-boxes/container-card-sushi-boxes.component';
import { HttpClientModule } from '@angular/common/http';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { PagePanierComponent } from './component/page-panier/page-panier.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardSushiBoxeComponent,
    ContainerCardSushiBoxesComponent,
    RgpdComponent,
    PagePanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
