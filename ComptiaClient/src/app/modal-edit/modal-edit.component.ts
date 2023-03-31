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

  niveauTypes = [
    { value: 'Novice', label: 'Novice' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Expert', label: 'Expert' }
  ]

  ngOnInit(): void {
    // set the component properties to the certificate values
    this.niveau = this.certificate.niveau;
    this.name = this.certificate.name;
    this.description = this.certificate.description;
    this.active = this.certificate.active;
    console.log(this.active)
  }

  onEdit() {
    const editedCert = {
      ...this.certificate, // keep the certificate ID
      niveau: this.niveau,
      name: this.name,
      description: this.description,
      active: this.active
    };
    this.confirmEdit.emit(editedCert);
  }

  onCancel() {
    this.confirmEdit.emit(false);
  }

}
