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
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ConnexionComponent } from './Sign-up/connexion/connexion.component';
import { CreationCompteComponent } from './Sign-up/creation-compte/creation-compte.component';
import { AnnouncePieceComponent } from './Buyer/announce-piece/announce-piece.component';
import { AnnouncesListComponent } from './Buyer/announces-list/announces-list.component';
import { AnnounceItemComponent } from './Buyer/announce-item/announce-item.component';
import { BoiteAirComponent } from './Buyer/part-item-moteur/part-item-boiteAir/boite-air/boite-air.component';
import { FiltreAirComponent } from './Buyer/part-item-moteur/part-item-boiteAir/filtre-air/filtre-air.component';
import { CableAccelerateurComponent } from './Buyer/part-item-moteur/part-item-cables/cable-accelerateur/cable-accelerateur.component';
import { CableEmbrayageComponent } from './Buyer/part-item-moteur/part-item-cables/cable-embrayage/cable-embrayage.component';
import { CableStarterComponent } from './Buyer/part-item-moteur/part-item-cables/cable-starter/cable-starter.component';
import { BrideComponent } from './Buyer/part-item-moteur/part-item-carburationInjection/bride/bride.component';
import { CarburateurComponent } from './Buyer/part-item-moteur/part-item-carburationInjection/carburateur/carburateur.component';
import { InjectionComponent } from './Buyer/part-item-moteur/part-item-carburationInjection/injection/injection.component';
import { PipeAdmissionComponent } from './Buyer/part-item-moteur/part-item-carburationInjection/pipe-admission/pipe-admission.component';
import { DemarreurComponent } from './Buyer/part-item-moteur/part-item-demarreur/demarreur/demarreur.component';
import { RoueDemarreurComponent } from './Buyer/part-item-moteur/part-item-demarreur/roue-demarreur/roue-demarreur.component';
import { CollecteurComponent } from './Buyer/part-item-moteur/part-item-echappement/collecteur/collecteur.component';
import { PotComponent } from './Buyer/part-item-moteur/part-item-echappement/pot/pot.component';
import { SondeComponent } from './Buyer/part-item-moteur/part-item-echappement/sonde/sonde.component';
import { AxeMoteurComponent } from './Buyer/part-item-moteur/part-item-moteur/axe-moteur/axe-moteur.component';
import { CarterDroitComponent } from './Buyer/part-item-moteur/part-item-moteur/carter-droit/carter-droit.component';
import { CarterGaucheComponent } from './Buyer/part-item-moteur/part-item-moteur/carter-gauche/carter-gauche.component';
import { MoteurCompletComponent } from './Buyer/part-item-moteur/part-item-moteur/moteur-complet/moteur-complet.component';
import { PieceMoteurDetailComponent } from './Buyer/part-item-moteur/part-item-moteur/piece-moteur-detail/piece-moteur-detail.component';
import { BouchonRadiateurComponent } from './Buyer/part-item-moteur/part-item-radiateur/bouchon-radiateur/bouchon-radiateur.component';
import { CalorstatComponent } from './Buyer/part-item-moteur/part-item-radiateur/calorstat/calorstat.component';
import { DuriteRefroidissementComponent } from './Buyer/part-item-moteur/part-item-radiateur/durite-refroidissement/durite-refroidissement.component';
import { RadiateurComponent } from './Buyer/part-item-moteur/part-item-radiateur/radiateur/radiateur.component';
import { RadiateurCompletComponent } from './Buyer/part-item-moteur/part-item-radiateur/radiateur-complet/radiateur-complet.component';
import { VaseExpansionComponent } from './Buyer/part-item-moteur/part-item-radiateur/vase-expansion/vase-expansion.component';
import { VentilateurComponent } from './Buyer/part-item-moteur/part-item-radiateur/ventilateur/ventilateur.component';





const routes: Routes = [
  { path: '', component: BuyerHomeComponent },
  { path: 'part-groups', component: PartGroupsComponent },
  { path: 'panier', component: PanierComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'creation-compte', component: CreationCompteComponent},
  { path: 'announce-piece', component: AnnouncePieceComponent },
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
    CreationCompteComponent,
    BoiteAirComponent,
    FiltreAirComponent,
    CableAccelerateurComponent,
    CableEmbrayageComponent,
    CableStarterComponent,
    BrideComponent,
    CarburateurComponent,
    InjectionComponent,
    PipeAdmissionComponent,
    DemarreurComponent,
    RoueDemarreurComponent,
    CollecteurComponent,
    PotComponent,
    SondeComponent,
    AxeMoteurComponent,
    CarterDroitComponent,
    CarterGaucheComponent,
    MoteurCompletComponent,
    PieceMoteurDetailComponent,
    BouchonRadiateurComponent,
    CalorstatComponent,
    DuriteRefroidissementComponent,
    RadiateurComponent,
    RadiateurCompletComponent,
    VaseExpansionComponent,
    VentilateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatExpansionModule,
    MatCardModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
