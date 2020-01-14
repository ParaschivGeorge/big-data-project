import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BitcoinComponent} from './compoents/bitcoin/bitcoin.component';
import {LitecoinComponent} from './compoents/litecoin/litecoin.component';


const routes: Routes = [
  { path: 'bitcoin', component: BitcoinComponent },
  { path: 'litecoin', component: LitecoinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
