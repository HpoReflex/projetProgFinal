import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryItemsListComponent } from './InventoryItems/inventoryItems.component';
import { ButtonComponantComponent } from './button-componant/button-componant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal-delete/modal.component';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { MatSelectModule } from '@angular/material/select';
import { ModalEditComponent } from './modal-edit/modal-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    InventoryItemsListComponent,
    ButtonComponantComponent,
    ModalComponent,
    ModalAddComponent,
    ModalEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
