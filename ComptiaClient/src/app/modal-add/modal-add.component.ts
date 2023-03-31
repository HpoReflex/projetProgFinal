import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styles: [
  ]
})
export class ModalAddComponent {

  @Output() confirmAdd = new EventEmitter<any>();

  niveau: string = '';
  name: string = '';
  description: string = '';
  active: number = 0;

  niveauTypes = [
    { value: 'Novice', label: 'Novice' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Expert', label: 'Expert' }
  ]

  onAdd() {
    const newCert = { niveau: this.niveau, name: this.name, description: this.description, active: this.active };
    this.confirmAdd.emit(newCert);
  }

  onCancel() {
    this.confirmAdd.emit(false);
  }

}
