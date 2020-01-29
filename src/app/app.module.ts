import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { MenuComponent }            from './menu/menu.component';
import { MDBBootstrapModule }       from 'angular-bootstrap-md';
import { FooterComponent }          from './footer/footer.component';
import { HomeComponent }            from './home/home.component';
import { DetalheprodutoComponent }  from './detalheproduto/detalheproduto.component';
import { ListagemprodutoComponent } from './listagemproduto/listagemproduto.component';
import { HttpClientModule }         from '@angular/common/http';
import { FormsModule }              from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    DetalheprodutoComponent,
    ListagemprodutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
