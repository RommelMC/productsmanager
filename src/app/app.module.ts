import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ProdlistComponent } from './prodlist/prodlist.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './prodlist/item/item.component';
import {ProductsService} from './products.service';
@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ProdlistComponent,
    CreateComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
