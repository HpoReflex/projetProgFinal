import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent {

  @Output() confirmDelete = new EventEmitter<boolean>();


  onDelete() {
    this.confirmDelete.emit(true);
  }

  onCancel() {
    this.confirmDelete.emit(false);
  }

}
