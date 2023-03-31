import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItem } from './inventoryItems';
import { ModalComponent } from 'app/modal-delete/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddComponent } from 'app/modal-add/modal-add.component';
import { ModalEditComponent } from 'app/modal-edit/modal-edit.component';

@Component({
  selector: 'InventoryItemsList',
  templateUrl: "inventoryItemsList.component.html",
  styles: [  ]
})
export class InventoryItemsListComponent implements OnInit {
  public inventoryItems: InventoryItem[] | undefined;
  private api = "http://localhost:7054/api/InventoryItems";

  @Output() onDeleteCert: EventEmitter<InventoryItem> = new EventEmitter();

  constructor(private httpClient: HttpClient, private router: Router, private matDialog:MatDialog) { }

  ngOnInit(): void {
    console.log('InventoryItemsListComponent');
    this.httpClient.get<InventoryItem[]>(`${this.api}`).subscribe(result => this.inventoryItems = result);
  }

  modalOpen() {
    const modal = this.matDialog.open(ModalComponent,{
    width:'450px',
    height:'80px',
    });
    
    modal.componentInstance.confirmDelete.subscribe((result: boolean) => {
    if (result) {
      this.deleteCert();
      modal.close();
    }
    else {
      modal.close();
    }
    });
  }

  modalOpenAdd() {
    const modalOpen = this.matDialog.open(ModalAddComponent,{
    width:'455px',
    maxHeight:'502px',
    });

    modalOpen.componentInstance.confirmAdd.subscribe((newCert: any) => {
      if (newCert) {
        this.addCertificate(newCert);
        modalOpen.close();
      }
      else{
        modalOpen.close();
      }
    });
  }

  modalOpenEdit(certificate: InventoryItem) {
    const modalOpen = this.matDialog.open(ModalEditComponent,{
    width:'455px',
    maxHeight:'502px',
    });

    modalOpen.componentInstance.certificate = certificate;

    modalOpen.componentInstance.confirmEdit.subscribe((editedCert: InventoryItem) => {
      if (editedCert) {
        this.editCertificate(editedCert);
        modalOpen.close();
      }
      else{
        modalOpen.close();
      }
    });
  }

  addCertificate(newCert: any) {
    this.httpClient.post<InventoryItem>(`${this.api}`, newCert).subscribe(result => {
      this.httpClient.get<InventoryItem[]>(`${this.api}`).subscribe(result => this.inventoryItems = result);
    }, error => {
      console.error(error);
    });
  }

  editCertificate(editedCert: InventoryItem) {
    this.httpClient.put<InventoryItem>(`${this.api}`, editedCert).subscribe(result => {
      this.httpClient.get<InventoryItem[]>(`${this.api}`).subscribe(result => this.inventoryItems = result);
    }, error => {
      console.error(error);
    });
  }

  removeCertificate(inventoryItem: any) {
    this.onDeleteCert.emit(inventoryItem);
  }

  selectedCert:number|undefined;

  selectCert(id:number) {
    this.selectedCert = id;
  }

  deleteCert()
  {
    if(this.selectedCert != undefined){
      this.httpClient.delete(`${this.api}/${this.selectedCert}`, ).subscribe(result => {
        this.inventoryItems = this.inventoryItems?.filter(item => item.id !== this.selectedCert);
      }, error =>{ console.error(error)});
    }
  }
  }
  
