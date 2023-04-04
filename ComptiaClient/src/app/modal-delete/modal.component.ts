import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent {

  @Output() confirmDelete = new EventEmitter<boolean>();

  // Confirm Cert deletion
  onDelete() {
    this.confirmDelete.emit(true);
  }

  // Cancel Cert deletion (close modal)
  onCancel() {
    this.confirmDelete.emit(false);
  }

}
