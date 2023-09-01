import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AccueilComponent} from './accueil/accueil.component';
import{AProposComponent} from './a-propos/a-propos.component';
import{ServicesComponent} from './services/services.component';
import{ContactComponent} from './contact/contact.component';
const routes: Routes = [
  {path: '', component:AccueilComponent},
  {path: 'a-propos', component:AProposComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
