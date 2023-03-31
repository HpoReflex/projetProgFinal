import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryItemsListComponent } from './InventoryItems/inventoryItems.component';

const routes: Routes = [
  { path: 'InventoryItemsList', component: InventoryItemsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
