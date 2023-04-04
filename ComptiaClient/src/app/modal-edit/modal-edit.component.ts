import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styles: [
  ]
})
export class ModalEditComponent {

  @Input() certificate: any;
  @Output() confirmEdit = new EventEmitter<any>();

  niveau: string = '';
  name: string = '';
  description: string = '';
  active: number = 0;

  // Values for drop-down menu "Niveau"
  niveauTypes = [
    { value: 'Novice', label: 'Novice' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Expert', label: 'Expert' }
  ]

  // to set proper values corresponding to certificate being edited
  ngOnInit(): void {
    this.niveau = this.certificate.niveau;
    this.name = this.certificate.name;
    this.description = this.certificate.description;
    this.active = this.certificate.active;
    console.log(this.active)
  }

  // Confirm Cert edit
  onEdit() {
    const editedCert = {
      ...this.certificate, // To create new object and keep id
      niveau: this.niveau,
      name: this.name,
      description: this.description,
      active: this.active
    };
    this.confirmEdit.emit(editedCert);
  }

  // Cancel Cert edit
  onCancel() {
    this.confirmEdit.emit(false);
  }

}
