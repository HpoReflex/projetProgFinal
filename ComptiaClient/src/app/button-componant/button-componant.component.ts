import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-componant',
  templateUrl: './button-componant.component.html',
  styles: [
  ]
})
export class ButtonComponantComponent implements OnInit{
  

  @Input()
  text!: string;
  @Input()
  color!: string;
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
