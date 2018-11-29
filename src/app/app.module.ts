import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { BuyerHomeComponent } from './Buyer/buyer-home/buyer-home.component';
import { SearchVhlComponent } from './Buyer/buyer-home/search-vhl/search-vhl.component';
import { SearchImmatComponent } from './Buyer/buyer-home/search-immat/search-immat.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './All/navbar/navbar.component';
import { SearchBarComponent } from './Buyer/buyer-home/search-bar/search-bar.component';
import { FooterComponent } from './All/footer/footer.component';
import { PartGroupsComponent } from './Buyer/part-groups/part-groups.component';
import { PanierComponent } from './Buyer/panier/panier.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { ConnexionComponent } from './Sign-up/connexion/connexion.component';
import { CreationCompteComponent } from './Sign-up/creation-compte/creation-compte.component';
import { AnnouncePieceComponent } from './Buyer/announce-piece/announce-piece.component';
import { AnnouncesListComponent } from './Buyer/announces-list/announces-list.component';
import { AnnounceItemComponent } from './Buyer/announce-item/announce-item.component';

const routes: Routes = [
  { path: '', component: BuyerHomeComponent },
  { path: 'part-groups', component: PartGroupsComponent },
  { path: 'panier', component: PanierComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'creationCompte', component: CreationCompteComponent},
  { path: 'announce-piece', component: AnnouncePieceComponent},
  { path: 'announce-list', component: AnnouncesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BuyerHomeComponent,
    SearchVhlComponent,
    SearchImmatComponent,
    SearchBarComponent,
    FooterComponent,
    PartGroupsComponent,
    NavbarComponent,
    SearchBarComponent,
    PanierComponent,
    AnnouncesListComponent,
    AnnounceItemComponent,
    AnnouncePieceComponent,
    ConnexionComponent,
    CreationCompteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
